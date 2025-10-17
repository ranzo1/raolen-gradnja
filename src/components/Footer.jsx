"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

import { fadeIn } from "./animations/variants";
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
              <div className="relative rounded-xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm p-5 sm:p-6">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Address */}
                  <div className="lg:w-1/2 px-0 lg:px-2">
                    <h2 className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                      {t("address")}
                    </h2>
                    <p className="mt-2 text-sm text-black">
                      Jug Bogdana 29, Inđija, Srbija
                    </p>
                  </div>

                  {/* Divider on large screens */}
                  <div className="hidden lg:block w-px bg-gray-200" />

                  {/* Contact */}
                  <div className="lg:w-1/2 px-0 lg:px-2">
                    <h2 className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                      {t("email")}
                    </h2>
                    <a
                      href="mailto:raolengradnja@yahoo.com"
                      className="mt-2 inline-flex items-center gap-2 text-sm text-black hover:text-gold focus:text-gold transition-colors underline decoration-transparent hover:decoration-gold focus:decoration-gold decoration-2 underline-offset-4"
                      title="Contact Raolen Gradnja via email"
                      aria-label="Email Raolen Gradnja"
                    >
                      <svg
                        aria-hidden="true"
                        className="h-4 w-4 text-gray-400"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M3 7l9 6 9-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                      raolengradnja@yahoo.com
                    </a>

                    <h2 className="mt-5 text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                      {t("phone")}
                    </h2>
                    <div className="mt-2 flex flex-col gap-1.5">
                      <a
                        href="tel:+381638094249"
                        className="inline-flex items-center gap-2 text-sm text-black hover:text-gold focus:text-gold transition-colors"
                        title="Call Raolen Gradnja at +381 63 809 4249"
                        aria-label="Call +381 63 809 4249"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.64-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 5.18 2 2 0 0 1 4.11 3h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L7.1 10.9a16 16 0 0 0 6 6l1.47-1.17a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        +381 63 809 4249
                      </a>
                      <a
                        href="tel:+381628904781"
                        className="inline-flex items-center gap-2 text-sm text-black hover:text-gold focus:text-gold transition-colors"
                        title="Call Raolen Gradnja at +381 62 890 4781"
                        aria-label="Call +381 62 890 4781"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.64-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.1 5.18 2 2 0 0 1 4.11 3h2a2 2 0 0 1 2 1.72c.12.89.32 1.76.59 2.6a2 2 0 0 1-.45 2.11L7.1 10.9a16 16 0 0 0 6 6l1.47-1.17a2 2 0 0 1 2.11-.45c.84.27 1.71.47 2.6.59A2 2 0 0 1 22 16.92z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        +381 62 890 4781
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white flex flex-col w-full mt-4 xl:mt-0">
              <ContactForm />
            </div>
          </div>
        </Animated>
        {/* copyright text */}
        <div className="py-12 xl:-mt-32 flex flex-col xl:flex-row xl:justify-between">
          <p className="text-black font-semibold text-center mb-4 xl:mb-0">
            Copyright &copy; 2025. All rights reserved
          </p>
          <Socials containerStyles="flex gap-x-4 text-black mx-auto xl:mx-0" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
