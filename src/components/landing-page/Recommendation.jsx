"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// components
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Animated from "@/src/components/animations/Animated";

import { fadeIn } from "@/src/components/animations/variants";

const Recommendation = () => {
  const t = useTranslations("ProjectsPage");
  const recommendationData = [
    {
      name: t("title"),
      image: "/recommendation/hotel-1.png",
      location: t("subTitle"),
      desc: t("text"),
      price: 90,
      testimonial: {
        message:
          "Usluge ove firme ne ograničavaju se samo na prodaju. Oni takođe nude usluge upravljanja nekretninama, prateći stanje i održavanje objekta kako bi vlasnici bili bezbrižni. Pored toga, tim arhitekata i dizajnera unutrašnjosti u okviru firme može pomoći klijentima da svoj dom prilagode ličnom stilu.",
        personName: "",
      },
    },
    {
      name: t("title2"),
      image: "/recommendation/hotel-2.png",
      location: t("subTitle2"),
      desc: t("text"),
      price: 60,
      testimonial: {
        message:
          "Firma se ističe svojim sveobuhvatnim pristupom, prilagođavajući se individualnim potrebama svakog klijenta. Sa fokusom na transparentnosti, 'Kragujevac Real Estate Hub' pruža detaljne informacije o svakoj nekretnini, od virtuelnih obilazaka do temeljnih analiza stanja na tržištu.",
        personName: "",
      },
    },
  ];
  return (
    <Animated
      animation={fadeIn("up", 0.2)}
      elementType="section"
      className="pb-12 xl:pt-[157px] xl:pb-[112px] bg-grey-secondary relative"
      id="projects"
    >
      {/* slider */}
      <Animated animation={fadeIn("up", 0.4)} elementType="div">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {recommendationData.map((hotel, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="flex flex-col xl:flex-row xl:pl-[135px] gap-y-12 xl:gap-y-0">
                  {/* text */}
                  <div className="max-w-[345px] xl:pt-8 order-2 xl:order-1 text-center mx-auto xl:text-left xl:mx-0">
                    <h2 className="h2 mb-4">{hotel.name}</h2>
                    <p className="text-background text-sm mb-6">
                      {hotel.location}
                    </p>
                    <p className="mb-[60px]">{hotel.desc}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        {" "}
                        Saznaj više
                      </Button>
                      <div className="text-black">
                        <span className="font-bold text-2xl">
                          {hotel.price}
                        </span>
                        <span className="text-sm"> Stanova</span>
                      </div>
                    </div>
                  </div>
                  {/* image & testimonial */}
                  <div className="order-1 xl:mb-52 xl:order-2 flex-1 flex justify-center xl:justify-end relative h-[634px]">
                    <div>
                      <Image
                        src={hotel.image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=""
                        className="xl:rounded-tl-md xl:rounded-bl-md"
                      />
                      <div
                        className="bg-background p-4 text-white text-center hidden xl:text-left xl:max-w-[468px] xl:min-h-[212px] 
                      xl:absolute xl:bottom-0 xl:translate-x-1/2 xl:rounded-md xl:px-10"
                      >
                        <p className="mb-3 max-w-md mx-auto xl:max-w-none xl:mx-0 xl:mb-6">
                          {hotel.testimonial.message}
                        </p>
                        <p className="text-xl font-bold">
                          {hotel.testimonial.personName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Animated>
      {/* pattern (xl:flex for displaying) */}
      <Image
        src={"/recommendation/pattern.svg"}
        width={240}
        height={240}
        className="hidden absolute left-[135px] -bottom-[-40px]"
      />
    </Animated>
  );
};

export default Recommendation;