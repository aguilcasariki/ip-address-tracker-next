"use client";
import { MapPinOff } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex h-dvh w-dvw items-center flex-col bg-border">
      <div className="md:bg-hero-pattern bg-hero-pattern-mobile bg-no-repeat bg-cover h-96 md:h-72 w-full"></div>
      <div className="flex items-center h-full gap-2">
        <MapPinOff className="size-7 text-destructive" />
        <h2 className="text-2xl text-destructive">
          Something went wrong! Please check your internet connection and try
          again .
        </h2>
      </div>
    </div>
  );
}
