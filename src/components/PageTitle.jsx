import Animated from "@/src/components/animations/Animated";
import { fadeIn } from "@/src/components/animations/variants";
import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import { useTranslations } from "next-intl";

const PageTitle = ({ title, text, buttonText, route }) => {
  return (
    <div
      animation={fadeIn("up", 0.4)}
      elementType="div"
      className="border-2 shadow-sm border-outline rounded-md text-center my-5 p-10 bg-background"
    >
      <h2 className="h3 md:h2 mb-6 md:mb-10">{title}</h2>
      <p className="max-w-[638px] mx-auto mb-8">{text}</p>
      {buttonText &&
        route && ( // Check if both buttonText and route are provided
          <Link href={route}>
            <Button variant="accent" className="px-12">
              {buttonText}
            </Button>
          </Link>
        )}
    </div>
  );
};

export default PageTitle;
