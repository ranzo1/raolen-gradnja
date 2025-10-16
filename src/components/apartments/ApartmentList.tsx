"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageTitle from "@/src/components/PageTitle";
import Animated from "../animations/Animated";
import { fadeIn } from "../animations/variants";
import { useMediaQuery } from "react-responsive";

interface Apartment {
  id: number;
  type: string;
  coverImage: string;
  floor: string;
  titleKey: string;
  area: number;
  soldOut?: boolean;
}

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentListProps> = ({ apartments }) => {
  const t = useTranslations("ApartmentsPage");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLanguage = pathname.split("/")[1] || "sr";
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  // Apartment types should match exactly what's used in the Apartments component
  const apartmentTypes = [
    { value: "all", label: t("all") },
    { value: "small", label: t("studioApartments") },
    { value: "medium", label: t("apartments1") },
    { value: "large", label: t("apartments3") },
    { value: "office", label: t("apartments2") },
  ];

  // Get initial type from URL search params
  const initialType = searchParams?.get("selected") || "all";
  const [apartmentType, setApartmentType] = useState<string>(initialType);
  const [filteredApartments, setFilteredApartments] = useState<Apartment[]>([]);

  // Filter apartments whenever type changes
  useEffect(() => {
    const filtered = apartments.filter((apartment) =>
      apartmentType === "all" ? true : apartment.type === apartmentType
    );
    setFilteredApartments(filtered);
  }, [apartmentType, apartments]);

  const handleTypeChange = (value: string) => {
    setApartmentType(value);
    // Update URL without page reload
    const newUrl = new URL(window.location.href);
    if (value === "all") {
      newUrl.searchParams.delete("selected");
    } else {
      newUrl.searchParams.set("selected", value);
    }
    window.history.pushState({}, "", newUrl.toString());
  };

  const picker = (
    <select
      className="w-[200px] h-[40px] mx-auto block border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none"
      onChange={(e) => handleTypeChange(e.target.value)}
      value={apartmentType}
    >
      {apartmentTypes.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );

  return (
    <section className="container min-h-screen flex flex-col justify-between">
      <PageTitle
        title={t("title")}
        text={t("p")}
        className="border-2 shadow-sm border-outline rounded-md text-center mb-5 p-10 bg-background"
        titleClassName="h3 md:h2 mb-6 md:mb-10"
        titleHeading="h1"
        picker={picker}
      />

      {/* Tailwind responsive grid replaces JS-based columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredApartments.map((apartment) => (
          <Animated
            elementType="div"
            animation={fadeIn("up", 0.4)}
            className="bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden hover:cursor-pointer group hover:bg-gold col-span-1 flex flex-col"
            key={`${apartmentType}-${apartment.id}`}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}/apartments/${apartment.id}`}
              className="group flex flex-col flex-grow"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={apartment.coverImage}
                  alt={`${t(`titles.${apartment.titleKey}`)} – ${
                    apartment.area
                  } m² apartment in Inđija, Serbia`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {apartment.soldOut && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {t("soldOut")}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-grow flex flex-col justify-center text-center bg-background transition-colors duration-300 group-hover:bg-gold">
                <p className="mb-2 transition-colors duration-300 group-hover:text-white">
                  {t(`floors.${apartment.floor}`)}
                </p>
                <h4 className="h4 transition-colors duration-300 group-hover:text-white">
                  {t(`titles.${apartment.titleKey}`)}
                </h4>
                <p className="transition-colors duration-300 group-hover:text-white">
                  {apartment.area} m<sup>2</sup>
                </p>
              </div>
            </Link>
          </Animated>
        ))}
      </div>

      <div className={isMobile ? "h-10" : "h-[200px]"} />
    </section>
  );
};

export default ApartmentList;
