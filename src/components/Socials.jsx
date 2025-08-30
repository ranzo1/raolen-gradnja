import { RiInstagramFill, RiFacebookFill } from "react-icons/ri";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={containerStyles}>
      <li key="instagram">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <RiInstagramFill />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li key="facebook">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <RiFacebookFill />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
