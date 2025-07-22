"use client";

import ApartmentList from "@/src/components/apartments/ApartmentList";
import { apartmentsData } from "@/data/apartmentsData";
import Header from "@/src/components/header/Header";
import Footer from "@/src/components/Footer";

export default function page() {
  return (
    <section className="bg-white">
      <ApartmentList apartments={apartmentsData} />
      <Footer hideAnimated={false}/>
    </section>
  );
}
