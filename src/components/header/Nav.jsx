"use client";
import { Link } from "react-scroll";
import { useTranslations } from "next-intl";
import HoverLine from "@/src/components/animations/HoverLine";

const Nav = ({ containerStyles, linkStyles }) => {
  const t = useTranslations("Header");

  const links = [
    {
      path: "home",
      name: t("home"),
      offset: 0,
    },
    {
      path: "about",
      name: t("about"),
      offset: -50,
    },
    {
      path: "location",
      name: t("location"),
      offset: -510,
    },
    {
      path: "facilities",
      name: t("facilities"),
      offset: -330,
    },
    {
      path: "apartments",
      name: t("apartments"),
      offset: 0,
    },
    {
      path: "projects",
      name: t("projects"),
      offset: -50,
    },
    {
      path: "contact",
      name: t("contact"),
      offset: 0,
    },
  ];
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <div className="group">
            <Link
              key={index}
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={`${linkStyles}`}
            >
              {link.name}
            </Link>
            <HoverLine />
          </div>
        );
      })}
    </nav>
  );
};

export default Nav;
