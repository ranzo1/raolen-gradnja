"use client";

import Animated from "@/src/components/animations/Animated";
import { fadeIn } from "@/src/components/animations/variants";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import PropTypes from "prop-types";

const PageTitle = ({
  title,
  text,
  buttonText,
  route,
  picker,
  className,       // <- optional wrapper className
  titleClassName,  // <- optional title style
  textClassName    // <- optional text style
}) => {
  return (
    <Animated
      animation={fadeIn("up", 0.4)}
      elementType="div"
      className={
        className ??
        "border-2 shadow-sm border-outline rounded-md text-center my-5 p-10 bg-background"
      }
    >
      <h2 className={titleClassName ?? "h3 md:h2 mb-6 md:mb-10"}>{title}</h2>
      <p className={textClassName ?? "max-w-[638px] mx-auto mb-8"}>{text}</p>

      {picker && <div className="mb-8">{picker}</div>}

      {buttonText && route && (
        <Link href={route}>
          <Button variant="accent" className="px-12">
            {buttonText}
          </Button>
        </Link>
      )}
    </Animated>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  route: PropTypes.string,
  picker: PropTypes.node,
  className: PropTypes.string,
  titleClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

export default PageTitle;
