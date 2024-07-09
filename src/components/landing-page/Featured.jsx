"use client";
import Image from "next/image";
import { fadeIn } from "@/src/components/animations/variants";
import logo from "@/public/header/logo.png";
import Animated from "@/src/components/animations/Animated";

const Featured = () => {
  return (
    <Animated
      animation={fadeIn("right", 0.2)}
      elementType="section"
      className="hidden xl:block rounded-sm backdrop-blur-sm bg-white/90 xl:h-[240px] max-w-[1305px] ml-auto xl:-top-[120px] relative rounded-tl-md rounded-bl-md px-[80px] py-[60px] shadow-md"
    >
      <div className="flex flex-col xl:flex-row items-center h-full gap-x-[30px] text-center xl:text-left">
        <Image
          className="xl:mr-[50px]"
          src={logo}
          width={160}
          height={160}
          alt=""
        />
        <h2 className="h2 flex-1 text-black ">
          Nikad lakše do vašeg doma iz snova!
        </h2>
        <p className="flex-1 text-grey landing-loose">
          Raolen Gradnja je ugledna kompanija za nekretnine smeštena u samom
          centru grada Inđije. Naše projekte odlikuju visoki standardi gradnje,
          inovativni dizaj i pažljivo planiranje prostora.
        </p>
      </div>
    </Animated>
  );
};

export default Featured;
