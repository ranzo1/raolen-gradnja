"use client";

import CountUp from "react-countup";

const Stats = ({ t }) => {
  const statsData = [
    {
      value: 80,
      type: t("appartments"),
      unit: null,
    },
    {
      value: 40,
      type: t("parkingSpot"),
      unit: null,
    },
    {
      value: 6000,
      type: t("squareMeters"),
      unit: "+",
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row gap-x-8 gap-y-4 my-10">
      {statsData.map((item, index) => {
        return (
          <div key={index} className="flex ">
            <div className="flex gap-x-2">
              <h2 className="h2 text-gold">
                <CountUp
                  start={0}
                  end={item.value}
                  decimals={item.value % 1 !== 0 ? 1 : 0}
                  duration={5}
                />
                <span>{item.unit}</span>
              </h2>
              <div className="text-black font-semibold">{item.type}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
