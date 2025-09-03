import dynamic from "next/dynamic";

import { useBusinessLogic } from "./hook/businessLogic";
import IpCard from "./components/IpCard/IpCard";

const Map = dynamic(() => import("./components/Map/Map"), {
  ssr: false,
});

const App = () => {
  const {
    geoData,

    isError,

    handleChange,
    handleSubmit,
    center,
    cardData,
  } = useBusinessLogic();

  return (
    <div className="h-screen min-h-[667px] flex flex-col items-center">
      {isError ? (
        <div className=" h-full flex flex-col items-center justify-center px-6">
          <h1 className=" text-2xl">{geoData.error}</h1>
        </div>
      ) : (
        <>
          <IpCard cardData={cardData} />

          <Map position={center} />
        </>
      )}
    </div>
  );
};

export default App;
