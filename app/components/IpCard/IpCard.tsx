"use client";
import CardColumn from "@/components/IpCard/CardColumn/CardColumn";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

const IpCard = () => {
  const context = useContext(AppContext);
  const { geoData, error } = context;

  const columnData = [
    {
      title: "IP Address",
      info: geoData?.ip,
    },
    {
      title: "Location",
      info: `${geoData?.location?.city}, ${geoData?.location?.state}`,
    },
    {
      title: "ISP",
      info: geoData?.isp?.isp,
    },
    {
      title: "Timezone",
      info: `UTC ${geoData?.location?.timezone}`,
    },
  ];

  return (
    <div className="ip_card_wrapper w-full flex  justify-center items-center mt-20 max-md:h-96 lg:mt-40 z-50 px-2 absolute">
      <Collapsible className="w-full max-w-5xl rounded-2xl p-6 bg-white shadow-lg flex flex-col ">
        {/* Desktop view */}
        <div className="hidden sm:grid md:grid-cols-4 md:divide-x md:divide-dark-gray/20">
          {columnData.map((data) => (
            <CardColumn
              key={data.title}
              colTitle={data.title}
              colInfo={data.info}
              colError={error}
            />
          ))}
        </div>

        {/* Mobile view */}
        <div className=" md:hidden flex items-center justify-around">
          <div className="  flex flex-col items-center gap-y-4">
            {columnData.slice(0, 2).map((data) => (
              <CardColumn
                key={data.title}
                colTitle={data.title}
                colInfo={data.info}
                colError={error}
              />
            ))}
            <CollapsibleContent className="data-[state=closed]:animate-collapsible-up overflow-hidden data-[state=open]:animate-collapsible-down w-full flex flex-col items-center gap-y-4 transition-all duration-300">
              {columnData.slice(2).map((data) => (
                <CardColumn
                  key={data.title}
                  colTitle={data.title}
                  colInfo={data.info}
                  colError={error}
                />
              ))}
            </CollapsibleContent>
          </div>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="icon" className="size-8">
              <ChevronsUpDown />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </Collapsible>
    </div>
  );
};

export default IpCard;
