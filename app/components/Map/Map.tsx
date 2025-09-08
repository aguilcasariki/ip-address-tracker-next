import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  MapContainerProps,
} from "react-leaflet";
import { Icon } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.fullscreen/Control.FullScreen.css";
import "leaflet.fullscreen";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
const markerIcon = new Icon({
  iconUrl: "/icon-location.svg",
  iconSize: [null, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});
interface ExtendedMapContainerProps extends MapContainerProps {
  fullscreenControl?: boolean;
  fullscreenControlOptions?: { position: string };
}

const ExtendedMapContainer =
  MapContainer as React.ComponentType<ExtendedMapContainerProps>;

const Map = () => {
  const context = useContext(AppContext);
  const { geoData } = context;
  const position: [number, number] = [
    geoData?.location?.latitude ?? 0,
    geoData?.location?.longitude ?? 0,
  ];

  return (
    <ExtendedMapContainer
      key={position.join(",")}
      center={position}
      zoom={50}
      className="w-screen h-full z-0"
      zoomControl={false}
      fullscreenControl={true}
      fullscreenControlOptions={{ position: "bottomright" }}
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
      <ZoomControl position="bottomleft" />
    </ExtendedMapContainer>
  );
};

export default Map;
