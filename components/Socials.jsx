import Link from "next/link";
import { RiInstagramFill, RiLinkedinFill } from "react-icons/ri";

const Socials = ({ containerStyles }) => {
  return (
    <ul className={`${containerStyles}`}>
      <li key="instagram">
        <Link href="/">
          <RiInstagramFill />
        </Link>
      </li>
      <li key="linkedin">
        <Link href="/">
          <RiLinkedinFill />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
