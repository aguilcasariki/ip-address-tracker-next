"use client";
import IpInput from "./components/IpInput/IpInput";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/Map/Map.jsx"), {
  ssr: false,
});

import fetchIpGeoData from "./api/fetchIpGeoData";
import { useCallback, useEffect, useMemo, useState } from "react";
import IpCard from "./components/IpCard/IpCard";
import useTimezoneConvert from "./hooks/useTimezoneConvert";

const loadingMsg = "Loading...";

const App = () => {
  // Define the initial state of inputValue and ip as empty strings.
  const [inputValue, setInputValue] = useState();
  const [geoData, setGeoData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIpGeoData();
      setGeoData(data);
    };

    fetchData();
  }, []);

  // Define the callbacks to handle form change and submission.
  const handleChange = useCallback((event) => {
    setInputValue(event);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      const data = await fetchIpGeoData(inputValue);
      setGeoData(data);
    },
    [inputValue]
  );

  const { ip, location, isp } = geoData ?? {};
  // Use useMemo to avoid unnecessary calculations of center and cardData.
  const center = useMemo(() => {
    return geoData ? [location.lat, location.lng] : [34.0648, -118.086];
  }, [geoData, location]);

  const cardData = useMemo(
    () => [
      {
        title: "IP ADDRESS",
        info: ip,
      },
      {
        title: "LOCATION",
        info: location
          ? `${location.city}, 
          ${location.region}, 
        ${location.zip}`
          : "",
      },
      {
        title: "TIMEZONE",
        info: location?.timezone,
      },
      {
        title: "ISP",
        info: isp,
      },
    ],
    [ip, isp, location]
  );

  // Render the IpInput, IpCard, and Map components with the fetched information.
  return (
    <div className="h-screen flex flex-col items-center">
      <IpInput handleChange={handleChange} handleSubmit={handleSubmit} />

      <IpCard cardData={cardData} />
      <Map position={center} />
    </div>
  );
};

export default App;
