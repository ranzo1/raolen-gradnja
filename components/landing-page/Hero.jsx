//import SearchBox from "./SearchBox";
"use client";

import Image from "next/image";
import { fadeIn } from "@/variants";
import { Button } from "@/components/ui/button";
import Animated from "@/components/Animated";

const Hero = () => {
  return (
    <>
      {/* background bg-[url('/hero/bg4.png')] bg-cover bg-no-repeat */}
      <section
        className="relative h-[600px] md:h-[1000px] py-40 pb-32 xl:py-12"
        id="home"
      >
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            src={require("@/public/hero/promo.mp4")}
          />
        </div>
        {/* text & img */}
        <div className="absolute bottom-0 inset-x-0 z-10 flex flex-col items-center justify-center xl:justify-between md:flex-row xl:h-[1000px] mx-auto xl:container">
          {/* text */}
          <Animated
            className="bottom-[100px] w-full text-center rounded-sm backdrop-blur-sm bg-soft_green-secondary/80 shadow-md p-3 xl:relative xl:max-w-[560px] xl:text-left xl:p-10"
            elementType="div"
            animation={fadeIn("down", 0.6)}
          >
            <h1 className="text-black mb-7 text-4xl xl:text-6xl">
              Raolen Gradnja
            </h1>
            <p className="text-gray mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
              Ovo je mesto gde započinje vaše putovanje prema porodičnom domu
              kakvog ste ga oduvek zamišljali.
            </p>
          </Animated>
        </div>
      </section>
    </>
  );
};

export default Hero;
