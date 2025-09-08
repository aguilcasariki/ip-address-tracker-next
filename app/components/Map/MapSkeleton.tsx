import { Skeleton } from "../ui/skeleton";

const MapSkeleton = () => {
  return (
    <div className="size-full flex items-end justify-between p-2">
      <Skeleton className="w-7 h-14 bg-border  rounded-xs" />
      <div className="size-full flex items-center justify-center">
        <Skeleton className="size-10 bg-border rounded-full" />
      </div>
      <Skeleton className="size-7 bg-border rounded-xs" />
    </div>
  );
};

export default MapSkeleton;
