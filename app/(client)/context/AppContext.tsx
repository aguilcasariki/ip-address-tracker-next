"use client";
import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

export interface GeoData {
  ip?: string;
  location?: {
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
  isp?: string;
  error?: string;
}

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

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [inputValue, setInputValue] = useState("");
  const [geoData, setGeoData] = useState<GeoData>({});
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
