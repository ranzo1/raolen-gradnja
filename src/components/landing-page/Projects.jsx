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
import { useTranslations } from "next-intl";
import Image from "next/image";
import PageTitle from "../PageTitle";
import Animated from "@/src/components/animations/Animated";

import { fadeIn } from "@/src/components/animations/variants";

const Projects = () => {
  const t = useTranslations("ProjectsPage");
  const projectsData = [
    {
      title: t("projectTitle"),
      image: "/projects/1.png",
      subtitle: t("projectSubTitle"),
      text: t("projectText"),
      value: 90,
    },
    {
      title: t("projectTitle2"),
      image: "/projects/2.png",
      subtitle: t("projectSubTitle2"),
      text: t("projectText2"),
      value: 60,
    },
  ];
  return (
    <section className="pb-40" id="projects">
      {/* Title */}
      <PageTitle title={t("title")} text={t("p")} />
      {/* slider */}
      <Animated animation={fadeIn("up", 0.4)} elementType="div">
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          loop
          speed={2000}
        >
          {projectsData.map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
                  {/* text */}
                  <div className=" bg-white border-2 shadow-sm border-outline rounded-md p-12">
                    <h2 className="h2 mb-4">{project.title}</h2>
                    <p className="text-gold text-sm mb-6">{project.subtitle}</p>
                    <p className="mb-[60px]">{project.text}</p>
                    <div className="flex items-center gap-x-[50px]">
                      <Button variant="accent" className="px-[44px]">
                        {" "}
                        {t("buttonLabel")}
                      </Button>
                      <div className="flex flex-col text-black">
                        <span className="font-bold text-2xl">
                          {project.value}
                        </span>
                        <span className="text-sm">{t("label")}</span>
                      </div>
                    </div>
                  </div>
                  {/* image & testimonial */}
                  <div className="relative xl:col-span-2 bg-white border-2 shadow-sm border-outline rounded-md">
                    <div>
                      <Image
                        src={project.image}
                        width={905}
                        height={528}
                        quality={100}
                        alt=""
                        className="xl:rounded-tl-md xl:rounded-bl-md"
                      />
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
    </section>
  );
};

export default Projects;
