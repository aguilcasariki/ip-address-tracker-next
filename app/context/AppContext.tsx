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
  geoData: GeoData;
  setGeoData: Dispatch<SetStateAction<GeoData>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  error: string | null;
  setError: Dispatch<SetStateAction<string | null>>;
}

export const AppContext = createContext<AppContextType | null>(null);

const AppContextProvider = ({
  children,
  initialGeoData = {},
}: {
  children: ReactNode;
  initialGeoData?: GeoData;
}) => {
  const [geoData, setGeoData] = useState<GeoData>(initialGeoData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  return (
    <AppContext.Provider
      value={{
        geoData,
        setGeoData,
        isLoading,
        setIsLoading,
        error,
        setError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
