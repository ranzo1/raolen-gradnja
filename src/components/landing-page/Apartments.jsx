"use client";

import { Button } from "@/src/components/ui/button";
import { fadeIn } from "@/src/components/animations/variants";
import { useTranslations } from "next-intl";
import Animated from "@/src/components/animations/Animated";
import Image from "next/image";

const Apartments = () => {
  const t = useTranslations("ApartmentsPage");
  const apartmentData = [
    {
      image: "/apartments/3.png",
      name: t("apartments2"),
      info: "55 m2",
    },
    {
      image: "/apartments/1.png",
      name: t("studioApartments"),
      info: "35 m2",
    },
    {
      image: "/apartments/2.png",
      name: t("apartments1"),
      info: "45 m2",
    },
    {
      image: "/apartments/4.png",
      name: t("apartments3"),
      info: "75 m2",
    },
  ];

  return (
    <section className="mb-5" id="apartments">
      <div className="">
        {/* text */}
        <div className="flex flex-col items-center justify-center border-2 shadow-sm border-outline rounded-md mt-3 py-7 mb-5 bg-background">
          <Animated
            className="h2 mb-6"
            elementType="h2"
            animation={fadeIn("up", 0.2)}
          >
            {t("title")}
          </Animated>
          <Animated
            className="max-w-[638px]  mb-8"
            elementType="p"
            animation={fadeIn("up", 0.4)}
          >
            {t("p")}
          </Animated>
          <Animated animation={fadeIn("up", 0.6)} elementType="div">
            <Button variant="accent" className="px-12">
              {t("buttonText")}
            </Button>
          </Animated>
        </div>
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
                    {hotel.info}
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
