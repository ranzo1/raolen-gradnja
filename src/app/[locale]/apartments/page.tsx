"use client";

import ApartmentList from "@/src/components/apartments/ApartmentList";
import { apartmentsData } from "@/data/apartmentsData";
import Header from "@/src/components/header/Header";

export default function page() {
  return (
    <section className="bg-white">
      <Header />
      <ApartmentList apartments={apartmentsData} />
    </section>
  );
}
