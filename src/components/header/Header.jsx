"use client";
import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Logo from "../Logo";
import LocalSwitcher from "@/src/components/local-switcher";

const Header = ({ nav, navMobile }) => {
  const headerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [scrollDir, setScrollDir] = useState("up");
  const [imageSize, setImageSize] = useState({ width: 130, height: 130 });

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 1);
      const currentScrollPos = window.scrollY;

      setScrollDir(currentScrollPos > scrollPos ? "down" : "up");
      setScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    const mediaQuery = window.matchMedia("(max-width: 640px)");
    const handleMediaQueryChange = (e) => {
      setImageSize(
        e.matches ? { width: 80, height: 80 } : { width: 130, height: 130 },
      );
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [scrollPos]);

  return (
    <header
      ref={headerRef}
      className={`${
        active ? "bg-white shadow-lg py-3 xl:py-4" : "bg-white py-3 xl:py-4"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-300 ${
        scrollDir === "down" && window.scrollY > 250
          ? "transform -translate-y-full"
          : ""
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo width={imageSize.width} height={imageSize.height} />
          {/* desktop nav */}
          {nav || (
            <Nav
              containerStyles="hidden xl:flex gap-x-12 text-black font-semibold"
              linkStyles="capitalize hover:cursor-pointer"
            />
          )}

          <LocalSwitcher />

          {/* mobile nav */}
          {navMobile || (
            <NavMobile
              containerStyles="xl:hidden"
              iconStyles="text-3xl"
              linkStyles="uppercase"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
