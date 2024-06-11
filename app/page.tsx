import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/landing-page/Hero";
import About from "@/components/landing-page/About";
import Featured from "@/components/landing-page/Featured";
import Recommendation from "@/components/landing-page/Recommendation";
import Apartments from "@/components/landing-page/Apartments";
import Objects from "@/components/landing-page/Objects";

import dynamic from "next/dynamic";

const Location = dynamic(() => import("@/components/landing-page/Location"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="mx-auto bg-white overflow-hidden">
      <Header />
      <Hero />
      <Featured />
      <About />
      <Location />
      <Objects />
      <Apartments />
      <Recommendation />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
