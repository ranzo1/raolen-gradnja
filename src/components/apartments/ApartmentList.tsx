import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

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
    <section className="py-16 container min-h-screen flex flex-col justify-between">
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
        <h2 className="h2 mb-8">Ponuda stanova</h2>
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
            Sve
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="single"
            onClick={() => setApartmentType("single")}
          >
            Garsonjere
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="extended"
            onClick={() => setApartmentType("extended")}
          >
            Jednoiposobni
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="double"
            onClick={() => setApartmentType("double")}
          >
            Dvosobni
          </TabsTrigger>
          <TabsTrigger
            className="w-full h-full"
            value="three-room"
            onClick={() => setApartmentType("three-room")}
          >
            Trosobni
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredApartments.map((apartment: any) => {
          const imgURL = `/apartments/3DApartment4.png`;
          return (
            <div key={apartment.id} className="mb-8 flex flex-col items-center">
              {/* Center the whole grid item */}
              <Link href={`/apartment/${apartment.id}`}>
                <div className="relative h-[300px] w-[250px] overflow-hidden mb-4">
                  <Image
                    src={imgURL}
                    height={300}
                    width={300}
                    priority
                    alt=""
                    className="object-cover"
                  />
                </div>
              </Link>
              <div className="h-[134px] text-center">
                {/* Center text inside */}
                <div className="flex items-center justify-center mb-4">
                  Capacity - {apartment.capacity} person
                </div>
                <Link href={`/apartment/${apartment.id}`}>
                  <h3 className="h3 mb-2">{apartment.title}</h3>
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
