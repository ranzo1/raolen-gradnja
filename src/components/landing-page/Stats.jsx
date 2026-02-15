"use client";

import { useLocale } from "next-intl";

const Stats = ({ statsData, includeSup = true }) => {
  const locale = useLocale();
  const isRussian = locale === "ru";

  return (
    <div className="flex flex-col gap-y-4">
      {statsData.map((item, index) => (
        <div key={index} className="flex flex-row md:flex-col gap-x-2">
          <h2
            className={isRussian ? "text-2xl lg:h2 text-gold" : "h2 text-gold"}
          >
            {item.value}
            <span className={isRussian ? "text-xl lg:h3" : "h3"}>
              {" "}
              {item.unit ? (
                <>
                  {item.unit}
                  {includeSup && <sup>2</sup>}
                </>
              ) : null}
            </span>
          </h2>
          <div
            className={
              isRussian
                ? "text-sm lg:text-base text-black font-semibold"
                : "text-black font-semibold"
            }
          >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
