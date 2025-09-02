"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation"; // Add this import
import { fadeIn } from "@/src/components/animations/variants";
import PageTitle from "../PageTitle";
import Animated from "@/src/components/animations/Animated";

const Apartments = () => {
  const t = useTranslations("ApartmentsPage");
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname(); // Get current pathname

  // Extract language from pathname (first segment)
  const currentLanguage = pathname.split("/")[1] || "sr"; // Default to 'sr' if not found

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const apartmentDataMobile = [
    {
      image: "/apartments/1.webp",
      name: t("studioApartments"),
      value: "small",
      info: "< 50",
    },
    {
      image: "/apartments/2.webp",
      name: t("apartments1"),
      value: "medium",
      info: "50 - 70",
    },
    {
      image: "/apartments/3.webp",
      name: t("apartments2"),
      value: "large",
      info: "> 70",
    },
    {
      image: "/apartments/4.webp",
      name: t("apartments3"),
      value: "office",
      info: "144",
    },
  ];

  const apartmentDataDesktop = [
    {
      image: "/apartments/3.webp",
      name: t("apartments2"),
      value: "office",
      info: "144",
    },
    {
      image: "/apartments/1.webp",
      name: t("studioApartments"),
      value: "small",
      info: "< 50",
    },
    {
      image: "/apartments/2.webp",
      name: t("apartments1"),
      value: "medium",
      info: "50 - 70",
    },
    {
      image: "/apartments/4.webp",
      name: t("apartments3"),
      value: "large",
      info: "> 70",
    },
  ];

  const apartmentData = isMobile ? apartmentDataMobile : apartmentDataDesktop;

  return (
    <section className="mb-5" id="apartments">
      <div>
        <PageTitle
          title={t("title")}
          text={t("p")}
          buttonText={t("buttonText")}
          route={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}/apartments`} // Use dynamic language
        />
        <Animated
          animation={fadeIn("up", 0.6)}
          elementType="div"
          className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full"
        >
          {apartmentData.map((apartment, index) => {
            let colSpanClass;
            if (index % 2 === 0) {
              colSpanClass = index === 0 ? "md:col-span-2" : "md:col-span-1";
            } else {
              colSpanClass = index === 1 ? "md:col-span-1" : "md:col-span-2";
            }

            return (
              <Link
                key={index}
                href={{
                  pathname: `/${currentLanguage}/apartments`, // Use dynamic language
                  query: { selected: apartment.value },
                }}
                className={`no-underline ${colSpanClass} flex flex-col`}
              >
                <div className="bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden hover:cursor-pointer group hover:bg-gold transition-all duration-700">
                  <div className="relative w-full h-[200px] md:h-[300px]">
                    <Image
                      src={apartment.image}
                      alt={`Raolen Gradnja – ${apartment.name} in Inđija, Serbia, ${apartment.info} m²`}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-center text-center">
                    <h4 className="h4 group-hover:text-white transition-all duration-300">
                      {apartment.name}
                    </h4>
                    <p className="group-hover:text-white transition-all duration-300">
                      {apartment.info} m<sup>2</sup>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </Animated>
      </div>
    </section>
  );
};

export default Apartments;
