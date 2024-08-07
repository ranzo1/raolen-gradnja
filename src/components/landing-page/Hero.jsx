//import SearchBox from "./SearchBox";
"use client";

import Image from "next/image";
import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HeroPage");
  return (
    <>
      {/* background bg-[url('/hero/bg4.png')] bg-cover bg-no-repeat */}
      <section
        className="relative items-center justify-center h-[600px] md:h-[1000px] py-40 pb-32"
        id="home"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute -z-1 inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={require("@/public/hero/promo.mp4")}
            aria-label="Promotional video of Raolen Gradnja"
          />
        </div>
        {/* text & img */}
        <div className="absolute h-[700px]  bottom-0 mx-auto inset-x-0 z-10 flex flex-col items-center justify-center md:flex-row xl:h-[1000px] container">
          {/* text */}
          <Animated
            className="w-full   text-center rounded-sm shadow-md "
            elementType="div"
            animation={fadeIn("down", 0.6)}
          >
            <h1 className="text-gold text-6xl md:text-8xl xl:text-9xl tracking-[1em]">
              RAOLEN
              {/* {t("welcome")} */}
            </h1>
            {/* <p className="text-gray mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
              {t("description")}
            </p> */}
          </Animated>
        </div>
      </section>
    </>
  );
};

export default Hero;
