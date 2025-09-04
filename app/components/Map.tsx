"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
const markerIcon = new Icon({
  iconUrl: "/icon-location.svg",
  iconSize: [null, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
});

const Map = () => {
  const context = useContext(AppContext);
  const { geoData } = context;
  const position: [number, number] = [
    geoData?.location?.latitude ?? 0,
    geoData?.location?.longitude ?? 0,
  ];
  return (
    <MapContainer
      key={position.join(",")}
      center={position}
      zoom={50}
      className="w-screen h-full"
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

export default Map;
