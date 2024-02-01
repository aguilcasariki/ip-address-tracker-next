import dynamic from "next/dynamic";

import IpCard from "./components/IpCard/IpCard";
import IpComboBox from "./components/IpCombobox/IpCombobox";
import { useBusinessLogic } from "./hook/businessLogic";

const Map = dynamic(() => import("./components/Map/Map.jsx"), {
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
    <div className="h-screen flex flex-col items-center">
      <IpComboBox handleChange={handleChange} handleSubmit={handleSubmit} />

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
