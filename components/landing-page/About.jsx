"use client";
import Image from "next/image";
import { fadeIn } from "@/variants";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import Stats from "@/components/landing-page/Stats";
import Animated from "@/components/Animated";

const About = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  return (
    <section className="py-12 xl:pt-0 xl:pb-24" ref={ref} id="about">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* img */}
          <Animated
            className=" relative"
            elementType="div"
            animation={fadeIn("right", 0.2)}
          >
            <Image
              src={"/about/bg2.png"}
              width={400}
              height={400}
              className="rounded-md"
            ></Image>
          </Animated>
          {/* text */}
          <Animated
            className="xl:max-w-[470px]"
            elementType="div"
            animation={fadeIn("left", 0.5)}
          >
            <h2 className="h2 mb-[38px] mt-2">O nama</h2>
            <p>
              Naš plan podrazumeva izgradnju 80 stanova, visokog kvaliteta.
              Portfolio koji gradimo stanova odražava raznovrsnost i pažljiv
              pristup projektima, koji su prilagođeni različitim potrebama
              klijenata.
            </p>
            {/* stats */}
            <div className="my-5 xl:my-10 min-h-[35px]">
              {inView && <Stats />}
            </div>
            <p className="mb-10">
              Ukupna kvadratura stanova premašuje 6.000 kvadratnih metara.
              Takođe u našem planu i programu se nalazi i 40 parking mesta.
            </p>
          </Animated>
        </div>
      </div>
    </section>
  );
};

export default About;
