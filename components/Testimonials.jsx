"use client";

// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper modules
import { Pagination } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const testimonialData = [
  {
    img: "/testimonials/img-1.png",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    personName: "Robert Rene",
    location: "Singapore",
  },
  {
    img: "/testimonials/img-2.png",
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    personName: "Robert Rene",
    location: "Singapore",
  },
];

const Testimonials = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
      className="bg-soft_green xl:h-[880px]"
      id="materials"
    >
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="container mx-auto"
      >
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="xl:h-[680px] overflow-hidden"
        >
          {testimonialData.map((slide, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="grid grid-cols-1 xl:grid-cols-2 py-12 xl:py-24">
                  <Image
                    src={slide.img}
                    width={470}
                    height={470}
                    quality={100}
                    alt=""
                    className="hidden xl:flex"
                  />
                  <div className="flex-1 bg-white/20 text-white p-12">
                    <p className="text-lg leading-9 mb-8">{slide.message}</p>
                    <p className="text-xl font-bold">{slide.personName}</p>
                    <p>{slide.location}</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
