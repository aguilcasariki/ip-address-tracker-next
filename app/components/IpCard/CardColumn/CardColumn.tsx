"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import CardColumnInfoSkeleton from "@/components/IpCard/CardColumn/CardColumnInfoSkeleton";

interface CardColumnProps {
  colTitle: string;
  colInfo: string;
  colError?: string | null;
}

export default function CardColumn({
  colTitle,
  colInfo,
  colError,
}: CardColumnProps) {
  const context = useContext(AppContext);
  const { isLoading } = context;
  return (
    <div className="card_column items-center flex flex-col font-bold wrap-anywhere px-4">
      <h2 className="card_column-title text-[0.625rem] text-dark-gray">
        {colTitle}
      </h2>
      {isLoading ? (
        <CardColumnInfoSkeleton />
      ) : (
        <p className="card_column-info mt-1 md:text-lg text-center">
          {colError ? "Error" : colInfo}
        </p>
      )}
    </div>
  );
}
