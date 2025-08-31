"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import PageTitle from "@/src/components/PageTitle";
import Animated from "../animations/Animated";
import { fadeIn } from "../animations/variants";

interface Apartment {
  id: number;
  type: string;
  image: string;
  floor: string;
  titleKey: string;
  area: number;
  soldOut?: boolean;
  // name: string;
  // info: string;
}

interface ApartmentListProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentListProps> = ({ apartments }) => {
  const t = useTranslations("ApartmentsPage");
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLanguage = pathname.split("/")[1] || "sr";

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
    const filtered = apartments.filter((apartment) => {
      return apartmentType === "all" ? true : apartment.type === apartmentType;
    });
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
      className="w-[240px] lg:w-[540px] h-[46px] mx-auto block border border-gray-300 rounded-md px-4 py-2 text-sm shadow-sm focus:outline-none"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredApartments.map((apartment) => (
          <Animated
            elementType="div"
            animation={fadeIn("up", 0.4)}
            className="bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden hover:cursor-pointer group hover:bg-gold col-span-1 flex flex-col"
            key={`${apartmentType}-${apartment.id}`}
          >
            <Link
              href={`${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}/apartments/${apartment.id}`}
              className="flex flex-col flex-grow"
            >
              <div className="relative w-full h-[200px] md:h-[300px]">
                <Image
                  src={apartment.image}
                  alt={`${t(`titles.${apartment.titleKey}`)} – ${
                    apartment.area
                  } m² apartment in Inđija, Serbia`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center text-center">
                <p className="group-hover:text-white mb-2 transition-all duration-300">
                  {t(`floors.${apartment.floor}`)}
                </p>
                <h4 className="h4 group-hover:text-white transition-all duration-300">
                  {t(`titles.${apartment.titleKey}`)}
                </h4>
                <p className="group-hover:text-white transition-all duration-300">
                  {apartment.area} m<sup>2</sup>
                </p>
              </div>
            </Link>
          </Animated>
        ))}
      </div>
      <div className="h-[200px]"></div>
    </section>
  );
};

export default ApartmentList;
