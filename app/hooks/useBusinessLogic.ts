import { useCallback, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { getGeoData } from "@/actions/getIpGeoData";

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
    setError,
  } = context;

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
      setError(null);

      const data = await getGeoData(inputValue);
      setGeoData(data);
      if (data.error) {
        setError(data.error);
      }

      setIsLoading(false);
    },
    [inputValue, setGeoData, setIsLoading, setError]
  );

  return {
    handleChange,
    handleSubmit,
  };
};
