import React from "react";

function page() {
  return <div>page</div>;
}

export default page;

/* import { useQuery } from "@tanstack/react-query";
import IpInput from "../components/IpInput/IpInput";
import Map from "../components/Map/Map";
import fetchIpGeoData from "../api/fetchIpGeoData";
import { useCallback, useMemo, useState } from "react";
import IpCard from "../components/IpCard/IpCard";
import useTimezoneConvert from "../hooks/useTimezoneConvert";

const App = () => {
  // Define the initial state of inputValue and ip as empty strings.
  const [inputValue, setInputValue] = useState("");
  const [ip, setIp] = useState("");

  // Use the useQuery hook to fetch the IP geolocation data.
  const { isLoading, data, isError, refetch } = useQuery({
    queryKey: ["geoData", ip], // Unique key to identify the query.
    queryFn: () => fetchIpGeoData(ip), // Function that returns the query promise.
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus.
  });

  // Define the callbacks to handle form change and submission.
  const handleChange = useCallback((event) => {
    setInputValue(event.target.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
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
        info: data?.query ?? "Loading...",
      },
      {
        title: "LOCATION",
        info: data
          //? `${data.city}, ${data.region} 
        ${data.zip}`
          : "Loading...",
      },
      {
        title: "TIMEZONE",
        info: timezones
          // ? `${timezones[0]}
        ${timezones[1]}`
          : "Loading...",
      },
      {
        title: "ISP",
        info: data?.isp ?? "Loading...",
      },
    ],
    [data, timezones]
  );

  // Render the IpInput, IpCard, and Map components with the fetched information.
  return (
    <div className="h-screen flex flex-col items-center">
      <IpInput handleChange={handleChange} handleSubmit={handleSubmit} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError.message}</p>}
      <IpCard cardData={cardData} />
      <Map position={center} />
    </div>
  );
};

export default App;
 */
