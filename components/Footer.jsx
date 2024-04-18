"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from "../public/footer/logo.png";
import ContactForm from "./contact/form";

const Footer = () => {
  const iframeSrc =
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=Univerexport%20Jug%20Bogdana%2025%20In%C4%91ija,%20Jug%20Bogdana,%20In%C4%91ija,%20Serbia&ie=UTF8&t=&z=14&iwloc=B&ll=45.046990,20.085370&output=embed";

  return (
    <footer className="bg-soft_green-secondary relative pt-12 xl:pt-0 ">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          id="contact"
        >
          <div className="flex flex-col xl:flex-row bg-white shadow-md p-8 rounded-sm min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-12">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                title="map"
                src={iframeSrc}
                className="w-full h-full absolute inset-0 border-0 filter grayscale-100 contrast-120 opacity-40"
                scrolling="no"
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p className="mt-1">
                    Univerexport Jug Bogdana 25 Inđija, Jug Bogdana, Inđija,
                    Serbia
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    raolengradnja@yahoo.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
              {/* logo & text */}
              <div className="xl:w-[470px] mb-6 xl:mb-0">
                <Link href="/" className="mb-24">
                  <Image src={logo} width={140} height={140} alt="" priority />
                </Link>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                Feedback
              </h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Post-ironic portland shabby chic echo park, banjo fashion axe
              </p>
              <ContactForm />
            </div>
          </div>
        </motion.div>
        {/* copyright text */}
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2023. All rights reserved
          </p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
