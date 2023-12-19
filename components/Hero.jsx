//import SearchBox from "./SearchBox";
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";
const Hero = () => {
  return (
    // <section
    //   className="pt-24 pb-12 xl:py:0 xl:h-[1087px] bg-hero2 xl:bg-hero bg-cover bg-center bg-no-repeat flex justify-center items-center"
    //   id="home"
    // >
    //   <div className="container mx-auto flex items-center justify-center xl:justify-start"></div>
    // </section>
    <>
      <div className="relative h-full w-full">
        <div className="absolute h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
        <section
          className="relative bg-hero3 bg-no-repeat xl:bg-none xl:h-[1098px] py-40 pb-32 xl:py-0"
          id="home"
        >
          <div className="container mx-auto ">
            {/* text & img */}
            <div className="flex flex-col items-center justify-center xl:justify-between md:flex-row xl:h-[960px]">
              {/* text */}
              <motion.div
                variants={fadeIn("down", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.4 }}
                className="absolute xl:relative -bottom-[-100px] z-10 w-full xl:max-w-[560px] text-center xl:text-left rounded-sm bg-soft_green-secondary  p-3"
              >
                <h1 className="text-black mb-7 text-4xl xl:text-6xl">
                  Raolen Gradnja
                </h1>
                <p className="text-soft_green mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
                  Ovo je mesto ge započinje vaše putovanje prema porodičnom domu
                  kakvog ste ga oduvek zamišljali.
                </p>
              </motion.div>
              {/* pattern */}
              {/* <Image
                src={"/recommendation/pattern.svg"}
                width={240}
                height={240}
                className="hidden xl:flex absolute left-[535px] -bottom-[-300px]"
              /> */}
              {/* image */}
              <motion.div
                variants={fadeIn("up", 0.8)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.1 }}
                className=" xl:flex xl:absolute xl:top-[200px] xl:right-0"
              >
                <Image src="/hero/bg3.png" width={706} height={632} alt="" />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
