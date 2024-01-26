"use client";
import React, { useEffect, useCallback, useMemo, useContext } from "react";
import dynamic from "next/dynamic";

import fetchIpGeoData from "./(api)/fetchIpGeoData";
import IpCard from "./components/IpCard/IpCard";
import IpComboBox from "./components/IpCombobox/IpCombobox";
import { AppContext } from "./context/AppContext";

const loadingMsg = "Loading...";

const Map = dynamic(() => import("./components/Map/Map.jsx"), {
  ssr: false,
});

const App = () => {
  const {
    inputValue,
    setInputValue,
    geoData,
    setGeoData,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchIpGeoData();
        setGeoData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleChange = useCallback((event) => {
    setInputValue(event);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      setIsLoading(true);
      setIsError(false);

      const data = await fetchIpGeoData(inputValue);
      setGeoData(data);

      if (data.error) {
        setIsError(true);
      }

      setIsLoading(false);
    },
    [inputValue]
  );

  const { ip, location, isp } = geoData || {};
  const center = useMemo(() => {
    return location ? [location.lat, location.lng] : [34.0648, -118.086];
  }, [location]);

  const cardData = useMemo(() => {
    if (isError) {
      return [];
    }
    return [
      {
        title: "IP ADDRESS",
        info: isLoading ? loadingMsg : ip,
      },
      {
        title: "LOCATION",
        info: isLoading
          ? loadingMsg
          : `${location.city}, ${location.region}, ${location.zip}`,
      },
      {
        title: "TIMEZONE",
        info: isLoading ? loadingMsg : location.timezone,
      },
      {
        title: "ISP",
        info: isLoading ? loadingMsg : isp,
      },
    ];
  }, [ip, isp, location, isLoading, isError]);

  return (
    <div className="h-screen flex flex-col items-center">
      <IpComboBox handleChange={handleChange} handleSubmit={handleSubmit} />

      {isError ? (
        <h1>{geoData.error}</h1>
      ) : (
        <>
          <IpCard cardData={cardData} />

          <Map position={center} />
        </>
      )}
    </div>
  );
};

export default App;
