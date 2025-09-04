"use client";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map/Map"), {
  ssr: false,
});

const MapWrapper = () => {
  return <Map />;
};

export default MapWrapper;
