"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import logo from "../../public/header/logo.png";

const Header = () => {
  const headerRef = useRef(null);
  const [active, setActive] = useState(false);
  // create a state for the scroll position
  const [scrollPos, setScrollPos] = useState(0);
  // create a state for the scroll direction
  const [scrollDir, setScrollDir] = useState("up");

  useEffect(() => {
    // get the header element from the ref
    const header = headerRef.current;

    const handleScroll = () => {
      setActive(window.scrollY > 1);
      const currentScrollPos = window.scrollY;

      if (currentScrollPos > scrollPos) {
        setScrollDir("down");
      } else {
        setScrollDir("up");
      }

      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos]);

  return (
    <header
      ref={headerRef}
      className={`${
        active ? "bg-soft_green shadow-lg py-3 xl:py-4" : "bg-none py-5 xl:py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-300 ${
        scrollDir === "down" && window.scrollY > 250
          ? "transform -translate-y-full"
          : ""
      }`}
    >
      <div className="container mx-auto">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src={logo} width={130} height={130} alt="" />
          </Link>
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-black font-semibold"
            linkStyles="capitalize hover:cursor-pointer hover:text-gold"
          />
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
