import IpCard from "@/components/IpCard/IpCard";

import IpInput from "@/components/IpInput";
import Map from "@/components/Map";

const index = () => {
  return (
    <div className="h-screen min-h-[667px] flex flex-col items-center">
      <IpInput />

      <IpCard />

      <Map />
    </div>
  );
};

export default index;
