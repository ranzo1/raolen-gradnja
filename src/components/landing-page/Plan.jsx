"use client";
import Image from "next/image";
import { fadeIn } from "@/src/components/animations/variants";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import { useTranslations } from "next-intl";
import Stats from "@/src/components/landing-page/Stats";
import Animated from "@/src/components/animations/Animated";

const Plan = () => {
  const t = useTranslations("PlanPage");
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  const [ref, inView] = useInView({
    threshold: !isMobile ? 0.5 : null,
  });

  return (
    <section className="mt-5 xl:pt-0" ref={ref} id="plan">
      {/* <div className="flex flex-col justify-center items-center text-2xl font-sans bg-background h-[250px] w-full">
        <p className="">Plan je ništa, planiranje je sve.</p>
      </div> */}
      <div className=" mx-auto mt-5 grid grid-cols-1 xl:grid-cols-2 gap-5">
        {/* img */}
        <Animated
          className="relative bg-white border-2 shadow-sm border-outline rounded-md"
          elementType="div"
          animation={fadeIn("right", 0.2)}
        >
          <Image
            src={"/about/plan.png"}
            layout="responsive"
            width={400}
            height={400}
            className="rounded-md"
            alt="Background"
          />
        </Animated>
        {/* text */}
        <Animated
          className=" bg-white border-2 shadow-sm border-outline rounded-md p-12"
          elementType="div"
          animation={fadeIn("left", 0.5)}
        >
          <h2 className="h2 mb-10 mt-2">{t("title")}</h2>
          <p>{t("p")}</p>
          {/* stats */}
          <div className="my-5 xl:my-10 min-h-[35px]">
            {inView && <Stats t={t} />}
          </div>
          <p className="mb-10">{t("p2")}</p>
        </Animated>
      </div>
    </section>
  );
};

export default Plan;
