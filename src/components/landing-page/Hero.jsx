"use client";

import { fadeIn } from "@/src/components/animations/variants";
import Animated from "@/src/components/animations/Animated";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("HeroPage");
  return (
    <>
      <section
        className="relative flex items-center justify-center h-[600px] md:h-[1000px] py-40 pb-32"
        id="home"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute -z-1 inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline // Added to prevent fullscreen on mobile
            src={require("@/public/hero/promo.mp4")}
            aria-label="Promotional video of Raolen Gradnja"
          />
        </div>
        {/* text & img */}
        <div className="relative z-10 flex items-center justify-center flex-col container h-full">
          {/* text */}
          <Animated
            className="w-full max-w-full text-center rounded-sm shadow-md px-4 md:px-0"
            elementType="div"
            animation={fadeIn("down", 0.6)}
          >
            <div className="bg-grey bg-opacity-50 p-4 rounded-md">
              <h1 className="text-gold text-5xl sm:text-6xl md:text-8xl xl:text-9xl tracking-[0.6em] lg:tracking-[1em]">
                RAOLEN
              </h1>
            </div>
          </Animated>
        </div>
      </section>
    </>
  );
};

export default Hero;
