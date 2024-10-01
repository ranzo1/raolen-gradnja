"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { fadeIn } from "@/src/components/animations/variants";
import { useTranslations } from "next-intl";
import PageTitle from "../PageTitle";
import Animated from "@/src/components/animations/Animated";
import Image from "next/image";

const Apartments = () => {
  const t = useTranslations("ApartmentsPage");
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the screen is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Data for mobile screens
  const apartmentDataMobile = [
    {
      image: "/apartments/1.png",
      name: t("studioApartments"),
      info: "35",
    },
    {
      image: "/apartments/2.png",
      name: t("apartments1"),
      info: "45",
    },
    {
      image: "/apartments/3.png",
      name: t("apartments2"),
      info: "55",
    },
    {
      image: "/apartments/4.png",
      name: t("apartments3"),
      info: "75",
    },
  ];

  // Data for larger screens
  const apartmentDataDesktop = [
    {
      image: "/apartments/3.png",
      name: t("apartments2"),
      info: "55",
    },
    {
      image: "/apartments/1.png",
      name: t("studioApartments"),
      info: "35",
    },
    {
      image: "/apartments/2.png",
      name: t("apartments1"),
      info: "45",
    },
    {
      image: "/apartments/4.png",
      name: t("apartments3"),
      info: "75",
    },
  ];

  // Choose the correct data array based on screen size
  const apartmentData = isMobile ? apartmentDataMobile : apartmentDataDesktop;

  return (
    <section className="mb-5" id="apartments">
      <div>
        {/* Title */}
        <PageTitle
          title={t("title")}
          text={t("p")}
          buttonText={t("buttonText")}
        />
        {/* apartment grid */}
        <Animated
          animation={fadeIn("up", 0.6)}
          elementType="div"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        >
          {apartmentData.map((hotel, index) => {
            let colSpanClass;
            if (index % 2 === 0) {
              colSpanClass = index === 0 ? "md:col-span-2" : "md:col-span-1";
            } else {
              colSpanClass = index === 1 ? "md:col-span-1" : "md:col-span-2";
            }

            return (
              <div
                className={`bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden hover:cursor-pointer group hover:bg-gold transition-all duration-700 ${colSpanClass} flex flex-col`}
                key={index}
              >
                <div className="relative w-full h-[200px] md:h-[300px]">
                  <Image
                    src={hotel.image}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col justify-center text-center">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.info} m<sup>2</sup>
                  </p>
                </div>
              </div>
            );
          })}
        </Animated>
      </div>
    </section>
  );
};

export default Apartments;
