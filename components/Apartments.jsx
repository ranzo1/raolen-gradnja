"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Image from "next/image";

const apartmentData = [
  {
    image: "/apartments/1.png",
    name: "Garsonjere",
    info: "35 kvadrata",
  },
  {
    image: "/apartments/2.png",
    name: "Jednoiposobni stanovi",
    info: "45 kvadrata",
  },
  {
    image: "/apartments/3.png",
    name: "Dvosobni stanovi",
    info: "55 kvadrata",
  },
  {
    image: "/apartments/4.png",
    name: "Trosobni stanovi",
    info: "75 kvadrata",
  },
];

const Apartments = () => {
  return (
    <section className="bg-soft_green-secondary py-12 xl:py-32" id="apartments">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="h2 mb-6"
          >
            Pronađite stan po vašoj meri
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-[638px] mx-auto mb-8"
          >
            Odaberite stan po vašoj želji iz naše ponude.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Button variant="accent" className="px-12 mb-14 xl:mb-28">
              Pogledaj sve
            </Button>
          </motion.div>
        </div>
        {/* apartment grid */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-y-10 xl:gap-y-0 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-[30px]"
        >
          {apartmentData.map((hotel, index) => {
            return (
              <div
                className="bg-white border-2 shadow-sm border-outline w-[270px] h-[390px] rounded-md overflow-hidden hover:cursor-pointer
                group hover:bg-gold transition-all duration-700 mx-auto xl:mx-0"
                key={index}
              >
                <Image src={hotel.image} width={270} height={270} alt="" />
                <div className="p-6">
                  <h4 className="h4 group-hover:text-white transition-all duration-300">
                    {hotel.name}
                  </h4>
                  <p className="group-hover:text-white transition-all duration-300">
                    {hotel.info}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Apartments;
