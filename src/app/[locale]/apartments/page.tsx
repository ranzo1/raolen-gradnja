"use client";

import ApartmentList from "@/src/components/apartments/ApartmentList";
import { apartmentsData } from "@/data/apartmentsData";
import Nav from "@/src/components/header/Nav";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/header/Header";
import { useTranslations } from "next-intl";
import { link } from "fs";
import { usePathname, useSearchParams } from "next/navigation";
import { RiHomeFill } from "react-icons/ri";
import NavMobile from "@/src/components/header/NavMobile";

export default function page() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const currentLanguage = pathname.split("/")[1] || "sr";

  const links = [
    {
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}`,
      name: t("home"),
      offset: 0,
    },
  ];

  const mobileLinks = [
    {
      icon: <RiHomeFill />,
      path: `${process.env.NEXT_PUBLIC_BASE_URL}/${currentLanguage}`,
      name: t("home"),
      offset: 0,
    },
  ];

  return (
    <section className="bg-white">
      <Header
        nav={
          <Nav
            links={links}
            containerStyles="hidden xl:flex gap-x-12 text-black font-semibold"
            linkStyles="capitalize hover:cursor-pointer"
          />
        }
        navMobile={
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
            links={mobileLinks}
          />
        }
      />
      <div className="h-[200px]"></div>
      <ApartmentList apartments={apartmentsData} />
      <Footer />
    </section>
  );
}
