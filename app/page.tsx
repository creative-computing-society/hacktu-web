import Navbar from "@/components/Navbar";
import { NAVBAR } from "./config";

import Hero from "@/components/Hero"
import AboutUs from "@/components/AboutUs";
import LastYear from "@/components/LastYear";
import Tracks from "@/components/Tracks";
import Timeline from "@/components/Timeline";
import Sponsor from "@/components/Sponsor";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import ReachPatiala from "@/components/ReachPatiala";

export default function Home() {
  return (
    <div className="overflow-y-hidden flex flex-col items-center bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <Navbar items={NAVBAR} />
      <Hero />
      <div className="h-32"></div>
      <AboutUs />
      <div className="h-32"></div>
      <LastYear />
      <div className="h-32"></div>
      <Tracks />
      <div className="h-32"></div>
      <Timeline />
      <div className="h-32"></div>
      <Sponsor />
      <div className="h-32"></div>
      <FAQs />
      <ReachPatiala />
      <div className="h-32"></div>
      <Footer />
    </div>
  );
}
