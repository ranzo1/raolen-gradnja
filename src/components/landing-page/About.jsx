"use client";

import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";
import { useTranslations } from "next-intl";
import Image from "next/image";

import "remixicon/fonts/remixicon.css";

export default function About() {
  const t = useTranslations("AboutPage");
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
    <section id="about" className="pt-[80px] relative z-20">
      <div className=" grid grid-cols-1 xl:grid-cols-3 gap-5">
        {/* text */}
        <Animated
          className="col-span-1 xl:col-span-1 bg-white border-2 shadow-sm border-outline rounded-md overflow-hidden p-8"
          elementType="div"
          animation={fadeIn("right", 0.2)}
        >
          <h3 className="h2 mb-10">{t("title")}</h3>
          <p className="landing-loose mb-6">{t("intro")}</p>
          <p>{t("vision")}</p>
        </Animated>
        {/* img */}
        <Animated
          className="col-span-1 xl:col-span-2 bg-white shadow-md border-outline rounded-md overflow-hidden relative"
          elementType="div"
          animation={fadeIn("left", 0.5)}
        >
          <Image
            src={"/about/vision1.png"}
            layout="responsive"
            width={400}
            height={400}
            className="rounded-md"
            alt="Vision"
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
            <h4 className="h4 mb-5">{skill.title}</h4>
            <p className="mb-5 max-w-md mx-auto text-left">
              {skill.description}
            </p>
          </Animated>
        ))}
      </div>
    </section>
  );
}
