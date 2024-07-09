"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Pagination } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";

const Facilities = () => {
  const t = useTranslations("FacilitiesPage");
  const facilitiesData = [
    {
      img: "/facilities/img-4.png",
      message: t("marketText"),
      title: t("marketTitle"),
      subtitle: t("marketSubTitle"),
    },
    {
      img: "/facilities/img-5.png",
      message: t("cafeText"),
      title: t("cafeTitle"),
      subtitle: t("cafeSubTitle"),
    },
    {
      img: "/facilities/img-6.png",
      message: t("playroomText"),
      title: t("playroomTitle"),
      subtitle: t("playroomSubTitle"),
    },
  ];
  return (
    <div className=" bg-white xl:mb-0">
      <div className="border-2 shadow-sm border-outline rounded-md text-center mt-5  py-5 bg-background">
        <Animated
          animation={fadeIn("up", 0.2)}
          elementType="h2"
          className="h2 mb-6"
        >
          {t("title")}
        </Animated>
        <Animated
          animation={fadeIn("up", 0.4)}
          elementType="p"
          className="max-w-[638px] mx-auto "
        >
          {t("p")}
        </Animated>
      </div>
      <Animated
        animation={fadeIn("up", 0.2)}
        elementType="section"
        className=" w-full"
        id="facilities"
      >
        <Animated animation={fadeIn("up", 0.4)} elementType="div" className="">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="h-[950px] xl:h-[800px] overflow-hidden"
          >
            {facilitiesData.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className=" mt-5 grid grid-cols-1 xl:grid-cols-3 gap-5">
                    {/* img */}
                    <div className="relative xl:col-span-2 bg-white border-2 shadow-sm border-outline rounded-md">
                      <Image
                        src={slide.img}
                        layout="responsive"
                        width={400}
                        height={400}
                        className="rounded-md "
                        alt="Background"
                      />
                    </div>
                    {/* text */}
                    <div
                      className=" bg-white border-2 shadow-sm border-outline rounded-md p-12"
                      elementType="div"
                    >
                      <h2 className="h2 mb-2 mt-2">{slide.title}</h2>
                      <p className="mb-5 text-grey">{slide.subtitle}</p>
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
