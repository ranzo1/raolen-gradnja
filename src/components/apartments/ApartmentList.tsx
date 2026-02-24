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
  rooms: string | null;
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
      apartmentType === "all" ? true : apartment.type === apartmentType,
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
    <div className="relative w-[220px] mx-auto">
      <select
        className="
        peer w-full h-11 pl-4 pr-10 text-sm text-black
        rounded-md border border-gray-300 bg-white shadow-sm
        appearance-none
        transition-[box-shadow,border-color] duration-200
        focus:outline-none focus:ring-4 focus:ring-gold/30 focus:border-gold
        hover:border-gray-400
        disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed
      "
        onChange={(e) => handleTypeChange(e.target.value)}
        value={apartmentType}
        aria-label="Apartment type"
      >
        {apartmentTypes.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      {/* Chevron icon */}
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 peer-focus:text-gold transition-colors"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );

  return (
    <section className="container md:min-h-screen flex flex-col">
      <PageTitle
        title={t("title")}
        text={t("p")}
        className="border-2 shadow-sm border-outline rounded-md text-center mb-3 md:mb-5 p-6 md:p-10 bg-background"
        titleClassName="h3 md:h2 mb-4 md:mb-10"
        titleHeading="h1"
        picker={picker}
      />

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ${
          filteredApartments.length === 1 ? "mt-2" : ""
        }`}
      >
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

              <div className="p-3 xl:p-6 flex-grow flex flex-col justify-center text-center bg-background transition-colors duration-300 group-hover:bg-gold">
                <p className="mb-2 transition-colors duration-300 group-hover:text-white">
                  {t(`floors.${apartment.floor}`)}
                </p>
                <h4 className="h4 transition-colors duration-300 group-hover:text-white">
                  {t(`titles.${apartment.titleKey}`)}
                </h4>
                <p className="transition-colors duration-300 group-hover:text-white">
                  {apartment.rooms && `${t(`rooms.${apartment.rooms}`)} - `}
                  {apartment.area} m<sup>2</sup>
                </p>
              </div>
            </Link>
          </Animated>
        ))}
      </div>

      {filteredApartments.length > 1 ? (
        <div className="h-5 md:h-[100px]" />
      ) : (
        <div className="h-4 md:h-8" />
      )}
    </section>
  );
};

export default ApartmentList;
