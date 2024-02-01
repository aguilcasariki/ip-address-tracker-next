import { useEffect, useCallback, useMemo, useContext } from "react";
import fetchIpGeoData from "../(api)/fetchIpGeoData";
import { AppContext } from "../context/AppContext";
const loadingMsg = "Loading...";

export const useBusinessLogic = () => {
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
    setInputValue(event.target.value);
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

  return {
    inputValue,
    setInputValue,
    geoData,
    setGeoData,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
    handleChange,
    handleSubmit,
    center,
    cardData,
  };
};
