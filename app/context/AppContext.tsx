"use client";
import { GeoData } from "@/types/geoData";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface AppContextType {
  inputValue: string;
  setInputValue: Dispatch<SetStateAction<string>>;
  geoData: GeoData;
  setGeoData: Dispatch<SetStateAction<GeoData>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({
  children,
  initialGeoData = {},
}: {
  children: ReactNode;
  initialGeoData?: GeoData;
}) => {
  const [inputValue, setInputValue] = useState("");
  const [geoData, setGeoData] = useState<GeoData>(initialGeoData);
  const [isLoading, setIsLoading] = useState(!initialGeoData);
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
