"use client";

import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HeroPage");
  return (
    <>
      <section
        className="relative flex items-center justify-center h-[600px] lg:h-[1000px]"
        id="home"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <img
            className="absolute -z-1 inset-0 w-full h-full object-cover"
            src="/hero/hero.webp"
            alt="Raolen Gradnja"
          />
        </div>
        {/* text & img */}
        <div className="relative z-10 flex items-center justify-center flex-col container h-full">
          {/* text */}
          <div className="w-full max-w-full text-center rounded-sm shadow-md">
            <div className="bg-grey bg-opacity-60 p-4 rounded-md">
              <h1 className="text-gold text-5xl sm:text-6xl md:text-8xl xl:text-9xl tracking-[0.5em] lg:tracking-[1em]">
                RAOLEN <span className="sr-only">{t("h1")}</span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
