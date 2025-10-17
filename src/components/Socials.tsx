import { RiInstagramFill, RiFacebookFill } from "react-icons/ri";

const Socials = ({ containerStyles }: { containerStyles?: string }) => {
  return (
    <ul className={containerStyles}>
      <li>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <RiInstagramFill size={30} />
          <span className="sr-only">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <RiFacebookFill size={30} />
          <span className="sr-only">Facebook</span>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
