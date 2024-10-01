"use client";

import ApartmentList from "@/src/components/apartments/ApartmentList";
import { apartmentsData } from "@/data/apartmentsData";

export default function page() {
  return (
    <section className="bg-white">
      <ApartmentList apartments={apartmentsData} />
    </section>
  );
}
