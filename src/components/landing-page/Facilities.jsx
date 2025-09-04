"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay, Pagination } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeIn } from "@/src/components/animations/variants";
import PageTitle from "../PageTitle";
import Animated from "@/src/components/animations/Animated";

const Facilities = () => {
  const t = useTranslations("FacilitiesPage");
  const facilitiesData = [
    {
      img: "/facilities/img-4.webp",
      message: t("marketText"),
      title: t("marketTitle"),
      subtitle: t("marketSubTitle"),
    },
    {
      img: "/facilities/img-5.webp",
      message: t("cafeText"),
      title: t("cafeTitle"),
      subtitle: t("cafeSubTitle"),
    },
    {
      img: "/facilities/img-6.webp",
      message: t("playroomText"),
      title: t("playroomTitle"),
      subtitle: t("playroomSubTitle"),
    },
  ];
  return (
    <div id="facilities" className=" bg-white xl:mb-0">
      {/* Title */}
      <PageTitle title={t("title")} text={t("p")} />
      <Animated
        animation={fadeIn("up", 0.2)}
        elementType="section"
        className=" w-full"
      >
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
            {facilitiesData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" grid grid-cols-1 xl:grid-cols-3 gap-5">
                    {/* img */}
                    <div className="relative xl:col-span-2 bg-white border-2 shadow-sm border-outline rounded-md">
                      <Image
                        src={slide.img}
                        layout="responsive"
                        width={400}
                        height={400}
                        className="rounded-md"
                        alt={`Raolen Gradnja – ${slide.title} facility in Inđija, Serbia`}
                      />
                    </div>
                    {/* text */}
                    <div
                      className=" bg-white border-2 shadow-sm border-outline rounded-md p-12"
                      elementType="div"
                    >
                      <h2 className="h2 mb-2 mt-2">{slide.title}</h2>
                      <p className="text-gold text-sm mb-6">{slide.subtitle}</p>
                      <p>{slide.message}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Animated>
      </Animated>
    </div>
  );
};

export default Facilities;
