import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import PropTypes from "prop-types";
const markerIcon = new Icon({
  iconUrl: "../../../images/icon-location.svg",
  iconSize: [null, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

const Map = ({ position }) => {
  return (
    <MapContainer
      key={position.join(",")}
      center={position}
      zoom={50}
      className="w-screen h-full md:mt-[-4.2rem] mt-[-7.8rem] -z-50"
      scrollWheelZoom={false}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Marker position={position} icon={markerIcon}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

Map.propTypes = {
  position: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Map;
