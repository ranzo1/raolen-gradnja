"use client";

import {
  apartmentsData,
  floorPremises,
  premiseTypes,
} from "@/data/apartmentsData";
import { notFound, usePathname } from "next/navigation";
import Image from "next/image";
import Footer from "@/src/components/Footer";
import PageTitle from "@/src/components/PageTitle";
import { useTranslations } from "next-intl";
import Animated from "@/src/components/animations/Animated";
import { fadeIn } from "@/src/components/animations/variants";
import { useMediaQuery } from "react-responsive";
import { RiHomeFill, RiHomeSmile2Fill } from "react-icons/ri";
import Header from "@/src/components/header/Header";
import Nav from "@/src/components/header/Nav";
import NavMobile from "@/src/components/header/NavMobile";

interface ApartmentProps {
  params: {
    locale: string;
    id: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default function Apartment({ params, searchParams }: ApartmentProps) {
  const t = useTranslations("ApartmentsPage");
  const headerTrans = useTranslations("Header");
  const pathname = usePathname();
  const currentLanguage = pathname.split("/")[1] || "sr";

  const links = [
    {
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}`,
      name: headerTrans("home"),
      offset: 0,
    },
    {
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}/apartments`,
      name: headerTrans("apartments"),
      offset: 0,
    },
  ];

  const mobileLinks = [
    {
      icon: <RiHomeFill />,
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}`,
      name: headerTrans("home"),
      offset: 0,
    },
    {
      icon: <RiHomeSmile2Fill />,
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}/apartments`,
      name: headerTrans("apartments"),
      offset: 0,
    },
  ];

  const apartmentId = parseInt(params.id, 10);
  const apartment = apartmentsData.find((apt) => apt.id === apartmentId);

  const filter = searchParams.filter;

  if (!apartment) return notFound();

  return (
    <section className="bg-white">
      <Header
        nav={
          <Nav
            links={links}
            containerStyles="hidden xl:flex gap-x-12 text-black font-semibold"
            linkStyles="capitalize hover:cursor-pointer"
          />
        }
        navMobile={
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
            links={mobileLinks}
          />
        }
      />
      <div className="h-[200px]"></div>
      <div className="container min-h-screen py-10">
        <PageTitle
          title={t(`titles.${apartment.titleKey}`)}
          text={`${apartment.area} m²`}
          className="border-2 shadow-sm border-outline rounded-md text-center mb-5 p-10 bg-background"
          textClassName="h3 font-medium mx-auto mb-8"
        />
        {filter && (
          <div className="mb-6 text-center text-sm text-gray-600">
            Query filter: {filter}
          </div>
        )}
        <div className=" grid grid-cols-1 xl:grid-cols-4 gap-5">
          {/* Floor data */}
          <Animated
            className="col-span-1 xl:col-span-1 bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden p-8"
            elementType="div"
            animation={fadeIn("right", 0.2)}
          >
            <h3 className="text-2xl md:text-xl mb-6 md:mb-5">
              {t(`floors.${apartment.floor}`)}
            </h3>
            {floorPremises[apartment.floor].map((premise, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-3 rounded-md"
              >
                <div className="mb-4 w-20 h-20 p-5 rounded-full shadow-md sm:w-16 sm:h-16 sm:p-4">
                  <Image
                    src={premise.icon}
                    alt={t(`floorPremises.${apartment.floor}.${premise.key}`)}
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <h4 className="text-md font-medium">
                    {t(`floorPremises.${premise.key}`)}
                  </h4>
                  {premise.area && (
                    <p className="text-sm text-gray-600">{premise.area} m²</p>
                  )}
                </div>
              </div>
            ))}
          </Animated>

          {/* img */}
          <Animated
            className="col-span-1 xl:col-span-3 bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden relative"
            elementType="div"
            animation={fadeIn("left", 0.5)}
          >
            <Image
              src={"/apartment/3Drender.png"}
              layout="responsive"
              width={400}
              height={400}
              className="rounded-md"
              alt="Vision"
            />
          </Animated>
        </div>
        {/* premises */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 pb-5 gap-5 my-5">
          {apartment.premises.map((premise, index) => {
            const info = premiseTypes[premise.type];

            return (
              <Animated
                animation={fadeIn("right", 0.4)}
                elementType="div"
                key={index}
                className="bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden flex-1 border-gray-200 p-6"
              >
                <div className="text-center">
                  <div className="mx-auto mb-4 w-20 h-20 p-5 rounded-full shadow-md sm:w-16 sm:h-16 sm:p-4">
                    <Image
                      alt={info.name}
                      src={info.icon}
                      height={40}
                      width={40}
                      className="mb-3 sm:h-8 sm:w-8"
                    />
                  </div>

                  <h2 className="text-lg leading-6 text-gray-900 font-medium title-font">
                    {t(`premises.${premise.type}`)}
                  </h2>
                  <h4 className="text-black font-normal mt-1">
                    {premise.area} m²
                  </h4>
                </div>
              </Animated>
            );
          })}
        </div>
      </div>
      <div className="h-[200px]"></div>
      <Footer />
    </section>
  );
}
