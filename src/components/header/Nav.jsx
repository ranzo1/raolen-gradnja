"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import HoverLine from "@/src/components/animations/HoverLine";

const Nav = ({ containerStyles, linkStyles, links: customLinks }) => {
  const t = useTranslations("Header");

  const defaultLinks = [
    { path: "home", name: t("home"), offset: 0 },
    { path: "about", name: t("about"), offset: 40 },
    { path: "plan", name: t("plan"), offset: -10 },
    { path: "location", name: t("location"), offset: -760 },
    { path: "facilities", name: t("facilities"), offset: -310 },
    { path: "apartments", name: t("apartments"), offset: -10 },
    { path: "projects", name: t("projects"), offset: -10 },
    { path: "contact", name: t("contact"), offset: 0 },
  ];

  const links =
    customLinks && customLinks.length > 0 ? customLinks : defaultLinks;

  // Smooth scroll function
  const handleSmoothScroll = (e, path, offset) => {
    const target = document.getElementById(path);
    if (target) {
      e.preventDefault();
      const top =
        target.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <div className="group" key={index}>
          <a
            href={`#${link.path}`} // crawlable
            onClick={(e) => handleSmoothScroll(e, link.path, link.offset)}
            className={`${linkStyles}`}
          >
            {link.name}
          </a>
          <HoverLine />
        </div>
      ))}
    </nav>
  );
};

export default Nav;
