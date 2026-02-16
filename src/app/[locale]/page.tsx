import Header from "@/src/components/header/Header";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/landing-page/Hero";
import About from "@/src/components/landing-page/About";
import Plan from "@/src/components/landing-page/Plan";
import Projects from "@/src/components/landing-page/Projects";
import Apartments from "@/src/components/landing-page/Apartments";
import Facilities from "@/src/components/landing-page/Facilities";
import { useTranslations } from "next-intl";

import dynamic from "next/dynamic";

const Location = dynamic(
  () => import("@/src/components/landing-page/Location"),
  {
    ssr: false,
  },
);

export default function Home() {
  const t = useTranslations("HeroPage");
  return (
    <main className="mx-auto bg-white overflow-hidden">
      <Header nav={null} navMobile={null} />
      <Hero />
      <div className="container">
        {/* <Featured /> */}
        <About />
        <Plan />
        <Location />
        <Facilities />
        <Apartments />
        {/*<Projects />*/}
      </div>
      <Footer />
    </main>
  );
}
