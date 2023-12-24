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
    title: "Raolen Gradnja",
    subtitle: null,
    distance: null,
    type: null,
    image: null,
    iconUrl: "/logo.svg",
    iconSize: [120, 120],
  },
  {
    position: [45.04083166147802, 20.08672533005239],
    title: "Autobuska Stanica",
    subtitle: "Autobuska stanica.",
    address: "Аутобуска станица, Инђија",
    distance: "1000m",
    image: "/location/3.png",
    iconUrl: "/location/markers/bus-solid.svg",
    iconSize: [35, 35],
  },
  {
    position: [45.047563403099176, 20.07855873364977],
    title: "Sports Center Inđija",
    subtitle: "Centar za profesionalno bavljenje sportom i rekreaciju.",
    address: "Cara Dušana 2a, Inđija",
    distance: "700m",
    image: "/location/4.png",
    iconUrl: "/location/markers/run-solid.svg",
    iconSize: [35, 35],
  },
  {
    position: [45.0497648775468, 20.08961627848285],
    title: "Park Kraljice Marije",
    subtitle: "Gradski park.",
    address: "Kratka 14, Inđija",
    distance: "750m",
    image: "/location/5.png",
    iconUrl: "/location/markers/tree-solid.svg",
    iconSize: [35, 35],
  },
  {
    position: [45.048923568976385, 20.092122911618947],
    title: "Železnička stanica",
    subtitle: "Železnička stanica.",
    address: "Železnička bb, Inđija 22320",
    distance: "650m",
    image: "/location/6.png",
    iconUrl: "/location/markers/train-solid.svg",
    iconSize: [35, 35],
  },
  {
    position: [45.046811169710644, 20.07737726162274],
    title: "Dom zdravlja",
    subtitle: "Dom zdravlja Dr Milorad-Mika Pavlović.",
    address: "Srpskocrkvena 5, Inđija",
    distance: "950m",
    image: "/location/7.png",
    iconUrl: "/location/markers/house-chimney-medical-solid.svg",
    iconSize: [35, 35],
  },
];

const Location = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <section className="bg-soft_green-secondary">
      {/* text */}
      <div className="text-center p-10">
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
          return marker.distance ? (
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
          ) : null;
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
          center={[45.045, 20.0848]}
          zoom={isMobile ? 14.5 : 15.4}
          className={`${isMobile ? "h-[400px]" : "h-[600px]"} z-10`}
          zoomControl={false}
          attributionControl={false}
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
                {marker.image ? (
                  <Popup>
                    <div className="flex flex-col items-center gap-x-[20px]">
                      <div className="flex-1">
                        <h3>{marker.title}</h3>
                        <p className="leading-snug">{marker.address}</p>
                      </div>
                      <div className="">
                        <Image
                          src={marker.image}
                          width={250}
                          height={250}
                          alt=""
                        />
                      </div>
                    </div>
                  </Popup>
                ) : null}
              </Marker>
            );
          })}
        </MapContainer>
      </motion.section>
    </section>
  );
};

export default Location;
