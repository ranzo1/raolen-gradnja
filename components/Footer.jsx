"use client";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import logo from "../public/footer/logo.png";

const Footer = () => {
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
            {/* logo & text */}
            <div className="xl:w-[470px] mb-6 xl:mb-0">
              <Link href="/" className="mb-24">
                <Image src={logo} width={140} height={140} alt="" priority />
              </Link>
              <p className="text-lg leading-9">
                Tempor ut elit ut sit pariatur cillum fugiat. Proident fugiat
                irure ipsum consectetur do esse. Proident minim voluptate non
                cillum esse Lorem laborum dolor ullamco. Dolore elit mollit
                excepteur exercitation excepteur.
              </p>
            </div>
            {/* navigation & contact */}
            <div className="flex xl:gap-x-16 xl:ml-32">
              {/* navigation */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Navigation</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li key="phone">
                    <Link href="/">Home</Link>
                  </li>
                  <li key="Find Hotel">
                    <Link href="/">Find Hotel</Link>
                  </li>
                  <li key="About Us">
                    <Link href="/">About Us</Link>
                  </li>
                  <li key="Contact Us">
                    <Link href="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* contact */}
              <div className="flex-1">
                <h4 className="h4 mb-6">Contact Us</h4>
                <ul className="flex flex-col gap-y-6 text-lg">
                  <li key="phone">+62 123 123981</li>
                  <li key="info">info@hotely.com</li>
                  <li key="site">hotely.com</li>
                </ul>
              </div>
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
