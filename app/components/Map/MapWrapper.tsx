"use client";
import { AppContext } from "@/context/AppContext";
import dynamic from "next/dynamic";
import { useContext } from "react";
import MapSkeleton from "./MapSkeleton";

const Map = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

const MapWrapper = () => {
  const context = useContext(AppContext);
  const { isLoading, error } = context;

  return (
    <>
      {isLoading ? (
        <MapSkeleton />
      ) : error ? (
        <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
          <h1>{error}</h1>
        </div>
      ) : (
        <Map />
      )}
    </>
  );
};

export default MapWrapper;
