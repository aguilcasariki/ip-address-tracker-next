"use client";
import { useState, createContext } from "react";

export const AppContext = createContext({});

const AppContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [geoData, setGeoData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        geoData,
        setGeoData,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
