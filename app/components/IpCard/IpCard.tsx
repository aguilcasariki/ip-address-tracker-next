import CardColumn from "@/components/IpCard/CardColumn/CardColumn";

const IpCard = () => {
  return (
    <div className="ip_card_wrapper p-3 md:p-5 w-11/12 bg-white shadow-sm mt-40 z-50  rounded-lg lg:w-9/12  absolute">
      <div className="grid md:grid-rows-none md:grid-cols-4 gap-y-2">
        <CardColumn />
      </div>
    </div>
  );
};

export default IpCard;
