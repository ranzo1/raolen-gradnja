"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

// leaflet css
import "leaflet/dist/leaflet.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const markers = [
  {
    position: [45.04699, 20.08537],
    title: "Univer Export",
    subtitle: "Supermarket.",
    distance: "20m",
    type: "market",
    image: "/map/1.png",
    iconUrl: "/map/markers/store-2-solid.svg",
    iconSize: [40, 40],
  },
  {
    position: [45.04826, 20.09203],
    title: "FK Indjija",
    subtitle: "Fudbalski klub.",
    distance: "1500m",
    type: "market",
    image: "/map/2.png",
    iconUrl: "/map/markers/football-solid.svg",
    iconSize: [40, 40],
  },
  {
    position: [45.04083166147802, 20.08672533005239],
    title: "Autobuska Stanica, Inđija",
    subtitle: "Autobuska i železnička stanica.",
    distance: "2000m",
    image: "/map/3.png",
    iconUrl: "/map/markers/bus-solid.svg",
    iconSize: [40, 40],
  },
  {
    position: [45.047563403099176, 20.07855873364977],
    title: "Sports Center Inđija",
    subtitle: "Centar za profesionalno bavljenje sportom i rekreaciju",
    distance: "1300m",
    image: "/map/4.png",
    iconUrl: "/map/markers/run-solid.svg",
    iconSize: [40, 40],
  },
  {
    position: [45.0497648775468, 20.08961627848285],
    title: "Park Kraljice Marije",
    subtitle: "Gradski park",
    distance: "1450m",
    image: "/map/5.png",
    iconUrl: "/map/markers/tree-solid.svg",
    iconSize: [40, 40],
  },
];

const Map = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div>
      {/* text */}
      <div className="text-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="h2 mb-6"
        >
          Lokacija
        </motion.h2>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-[638px] mx-auto mb-8"
        >
          Nalazimo se nedaleko od centra Inđije, a opet smešteni u mirnom kraju
          grada. Predstavljamo vam sve pogodnosti mesta na kom se nalazimo.
        </motion.p>
      </div>
      {/* locations */}
      <div className="flex flex-col xl:flex-row mx-2">
        {markers.map((marker, index) => {
          return (
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              key={index}
              className="bg-grey-secondary shadow-sm mx-2 mb-4 flex-1 border-gray-200 p-6 rounded-md"
            >
              <div className="">
                <Image
                  alt=""
                  src={marker.iconUrl}
                  height={40}
                  width={40}
                  className="mb-3"
                />
                <h2 className="text-lg text-gray-900 font-medium title-font">
                  {marker.title}
                </h2>
                <h4 className="text-black font-normal">{marker.distance}</h4>
                <p className="">{marker.subtitle}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Map */}
      <motion.section
        id="location"
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
      >
        <MapContainer
          center={[45.04437318237264, 20.08952561516737]}
          zoom={isMobile ? 14.5 : 15.4}
          className={`${isMobile ? "h-[400px]" : "h-[600px]"} z-10`}
          zoomControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {/* markers */}
          {markers.map((marker, index) => {
            const markerIcon = new Icon({
              iconUrl: marker.iconUrl,
              iconSize: marker.iconSize,
            });
            return (
              <Marker key={index} position={marker.position} icon={markerIcon}>
                <Popup>
                  <div className="flex gap-x-[30px]">
                    <div className="flex-1">
                      <h3>{marker.title}</h3>
                      <p className="leading-snug">{marker.subtitle}</p>
                    </div>
                    <div className="flex-1">
                      <Image
                        src={marker.image}
                        width={130}
                        height={160}
                        alt=""
                      />
                    </div>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </motion.section>
    </div>
  );
};

export default Map;
