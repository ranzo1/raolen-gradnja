"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { useMediaQuery } from "react-responsive";
import Stats from "./Stats";

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
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className=" relative"
          >
            <Image
              src={"/about/bg2.png"}
              width={400}
              height={400}
              className="rounded-md"
            ></Image>
          </motion.div>
          {/* text */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.4 }}
            className="xl:max-w-[470px]"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
