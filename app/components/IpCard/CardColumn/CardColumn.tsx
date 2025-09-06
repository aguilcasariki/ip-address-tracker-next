"use client";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";

export default function CardColumn() {
  const context = useContext(AppContext);
  const { geoData, isLoading, error } = context;

  const columnData = [
    {
      title: "IP Address",
      info: !isLoading ? geoData?.ip : "...",
    },
    {
      title: "Location",
      info: !isLoading
        ? `${geoData?.location?.city}, ${geoData?.location?.state}`
        : "...",
    },
    {
      title: "ISP",
      info: !isLoading ? geoData?.isp?.isp : "...",
    },
    {
      title: "Timezone",
      info: !isLoading ? `UTC ${geoData?.location?.timezone}` : "...",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-y-0 rounded-2xl  p-6 bg-white shadow-lg">
      {columnData.map((data, i) => (
        <div
          key={i}
          className={`card_column items-center flex flex-col font-bold wrap-anywhere px-4  ${
            i === 0 ? "" : "md:border-l md:border-solid md:border-dark-gray"
          }`}
        >
          <h2 className="card_column-title text-[0.625rem] text-dark-gray">
            {data.title}
          </h2>
          <p className="card_column-info mt-1 md:text-lg text-center">
            {error ? "Error" : data.info}
          </p>
        </div>
      ))}
    </div>
  );
}
