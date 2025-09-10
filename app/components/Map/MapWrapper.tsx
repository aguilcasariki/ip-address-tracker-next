"use client";
import { AppContext } from "@/context/AppContext";
import dynamic from "next/dynamic";
import { useContext } from "react";
import MapSkeleton from "./MapSkeleton";
import { MapPinOff } from "lucide-react";

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
        <div className="h-dvh w-dvw bg-border flex items-center justify-center">
          <MapPinOff className="size-7 text-destructive" />
          <h2 className="text-2xl text-destructive">{error}</h2>
        </div>
      ) : (
        <Map />
      )}
    </>
  );
};

export default MapWrapper;
