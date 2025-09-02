"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay, Pagination } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { fadeIn } from "@/src/components/animations/variants";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useTranslations } from "next-intl";
import Stats from "@/src/components/landing-page/Stats";
import Animated from "@/src/components/animations/Animated";
import PageTitle from "@/src/components/PageTitle";
import { useEffect } from "react";

const Plan = () => {
  const t = useTranslations("PlanPage");
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  const plansData = [
    {
      img: "/plan/1.webp",
      message: t("apartmentsSlide.text"),
      title: t("apartmentsSlide.title"),
      // subtitle: t("marketSubTitle"),
      statsData: [
        {
          value: 3,
          name: t("apartmentsSlide.groundFloor"),
          unit: null,
        },
        {
          value: 8,
          name: t("apartmentsSlide.firstFloor"),
          unit: null,
        },
        {
          value: 8,
          name: t("apartmentsSlide.secondFloor"),
          unit: null,
        },
        {
          value: 7,
          name: t("apartmentsSlide.thirdFloor"),
          unit: null,
        },
      ],
    },
    {
      img: "/plan/2.webp",
      message: t("apartmentSizesSlide.text"),
      title: t("apartmentSizesSlide.title"),
      //subtitle: t("marketSubTitle"),
      statsData: [
        {
          value: 29,
          name: t("apartmentSizesSlide.smallestApartment"),
          unit: "m",
        },
        {
          value: 105,
          name: t("apartmentSizesSlide.biggestApartment"),
          unit: "m",
        },
      ],
    },
    {
      img: "/plan/3.webp",
      message: t("businessPremisesSlide.text"),
      title: t("businessPremisesSlide.title"),
      //subtitle: t("cafeSubTitle"),
      statsData: [
        {
          value: 1,
          name: t("businessPremisesSlide.premises"),
          unit: null,
        },
        ,
      ],
    },
    {
      img: "/plan/4.webp",
      message: t("apartmentNetoSlide.text"),
      title: t("apartmentNetoSlide.title"),
      //subtitle: t("playroomSubTitle"),
      statsData: [
        {
          value: 1710,
          name: t("apartmentNetoSlide.apartmentNeto"),
          unit: "m",
        },
        {
          value: 143,
          name: t("apartmentNetoSlide.businessPremisesNeto"),
          unit: "m",
        },
      ],
    },
    {
      img: "/plan/5.webp",
      message: t("parkingSlide.text"),
      title: t("parkingSlide.title"),
      //subtitle: t("playroomSubTitle"),
      statsData: [
        {
          value: 27,
          name: t("parkingSlide.parkingSpot"),
          unit: null,
        },
        {
          value: 2,
          name: t("parkingSlide.parkingSpotDisabledPeople"),
          unit: null,
        },
        {
          value: 1,
          name: t("parkingSlide.parkingSpotOutside"),
          unit: null,
        },
      ],
    },

    {
      img: "/plan/6.webp",
      message: t("greenAreaSlide.text"),
      title: t("greenAreaSlide.title"),
      //subtitle: t("cafeSubTitle"),
      statsData: [
        {
          value: 588,
          name: t("greenAreaSlide.greenArea"),
          unit: "m",
        },
      ],
    },

    {
      img: "/plan/7.webp",
      message: t("completionTimelineSlide.text"),
      title: t("completionTimelineSlide.title"),
      //subtitle: t("marketSubTitle"),
      statsData: [
        {
          value: 2025,
          name: t("completionTimelineSlide.permit"),
          unit: null,
        },
        {
          value: 2025,
          name: t("completionTimelineSlide.construction"),
          unit: null,
        },
        {
          value: 2026,
          name: t("completionTimelineSlide.movingInApartment"),
          unit: null,
        },
      ],
    },
  ];

  return (
    <section className="mt-5 xl:pt-0" ref={ref} id="plan">
      {/* Title */}
      <PageTitle title={t("title")} text={t("p")} />
      <Animated animation={fadeIn("up", 0.4)} elementType="div" className="">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
          className=" overflow-hidden"
        >
          {plansData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 h-auto xl:h-[500px]">
                  {/* img */}
                  <div className="relative xl:col-span-3 bg-white border-2 shadow-sm border-outline rounded-md w-full h-[250px] md:h-[300px] xl:h-full">
                    <Image
                      src={slide.img}
                      fill
                      className="rounded-md object-cover"
                      alt={`Raolen Gradnja – ${slide.title} plan in Inđija, Serbia`}
                    />
                  </div>
                  {/* text */}
                  <div
                    className="bg-white border-2 shadow-sm border-outline rounded-md p-4 md:p-6 flex flex-col justify-between min-h-[20rem] "
                    elementType="div"
                  >
                    <h2 className="text-lg md:text-3xl font-bold mb-2">
                      {slide.title}
                    </h2>
                    <p className="text-sm md:text-base flex-grow">
                      {slide.message}
                    </p>

                    {/* stats */}
                    <div className="flex mt-4 xl:mt-6 h-full">
                      <Stats
                        statsData={slide.statsData}
                        includeSup={slide.statsData.every(
                          (item) => item.unit === "m"
                        )}
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Animated>
    </section>
  );
};

export default Plan;
