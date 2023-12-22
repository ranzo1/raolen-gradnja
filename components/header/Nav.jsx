import { Link } from "react-scroll";

const links = [
  {
    path: "home",
    name: "početna",
    offset: 0,
  },
  {
    path: "about",
    name: "o nama",
    offset: -50,
  },
  {
    path: "location",
    name: "lokacija",
    offset: -510,
  },
  {
    path: "apartments",
    name: "stanovi",
    offset: 0,
  },
  {
    path: "materials",
    name: "materijali",
    offset: 0,
  },
  {
    path: "projects",
    name: "projekti",
    offset: -50,
  },
  {
    path: "contact",
    name: "kontakt",
    offset: 0,
  },
];

const Nav = ({ containerStyles, linkStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
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
        );
      })}
    </nav>
  );
};

export default Nav;
