"use client";

import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

import "remixicon/fonts/remixicon.css";

export default function About() {
  const t = useTranslations("AboutPage");
  const locale = useLocale();
  const isRussian = locale === "ru";
  const skillsData = [
    {
      icon: "ri-lightbulb-fill",
      iconSize: "text-4xl",
      iconColor: "text-gold",
      title: t("inovation"),
      description: t("inovationText"),
    },
    {
      icon: "ri-brush-fill",
      iconSize: "text-4xl",
      iconColor: "text-gold",
      title: t("design"),
      description: t("designText"),
    },
    {
      icon: "ri-pencil-ruler-fill",
      iconSize: "text-4xl",
      iconColor: "text-gold",
      title: t("manufacturing"),
      description: t("manufacturingText"),
    },
  ];

  return (
    <section id="about" className="pt-[40px] lg:pt-[80px] relative z-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* text */}
        <Animated
          className="col-span-1 lg:col-span-1 bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden p-8"
          elementType="div"
          animation={fadeIn("right", 0.2)}
        >
          <h3
            className={
              isRussian
                ? "text-xl lg:text-3xl mb-6 md:mb-10"
                : "h3 md:h2 mb-6 md:mb-10"
            }
          >
            {t("title")}
          </h3>
          <p
            className={
              isRussian
                ? "text-sm lg:text-sm landing-loose mb-6"
                : "landing-loose mb-6"
            }
          >
            {" "}
            <strong className="text-black"> Raolen Gradnja </strong>
            {t("intro")}
          </p>
          <p className={isRussian ? "text-sm lg:text-sm" : ""}>{t("vision")}</p>
        </Animated>
        {/* img */}
        <Animated
          className="col-span-1 lg:col-span-2 bg-white shadow-md border-outline rounded-md overflow-hidden relative"
          elementType="div"
          animation={fadeIn("left", 0.5)}
        >
          <Image
            src={"/about/vision1.webp"}
            layout="responsive"
            width={400}
            height={400}
            className="rounded-md"
            alt="Raolen Gradnja vision – modern apartments with innovative residential projects in Inđija, Serbia"
          />
        </Animated>
        {/* Skills section */}
        {skillsData.map((skill, index) => (
          <Animated
            elementType="div"
            animation={fadeIn("up", 0.4 * (index + 1))}
            className="col-span-1 text-center bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden p-8"
            key={index}
          >
            <div className="mx-auto mb-4 w-20 p-5 rounded-full shadow-md">
              <i
                className={`${skill.icon} ${skill.iconSize} ${skill.iconColor}`}
              ></i>
            </div>
            <h4
              className={isRussian ? "text-base lg:text-base mb-5" : "h4 mb-5"}
            >
              {skill.title}
            </h4>
            <p
              className={
                isRussian
                  ? "text-sm lg:text-sm mb-5 max-w-md mx-auto text-left"
                  : "mb-5 max-w-md mx-auto text-left"
              }
            >
              {skill.description}
            </p>
          </Animated>
        ))}
      </div>
    </section>
  );
}
