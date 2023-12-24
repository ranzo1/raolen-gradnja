import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recommendation from "@/components/Recommendation";
import Apartments from "@/components/Apartments";
import Testimonials from "@/components/Testimonials";

import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/Location"), { ssr: false });

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Location />
      <Apartments />
      <Recommendation />
      <Testimonials />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
