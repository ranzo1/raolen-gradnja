import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FaStar, FaStarHalf } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

const ApartmentList = ({ apartments }: { apartments: any }) => {
  const [apartmentType, setApartmentType] = useState("all");
  const [filteredApartments, setFilteredApartments] = useState([]);

  useEffect(() => {
    const filtered = apartments.filter((apartment: any) => {
      return apartmentType === "all"
        ? apartments
        : apartmentType === apartment.type;
    });
    setFilteredApartments(filtered);
  }, [apartmentType]);

  return (
    <section className="py-16 min-h-[90vh]">
      {/* image & title */}
      <div className="flex flex-col items-center">
        {/* image */}
        <div className="relative w-[82px] h-[20px]">
          <Image
            src={"/assets/heading-icon.svg"}
            fill
            alt=""
            className="object-cover"
          />
        </div>
        <h2 className="h2 mb-8">Our Rooms</h2>
      </div>

      {/* tabs */}
      <Tabs
        defaultValue="all"
        className="w-[240px] lg:w-[540px] h-[200px] lg:h-auto mb-8 mx-auto"
      >
        <TabsList className="w-full h-full lg:h-[46px] flex flex-col lg:flex-row">
          <TabsTrigger
            className="w-full h-full"
            value="all"
            onClick={() => setApartmentType("all")}
          >
            {" "}
            ALL
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="single"
            onClick={() => setApartmentType("single")}
          >
            {" "}
            Single
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="double"
            onClick={() => setApartmentType("double")}
          >
            {" "}
            Double
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="extended"
            onClick={() => setApartmentType("extended")}
          >
            {" "}
            Extended
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredApartments.map((apartment: any) => {
          const imgURL = `/apartments/1.png`;
          return (
            <div key={apartment.id} className="mb-8">
              {" "}
              {/* Adds space between grid items */}
              <Link href={`/apartment/${apartment.id}`}>
                <div className="relative h-[300px] overflow-hidden mb-4">
                  {" "}
                  {/* Adds space between image and title */}
                  <Image
                    src={imgURL}
                    height={300}
                    width={250}
                    priority
                    alt=""
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="h-[134px]">
                <div className="flex items-center justify-between mb-4">
                  {" "}
                  {/* Adds space between capacity and stars */}
                  <div>Capacity - {apartment.capacity} person</div>
                  <div className="flex gap-1 text-accent">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalf />
                  </div>
                </div>
                <Link href={`/apartment/${apartment.id}`}>
                  <h3 className="h3 mb-2">{apartment.title}</h3>{" "}
                  {/* Adds space below the title */}
                </Link>
                <p className="h3 font-secondary font-medium text-accent mb-4">
                  ${apartment.price}
                  <span className="text-base text-secondary">/ night</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApartmentList;
