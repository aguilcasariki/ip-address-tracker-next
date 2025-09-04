import { useEffect, useCallback, useMemo, useContext } from "react";
import { AppContext, GeoData } from "@/context/AppContext";

const fetchIpGeoData = async (target = ""): Promise<GeoData> => {
  try {
    const response = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ target }),
    });

    const data = await response.json();
    if (!response.ok) {
      return {
        error: data.error || `Request failed with status ${response.status}`,
      };
    }
    return data;
  } catch (error) {
    console.error("Error fetching IP geo data:", error);
    return { error: "An unexpected error occurred while fetching data." };
  }
};

export const useBusinessLogic = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error(
      "useBusinessLogic must be used within an AppContextProvider"
    );
  }
  const {
    inputValue,
    setInputValue,
    geoData,
    setGeoData,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  } = context;

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchIpGeoData();
      setGeoData(data);
    };

    fetchData();
  }, [setGeoData]); // The setters from context are stable, this effect runs only once on mount.

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.target.value);
    },
    [setInputValue]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
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
    [inputValue, setGeoData, setIsLoading, setIsError]
  );

  return {
    handleChange,
    handleSubmit,
  };
};
