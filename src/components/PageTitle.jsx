import Animated from "@/src/components/animations/Animated";
import { fadeIn } from "@/src/components/animations/variants";
import { Button } from "@/src/components/ui/button";
import { useTranslations } from "next-intl";

const PageTitle = ({ title, text, buttonText }) => {
  const t = useTranslations("YourTranslationNamespace");

  return (
    <div
      animation={fadeIn("up", 0.4)}
      elementType="div"
      className="border-2 shadow-sm border-outline rounded-md text-center my-5 p-10 bg-background"
    >
      <h2 className="h2 mb-6">{title}</h2>
      <p className="max-w-[638px] mx-auto mb-8">{text}</p>
      {buttonText && (
        <div>
          <Button variant="accent" className="px-12">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default PageTitle;
