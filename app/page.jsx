import Header1 from "@/components/header/Header1";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/Featured";
import Recommendation from "@/components/Recommendation";
import Find from "@/components/Find";
import Testimonials from "@/components/Testimonials";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto bg-white overflow-hidden">
      <Header1 />
      <Hero />
      <Featured />
      <About />
      <Map />
      <Find />
      <Recommendation />
      <Testimonials />
      <Footer />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
