"use client";

import {
  apartmentsData,
  floorPremises,
  premiseTypes,
  finishes,
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
import { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

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
  const [zoomImage, setZoomImage] = useState<string | null>(null);

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
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const shouldShowFinishes = apartment?.id !== apartmentsData[0]?.id;

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
      <div
        style={{
          height: isMobile ? "60px" : "100px",
        }}
      ></div>
      <div className="container min-h-screen py-10">
        <PageTitle
          title={t(`titles.${apartment.titleKey}`)}
          text={`${apartment.area} m²`}
          className="border-2 shadow-sm border-outline rounded-md text-center mb-5 p-10 bg-background"
          textClassName="h3 font-medium mx-auto mb-8"
          titleHeading="h1"
        />
        {filter && (
          <div className="mb-6 text-center text-sm text-gray-600">
            Query filter: {filter}
          </div>
        )}

        {/* <Animated
          className="border-2 shadow-sm border-outline bg-white rounded-md overflow-hidden relative h-[250px] lg:h-auto flex items-center justify-center lg:block"
          elementType="div"
          animation={fadeIn("left", 0.5)}
        >
          <Zoom>
            <Image
              src={apartment.image}
              width={400}
              height={400}
              className="block w-full h-auto max-h-full cursor-pointer object-contain"
              alt={`3D render of apartment ${apartment.titleKey} in Inđija, Serbia`}
              sizes="(max-width: 1000px) 100vw, 75vw"
              quality={90}
              priority
            />
          </Zoom>
        </Animated> */}

        {/* slider */}
        <Animated
          animation={fadeIn("up", 0.4)}
          elementType="div"
          className="w-full mb-4 md:mb-6"
        >
          <style jsx global>{`
            .apartment-swiper .swiper-pagination {
              position: static;
              margin-top: 8px;
            }
          `}</style>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            speed={2000}
            className="apartment-swiper w-full overflow-hidden"
            autoHeight
          >
            {apartment.image.map((image, index) => {
              return (
                <SwiperSlide key={index} style={{ height: "auto" }}>
                  <div className="flex flex-col gap-2 w-full h-auto">
                    <button
                      type="button"
                      onClick={() => setZoomImage(image)}
                      className="relative bg-white border-2 shadow-sm border-outline rounded-md w-full"
                      aria-label="Open image zoom"
                    >
                      <Image
                        src={image}
                        width={1400}
                        height={900}
                        sizes="(max-width: 1280px) 100vw, 75vw"
                        className="w-full h-auto cursor-zoom-in"
                        style={{
                          objectFit: "contain",
                          borderRadius: "0.375rem",
                        }}
                        alt={`3D render of apartment ${apartment.titleKey} in Inđija, Serbia`}
                        quality={90}
                        priority
                      />
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Animated>

        <div className="grid grid-cols-1 gap-5">
          {/* Premises (cards) */}
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 pb-5">
              {apartment.premises.map((premise, index) => {
                const info = premiseTypes[premise.type];
                return (
                  <Animated
                    key={index}
                    elementType="div"
                    animation={fadeIn("right", 0.2)}
                    className="bg-white border-2 min-h-[190px] shadow-sm border-outline rounded-md overflow-hidden p-6"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 p-4 rounded-full shadow-md flex items-center justify-center">
                        <Image
                          alt={info.name}
                          src={info.icon}
                          height={40}
                          width={40}
                          className="h-10 w-10"
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

          {/* finishes data (cards below premises) */}
          {shouldShowFinishes && (
            <div>
              <div className="text-center">
                <Animated
                  elementType="h3"
                  animation={fadeIn("right", 0.2)}
                  className="h3 mb-6 md:mb-5"
                >
                  {t(`finishes.title`)}
                </Animated>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                {finishes.map((finish, index) => (
                  <Animated
                    key={index}
                    elementType="div"
                    animation={fadeIn("right", 0.2)}
                    className="bg-white border-2 min-h-[190px] shadow-sm border-outline rounded-md overflow-hidden p-6"
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 w-16 h-16 p-4 rounded-full shadow-md flex items-center justify-center">
                        <Image
                          src={finish.icon}
                          alt={t(`finishes.${finish.key}`)}
                          width={40}
                          height={40}
                          className="h-10 w-10"
                        />
                      </div>
                      <h4 className="text-lg leading-6 text-gray-900 font-medium title-font">
                        {t(`finishes.${finish.key}`)}
                      </h4>
                      {/* Finishes don’t have area */}
                    </div>
                  </Animated>
                ))}
              </div>
            </div>
          )}

          {/* Floor data (cards below characteristics) */}
          <div>
            <div className="text-center">
              <Animated
                elementType="h3"
                animation={fadeIn("right", 0.2)}
                className="h3 mb-6 md:mb-5"
              >
                {t(`floors.${apartment.floor}`)}
              </Animated>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
              {floorPremises[apartment.floor].map((premise, index) => (
                <Animated
                  key={index}
                  elementType="div"
                  animation={fadeIn("right", 0.2)}
                  className="bg-white border-2 min-h-[190px] shadow-sm border-outline rounded-md overflow-hidden p-6"
                >
                  <div className="text-center">
                    <div className="mx-auto mb-4 w-16 h-16 p-4 rounded-full shadow-md flex items-center justify-center">
                      <Image
                        src={premise.icon}
                        alt={t(`floorPremises.${premise.key}`)}
                        width={40}
                        height={40}
                        className="h-10 w-10"
                      />
                    </div>
                    <h4 className="text-lg leading-6 text-gray-900 font-medium title-font">
                      {t(`floorPremises.${premise.key}`)}
                    </h4>
                    {premise.area && (
                      <p className="text-black font-normal mt-1">
                        {premise.area} m²
                      </p>
                    )}
                  </div>
                </Animated>
              ))}
            </div>
          </div>
        </div>
      </div>

      {zoomImage && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full h-full flex flex-col">
            <button
              type="button"
              onClick={() => setZoomImage(null)}
              className="absolute top-4 right-4 text-white text-sm font-semibold z-10 px-4 py-2 bg-gold rounded hover:bg-gold/90"
              aria-label="Close zoom"
            >
              Close
            </button>
            <div className="flex-1 bg-white w-full h-full">
              <TransformWrapper
                initialScale={1}
                minScale={1}
                maxScale={5}
                wheel={{ step: 0.1 }}
                doubleClick={{ mode: "zoomIn", step: 0.5 }}
                centerOnInit
                limitToBounds={true}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    <div className="absolute top-2 left-2 z-50 flex gap-2 pointer-events-auto">
                      <button
                        type="button"
                        onClick={() => zoomIn()}
                        className="px-3 py-1 rounded bg-gold text-white text-sm font-semibold hover:bg-gold/90 pointer-events-auto"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => zoomOut()}
                        className="px-3 py-1 rounded bg-gold text-white text-sm font-semibold hover:bg-gold/90 pointer-events-auto"
                      >
                        -
                      </button>
                      <button
                        type="button"
                        onClick={() => resetTransform()}
                        className="px-3 py-1 rounded bg-gold text-white text-sm font-semibold hover:bg-gold/90 pointer-events-auto"
                      >
                        Reset
                      </button>
                    </div>
                    <TransformComponent
                      wrapperStyle={{ width: "100%", height: "100%" }}
                      contentStyle={{ width: "100%", height: "100%" }}
                    >
                      <Image
                        src={zoomImage}
                        width={1800}
                        height={1200}
                        sizes="(max-width: 1280px) 100vw, 75vw"
                        className="w-full h-full"
                        style={{ objectFit: "contain" }}
                        alt={`3D render of apartment ${apartment.titleKey} in Inđija, Serbia`}
                        quality={95}
                        priority
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </section>
  );
}
