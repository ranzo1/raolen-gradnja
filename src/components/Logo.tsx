"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.webp"; // prilagodi putanju

type LogoProps = {
  height?: number;
  width?: number;
  className?: string;
};

const Logo = ({ height = 120, width = 120, className = "" }: LogoProps) => {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <Image
        src={logo}
        height={height}
        width={width}
        alt="Logo of Raolen Gradnja"
        priority
      />
    </Link>
  );
};

export default Logo;
