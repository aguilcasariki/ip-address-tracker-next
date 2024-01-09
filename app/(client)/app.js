"use client";

import IpInput from "./components/IpInput/IpInput";
import Map from "./components/Map/Map";
import fetchIpGeoData from "./api/fetchIpGeoData";
import { useCallback, useMemo, useState } from "react";
import IpCard from "./components/IpCard/IpCard";
import useTimezoneConvert from "./hooks/useTimezoneConvert";
import { useQuery } from "@tanstack/react-query";
const loadingMsg = "Loading...";
const initialData = {
  query: "185.211.213.148",
  city: "Ambo Village",
  region: "Québec",
  zip: "K2C",
  isp: "Jaloo",
  timezone: "Pacific/Tarawa",
  lat: 1.35317,
  lon: 173.04259,
};

const App = () => {
  // Define the initial state of inputValue and ip as empty strings.
  const [inputValue, setInputValue] = useState("");
  const [ip, setIp] = useState("");

  // Use the useQuery hook to fetch the IP geolocation data.
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["geoData", ip],
    initialData: initialData, // Unique key to identify the query.
    queryFn: () => fetchIpGeoData(ip), // Function that returns the query promise.
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus.
  });

  /* console.log("LA DATA EN EL FRONT ES: ", data); */

  // Define the callbacks to handle form change and submission.
  const handleChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      console.log("SE HIZO EL SUBMIT"), event.preventDefault();
      setIp(inputValue.trim());
      refetch(); // Re-fetch the IP geolocation data.
    },
    [inputValue, refetch]
  );

  // Use a custom hook to convert the timezone to a readable string.
  const timezones = useTimezoneConvert(data?.timezone);

  // Use useMemo to avoid unnecessary calculations of center and cardData.
  const center = useMemo(
    () => (data ? [data.lat, data.lon] : [34.0648, -118.086]),
    [data]
  );

  const cardData = useMemo(
    () => [
      {
        title: "IP ADDRESS",
        info: data?.query ?? loadingMsg,
      },
      {
        title: "LOCATION",
        info: data
          ? `${data.city}, ${data.region} 
        ${data.zip}`
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
        info: data?.isp ?? loadingMsg,
      },
    ],
    [data, timezones]
  );

  // Render the IpInput, IpCard, and Map components with the fetched information.
  return (
    <div className="h-screen flex flex-col items-center">
      <IpInput handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && <p>{loadingMsg}</p>}
      {isError && <p>Error: {isError.message}</p>}
      <IpCard cardData={cardData} />
      <Map position={center} />
    </div>
  );
};

export default App;
