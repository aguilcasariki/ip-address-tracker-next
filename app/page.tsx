import IpCard from "@/components/IpCard/IpCard";
import IpInput from "@/components/IpInput";
import MapWrapper from "@/components/Map/MapWrapper";
import AppContextProvider from "@/context/AppContext";
import { getGeoData } from "@/actions/getIpGeoData";

const Page = async () => {
  const initialGeoData = await getGeoData();
  return (
    <AppContextProvider initialGeoData={initialGeoData}>
      <div className="h-screen min-h-[667px] flex flex-col items-center">
        <IpInput />
        <IpCard />
        <MapWrapper />
      </div>
    </AppContextProvider>
  );
};

export default Page;
