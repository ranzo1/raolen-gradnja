"use client";

const Stats = ({ statsData, includeSup = true }) => {
  return (
    <div className="flex flex-col gap-y-4">
      {statsData.map((item, index) => (
        <div key={index} className="flex flex-row md:flex-col gap-x-2">
          <h2 className="h2 text-gold">
            {item.value}
            <span className="h3">
              {" "}
              {item.unit ? (
                <>
                  {item.unit}
                  {includeSup && <sup>2</sup>}
                </>
              ) : null}
            </span>
          </h2>
          <div className="text-black font-semibold">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;
