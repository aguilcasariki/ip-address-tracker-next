import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

const CardColumnInfoSkeleton = () => {
  return (
    <div className=" mt-2">
      <Skeleton className="h-5 bg-border rounded w-20" />
    </div>
  );
};

export default CardColumnInfoSkeleton;
