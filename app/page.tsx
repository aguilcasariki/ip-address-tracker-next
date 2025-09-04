import IpCard from "@/components/IpCard/IpCard";

import IpInput from "@/components/IpInput";
import MapWrapper from "@/components/Map/MapWrapper";

const index = () => {
  return (
    <div className="h-screen min-h-[667px] flex flex-col items-center">
      <IpInput />

      <IpCard />

      <MapWrapper />
    </div>
  );
};

export default index;
