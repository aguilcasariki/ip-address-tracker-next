import CardColumn from "../CardColumn/CardColumn";
import PropTypes from "prop-types";

const IpCard = ({ cardData }) => {
  return (
    <div className="ip_card_wrapper p-5 md:p-7 w-11/12 bg-white shadow z-50 -mt-28 rounded-lg lg:w-9/12  md:-mt-16">
      <div className="grid  grid-rows-4 md:grid-rows-none md:grid-cols-4 gap-y-2">
        <CardColumn columnData={cardData} />
      </div>
    </div>
  );
};

IpCard.propTypes = {
  cardData: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default IpCard;
