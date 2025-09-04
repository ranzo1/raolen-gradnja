"use client";

import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import { useTranslations } from "next-intl";
import PageTitle from "@/src/components/PageTitle";
import Animated from "@/src/components/animations/Animated";

// leaflet css
import "leaflet/dist/leaflet.css";

import { fadeIn } from "@/src/components/animations/variants";

const Location = () => {
  const t = useTranslations("LocationPage");

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
      title: t("bus"),
      subtitle: t("basLabel"),
      address: "Аутобуска станица, Инђија",
      distance: "1000m",
      image: "/location/3.webp",
      iconUrl: "/location/markers/bus-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.047563403099176, 20.07855873364977],
      title: t("sport"),
      subtitle: t("sportLabel"),
      address: "Cara Dušana 2a, Inđija",
      distance: "700m",
      image: "/location/4.webp",
      iconUrl: "/location/markers/run-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.0497648775468, 20.08961627848285],
      title: t("park"),
      subtitle: t("parkLabel"),
      address: "Kratka 14, Inđija",
      distance: "750m",
      image: "/location/5.webp",
      iconUrl: "/location/markers/tree-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.048923568976385, 20.092122911618947],
      title: t("train"),
      subtitle: t("trainLabel"),
      address: "Železnička bb, Inđija 22320",
      distance: "650m",
      image: "/location/6.webp",
      iconUrl: "/location/markers/train-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.046811169710644, 20.07737726162274],
      title: t("hospital"),
      subtitle: t("hospitalLabel"),
      address: "Srpskocrkvena 5, Inđija",
      distance: "950m",
      image: "/location/7.webp",
      iconUrl: "/location/markers/hospital-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.05087402583116, 20.0796804412193],
      title: t("kindergarten"),
      subtitle: t("kindergartenLabel"),
      address: "Dušana Jerkovića 17a, Inđija 22320",
      distance: "650m",
      image: "/location/8.webp",
      iconUrl: "/location/markers/home-heart-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.04971755975467, 20.081068234790866],
      title: t("school"),
      subtitle: t("schoolLabel"),
      address: "Dušana Jerkovića 1, Inđija 22320",
      distance: "450m",
      image: "/location/9.webp",
      iconUrl: "/location/markers/school-fill.svg",
      iconSize: [35, 35],
    },
    {
      position: [45.04994285491406, 20.084289786348048],
      title: t("center"),
      subtitle: t("centerLabel"),
      address: "Trg Slobode, Inđija 22320",
      distance: "350m",
      image: "/location/10.webp",
      iconUrl: "/location/markers/building-2-fill.svg",
      iconSize: [35, 35],
    },
  ];

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  const createCustomIcon = (
    iconUrl,
    iconSize,
    isFirst,
    title = "location marker"
  ) => {
    const customHtml = isFirst
      ? `
    <div>
      <img src="${iconUrl}" alt="${title}" style="width:180px; height:180px;" />
    </div>
  `
      : (() => {
          const isMobile =
            typeof window !== "undefined" && window.innerWidth < 640; // Tailwind's sm breakpoint
          const size = isMobile ? 50 : 64;
          const padding = isMobile ? 15 : 20;

          return `
        <div style="
          margin: 0 auto;
          background-color: white;
          margin-bottom: 1rem;
          width: ${size}px;
          height: ${size}px;
          padding: ${padding}px;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        ">
          <img src="${iconUrl}" alt="${title}" style="max-width: 100%; max-height: 100%;" />
        </div>
      `;
        })();

    return divIcon({
      html: customHtml,
      className: "",
      iconSize: iconSize,
    });
  };

  return (
    <section className="">
      {/* Title */}
      <PageTitle title={t("title")} text={t("p")} />
      {/* locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-5 gap-5">
        {markers.map((marker, index) => {
          return marker.distance ? (
            <Animated
              animation={fadeIn("right", 0.4)}
              elementType="div"
              key={index}
              className="bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden flex-1 border-gray-200 p-6"
            >
              <div className="text-center">
                <div className="mx-auto mb-4 w-20 h-20 p-5 rounded-full shadow-md sm:w-16 sm:h-16 sm:p-4">
                  <Image
                    alt={`Raolen Gradnja – ${marker.title} icon in Inđija, Serbia`}
                    src={marker.iconUrl}
                    height={40}
                    width={40}
                    className="mb-3 sm:h-8 sm:w-8"
                  />
                </div>

                <h2 className="text-lg leading-6 text-gray-900 font-medium title-font">
                  {marker.title}
                </h2>
                <h4 className="text-black font-normal mt-1">
                  {marker.distance}
                </h4>
                <p className="text-sm">{marker.subtitle}</p>
              </div>
            </Animated>
          ) : null;
        })}
      </div>

      {/* Map */}
      <Animated
        id="location"
        animation={fadeIn("left", 0.2)}
        elementType="section"
      >
        <MapContainer
          center={[45.0459, 20.0848]}
          zoom={isMobile ? 14.5 : 15.4}
          className={`${isMobile ? "h-[400px]" : "h-[600px]"} z-10`}
          doubleClickZoom={false}
          closePopupOnClick={false}
          dragging={true}
          zoomSnap={false}
          touchZoom={false}
          scrollWheelZoom={false}
          attributionControl={false}
        >
          <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
          {/* markers */}
          {markers.map((marker, index) => {
            const markerIcon = createCustomIcon(
              marker.iconUrl,
              marker.iconSize,
              index === 0,
              `Raolen Gradnja – ${marker.title} marker in Inđija`
            );

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
                          alt={`Raolen Gradnja – ${marker.title} facility in Inđija, Serbia`}
                        />
                      </div>
                    </div>
                  </Popup>
                ) : null}
              </Marker>
            );
          })}
        </MapContainer>
      </Animated>
    </section>
  );
};

export default Location;
