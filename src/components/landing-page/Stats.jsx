"use client";

import CountUp from "react-countup";

const Stats = ({ t }) => {
  const statsData = [
    {
      value: 4,
      type: t("floors"),
      unit: null,
    },
    {
      value: 40,
      type: t("appartments"),
      unit: null,
    },
    {
      value: 40,
      type: t("parkingSpot"),
      unit: null,
    },
    {
      value: 400,
      type: t("greenArea"),
      unit: "m2",
    },
    {
      value: 20,
      type: t("smallestApartment"),
      unit: "m2",
    },
    {
      value: 70,
      type: t("biggestApartment"),
      unit: "m2",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-10">
      {statsData.map((item, index) => (
        <div key={index} className="flex gap-x-2">
          <h2 className="h2 text-gold">
            <CountUp
              start={0}
              end={item.value}
              decimals={item.value % 1 !== 0 ? 1 : 0}
              duration={5}
            />
            <span className="h3">{item.unit}</span>
          </h2>
          <div className="text-black font-semibold">{item.type}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
