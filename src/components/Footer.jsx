"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { fadeIn } from "./animations/variants";
import logo from "@/public/footer/logo.png";
import ContactForm from "./contact/form";
import Animated from "@/src/components/animations/Animated";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");

  const iframeSrc =
    "https://maps.google.com/maps?width=100%&height=600&hl=en&q=%20Jug%20Bogdana%2029%20In%C4%91ija,%20Jug%20Bogdana,%20In%C4%91ija,%20Serbia&ie=UTF8&t=&z=14&iwloc=B&ll=45.04678,20.085750&output=embed";

  return (
    <footer className="bg-background relative pt-12 xl:pt-3">
      <div className="container mx-auto">
        <Animated animation={fadeIn("up", 0.2)} elementType="div" id="contact">
          <div className="flex flex-col xl:flex-row bg-white shadow-md p-5 rounded-sm min-h-[394px] xl:p-20 xl:-translate-y-36 xl:gap-x-6">
            <div className="relative w-full h-[500px] bg-gray-300 rounded-lg overflow-hidden p-10 flex items-end justify-start">
              <iframe
                title="map"
                src={iframeSrc}
                className="w-full h-full absolute inset-0 border-0 filter grayscale-100 contrast-120 opacity-40"
                scrolling="no"
              />
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs uppercase">
                    {t("address")}
                  </h2>
                  <p className="mt-1 text-sm">Jug Bogdana 29 Inđija, Srbija</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs uppercase">
                    {t("email")}
                  </h2>
                  <a
                    href="mailto:raolengradnja@yahoo.com"
                    className="text-indigo-500 text-sm"
                    title="Contact Raolen Gradnja via email"
                  >
                    raolengradnja@yahoo.com
                  </a>

                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4 uppercase">
                    {t("phone")}
                  </h2>
                  <div className="flex flex-col">
                    <a
                      href="tel:+381628904781"
                      className="leading-relaxed text-sm text-indigo-500"
                      title="Call Raolen Gradnja at +381 62 890 4781"
                    >
                      +381 62 890 4781
                    </a>

                    <a
                      href="tel:+381638094249"
                      className="leading-relaxed text-sm text-indigo-500"
                      title="Call Raolen Gradnja at +381 63 809 4249"
                    >
                      +381 63 809 4249
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col w-full mt-4 xl:mt-0">
              {/* logo & text */}
              <div className="">
                <Link href="/" className="mb-24">
                  <Image
                    src={logo}
                    width={140}
                    height={140}
                    alt="Raolen Gradnja logo"
                    priority
                  />
                </Link>
              </div>
              <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                {t("title")}
              </h2>
              <p className="leading-relaxed text-gray-600">{t("subTitle")}</p>
              <ContactForm />
            </div>
          </div>
        </Animated>
        {/* copyright text */}
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2024. All rights reserved
          </p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
