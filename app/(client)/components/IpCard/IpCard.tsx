import CardColumn from "./CardColumn/CardColumn";
import PropTypes from "prop-types";

const IpCard = ({ cardData }) => {
  return (
    <div className="ip_card_wrapper p-3 md:p-5 w-11/12 bg-white shadow z-40 -mt-32 rounded-lg lg:w-9/12  md:-mt-20 lg:-mt-16">
      <div className="grid md:grid-rows-none md:grid-cols-4 gap-y-2">
        <CardColumn columnData={cardData} />
      </div>
    </div>
  );
};

export default IpCard;
