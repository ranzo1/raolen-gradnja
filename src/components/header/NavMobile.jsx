"use client";
import React, { useState } from "react";
import {
  RiMenu2Line,
  RiHomeFill,
  RiBuilding2Fill,
  RiContactsBookFill,
  RiHomeSmile2Fill,
} from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { FaUsers, FaMap, FaBox } from "react-icons/fa";

import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/footer/logo.png";
import Socials from "../Socials";
import { useTranslations } from "next-intl";

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("Header");

  const links = [
    {
      icon: <RiHomeFill />,
      path: "home",
      name: t("home"),
      offset: 0,
    },
    {
      icon: <FaUsers />,
      path: "about",
      name: t("about"),
      offset: 0,
    },
    {
      icon: <FaMap />,
      path: "location",
      name: t("location"),
      offset: -1355,
    },
    {
      icon: <FaBox />,
      path: "facilities",
      name: t("facilities"),
      offset: -350,
    },
    {
      icon: <RiHomeSmile2Fill />,
      path: "apartments",
      name: t("apartments"),
      offset: -70,
    },
    {
      icon: <RiBuilding2Fill />,
      path: "projects",
      name: t("projects"),
      offset: -100,
    },
    {
      icon: <RiContactsBookFill />,
      path: "contact",
      name: t("contact"),
      offset: 0,
    },
  ];

  return (
    <div className={`${containerStyles}`} onTouchStart={() => setIsOpen(false)}>
      {/* nav trigger btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-black transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-background overflow-hidden fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* nav close btn */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-black absolute w-10 h-10 left-8 top-8 flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Link href="/">
            <Image src={logo} width={140} height={140} alt="" />
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-x-3 text-black font-medium"
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          {/* Socials */}
          <Socials containerStyles="flex text-black" />
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
