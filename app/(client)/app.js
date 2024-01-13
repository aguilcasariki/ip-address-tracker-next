"use client";
import IpInput from "./components/IpInput/IpInput";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./components/Map/Map.jsx"), {
  ssr: false,
});

import fetchIpGeoData from "./api/fetchIpGeoData";
import { useCallback, useMemo, useState } from "react";
import IpCard from "./components/IpCard/IpCard";
import useTimezoneConvert from "./hooks/useTimezoneConvert";

const loadingMsg = "Loading...";

const App = () => {
  // Define the initial state of inputValue and ip as empty strings.

  const [ip, setIp] = useState("");
  const [geoData, setGeoData] = useState();

  // Define the callbacks to handle form change and submission.
  const handleChange = useCallback((event) => {
    setIp(event);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      console.log("SE HIZO EL SUBMIT"), event.preventDefault();
      const data = fetchIpGeoData(ip);
      setGeoData(data);
    },
    [ip]
  );

  // Use a custom hook to convert the timezone to a readable string.
  const timezones = useTimezoneConvert(geoData?.timezone);

  // Use useMemo to avoid unnecessary calculations of center and cardData.
  const center = useMemo(() => {
    return geoData ? [geoData.lat, geoData.lon] : [34.0648, -118.086];
  }, [geoData]);

  const cardData = useMemo(
    () => [
      {
        title: "IP ADDRESS",
        info: geoData?.query ?? loadingMsg,
      },
      {
        title: "LOCATION",
        info: geoData
          ? `${geoData.city}, ${geoData.region} 
        ${geoData.zip}`
          : loadingMsg,
      },
      {
        title: "TIMEZONE",
        info: timezones
          ? `${timezones[0]}
        ${timezones[1]}`
          : loadingMsg,
      },
      {
        title: "ISP",
        info: geoData?.isp ?? loadingMsg,
      },
    ],
    [geoData, timezones]
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
