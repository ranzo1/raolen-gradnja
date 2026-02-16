"use client";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useTranslations } from "next-intl";
import HoverLine from "@/src/components/animations/HoverLine";

const Nav = ({ containerStyles, linkStyles, links: customLinks }) => {
  const t = useTranslations("Header");

  const defaultLinks = [
    { path: "home", name: t("home"), offset: 0, type: "scroll" },
    { path: "about", name: t("about"), offset: 70, type: "scroll" },
    { path: "plan", name: t("plan"), offset: -10, type: "scroll" },
    { path: "location", name: t("location"), offset: -10, type: "scroll" },
    { path: "facilities", name: t("facilities"), offset: -10, type: "scroll" },
    { path: "apartments", name: t("apartments"), offset: -10, type: "scroll" },
    { path: "contact", name: t("contact"), offset: -110, type: "scroll" },
    /*{ path: "projects", name: t("projects"), offset: -10, type: "scroll" },*/
  ];

  const links =
    customLinks && customLinks.length > 0 ? customLinks : defaultLinks;

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        <div className="group" key={index}>
          {link.type === "scroll" ? (
            <ScrollLink
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={`${linkStyles}`}
            >
              {link.name}
            </ScrollLink>
          ) : (
            <Link href={link.path} className={`${linkStyles}`}>
              {link.name}
            </Link>
          )}
          <HoverLine />
        </div>
      ))}
    </nav>
  );
};

export default Nav;
