"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Autoplay, Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";

// components
import { Button } from "@/src/components/ui/button";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import PageTitle from "../PageTitle";
import Animated from "@/src/components/animations/Animated";
import { useMediaQuery } from "react-responsive";

import { fadeIn } from "@/src/components/animations/variants";

const Projects = () => {
  const t = useTranslations("ProjectsPage");
  const locale = useLocale();
  const isRussian = locale === "ru";
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });
  const isXL = useMediaQuery({
    query: "(min-width: 1280px)",
  });

  const projectsData = [
    {
      title: t("projectTitle"),
      image: "/projects/1.webp",
      subtitle: t("projectSubTitle"),
      text: t("projectText"),
      apartments: 99,
      parkingSpots: 101,
      flors: 6,
    },
    {
      title: t("projectTitle2"),
      image: "/projects/2.webp",
      subtitle: t("projectSubTitle2"),
      text: t("projectText2"),
      apartments: 99,
      parkingSpots: 99,
      flors: 7,
    },
  ];

  return (
    <section id="projects">
      {/* Title */}
      <PageTitle title={t("title")} text={t("p")} />

      {/* slider */}
      <Animated animation={fadeIn("up", 0.4)} elementType="div">
        <style jsx global>{`
          .plan-swiper .swiper-pagination {
            position: static;
            margin-top: 8px;
          }
        `}</style>
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
          className="plan-swiper overflow-hidden"
        >
          {projectsData.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {/* text */}
                <div
                  className={
                    "bg-white border-2 shadow-sm border-outline rounded-md py-4 xl:py-10 px-12"
                  }
                >
                  <h2
                    className={
                      isRussian ? "text-xl lg:text-3xl mb-4" : "h2 mb-4"
                    }
                  >
                    {project.title}
                  </h2>
                  <p
                    className={
                      isRussian
                        ? "text-gold text-xs lg:text-sm mb-6"
                        : "text-gold text-sm mb-6"
                    }
                  >
                    {project.subtitle}
                  </p>
                  {/* <p className="mb-[60px]">{project.text}</p> */}
                  <div className="flex items-center gap-x-[50px]">
                    {/* <Button variant="accent" className="px-[44px]">
                      {t("buttonLabel")}
                    </Button> */}
                    <div className="flex flex-col text-black">
                      <span
                        className={
                          isRussian
                            ? "text-gold font-bold text-2xl lg:text-3xl"
                            : "text-gold font-bold text-3xl"
                        }
                      >
                        {project.apartments}
                      </span>
                      <span
                        className={
                          isRussian
                            ? "text-sm lg:text-base font-semibold"
                            : "text-md font-semibold"
                        }
                      >
                        {t("apartmentsLabel")}
                      </span>
                      <span
                        className={
                          isRussian
                            ? "text-gold font-bold text-2xl lg:text-3xl"
                            : "text-gold font-bold text-3xl"
                        }
                      >
                        {project.parkingSpots}
                      </span>
                      <span
                        className={
                          isRussian
                            ? "text-sm lg:text-base font-semibold"
                            : "text-md font-semibold"
                        }
                      >
                        {t("parkingSpotsLabel")}
                      </span>
                      <span
                        className={
                          isRussian
                            ? "text-gold font-bold text-2xl lg:text-3xl"
                            : "text-gold font-bold text-3xl"
                        }
                      >
                        {project.flors}
                      </span>
                      <span
                        className={
                          isRussian
                            ? "text-sm lg:text-base font-semibold"
                            : "text-md font-semibold"
                        }
                      >
                        {t("florsLabel")}
                      </span>
                    </div>
                  </div>
                </div>

                {/* image & text */}
                <div className="relative lg:col-span-2 bg-white border-2 shadow-sm border-outline rounded-md">
                  <Image
                    src={project.image}
                    width={905}
                    height={528}
                    quality={100}
                    alt={`Raolen Gradnja – ${project.title} project in Inđija, Serbia`}
                    className="lg:rounded-tl-md lg:rounded-bl-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Animated>
    </section>
  );
};

export default Projects;
