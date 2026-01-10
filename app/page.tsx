import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Countdown from "@/components/Countdown";

function navbarItem(name: string, link: string) {
  return { name, link }
}

function Hero() {
  return (
    <div className="w-[100vw] flex items-center justify-between">
      <Image src="/earth_graphic.webp" alt="Hero image" width={800} height={600} />
      <div className="flex flex-col items-center gap-8 mr-[10vw]">
        <div className="flex flex-col text-center gap-4">
          <div className="text-9xl font-black font-[Nippo-Variable]">HackTU 7.0</div>
          <div className="text-2xl font-medium font-[Nippo-Variable]">February 7th & 8th</div>
        </div>
        <Button className="flex bg-main w-[80%] h-auto p-0">
          <div className="flex items-center justify-between font-black">
            <div className="pt-8 pb-8 text-4xl grow-1 text-center text-white">Apply with Devfolio</div>
            <div className="bg-white w-[20%] pt-8 pb-8 pr-8 pl-8 pr-0">
              <Image src="devfolio.svg" alt="Devfolio Logo" width={200} height={0} />
            </div>
          </div>
        </Button>
        <div className="flex flex-col text-center">
          <div className="text-3xl">Registeration Deadline</div>
          <Countdown endTime="2026-01-19" />
        </div>
      </div>
    </div>
  )
}

function AboutUs() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">About us</div>
      <div className="flex w-[100vw] justify-evenly items-center">
        <div className="text-3xl flex flex-col">
          <div><span className="text-main font-bold">Creative Computing Society</span> is back with <span className="text-main font-bold">HackTU 7.0</span>, our flagship event</div>
          <div>hosted at Thapar Institute of Engineering and Technology, Patiala.</div>
          <div>We're excited to see what innovative ideas emerge from this year's event.</div>
          <div>Whether you're a seasoned developer or new to hackathons, there's something for everyone.</div>
          <div>Development is more than just coding—it's an adrenaline rush that drives innovation.</div>
          <div>Today's tech world demands solutions that are both cutting-edge and user-friendly.</div>
          <div><span className="text-main font-bold">Gear up your tech stack</span>, brainstorm innovative ideas, ignite team spirit,</div>
          <div>and build solutions for real-world problems at <span className="text-main font-bold">HackTU 7.0</span> - the biggest offline hackathon at TIET!</div>
        </div>
        <Image src="/about_graphic.png" alt="About graphic" width={400} height={400} />
      </div>
    </div>
  )
}

function LastYear() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Last Year...</div>
      <div className="flex w-[100vw] justify-evenly text-center">
        <div className="flex flex-col gap-2">
          <div className="font-[Nippo-Variable] text-6xl">100+</div>
          <div className="text-4xl">Projects</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-[Nippo-Variable] text-6xl">500+</div>
          <div className="text-4xl">Hackers</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-[Nippo-Variable] text-6xl">5 Lakhs+</div>
          <div className="text-4xl">Prizes</div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Navbar items={[
        navbarItem("Register", "https://example.com"),
        navbarItem("Sponsors", "https://example.com"),
        navbarItem("FAQs", "https://example.com"),
        navbarItem("Contact", "https://example.com"),
      ]} />
      <Hero />
      <div className="h-32"></div>
      <AboutUs />
      <div className="h-32"></div>
      <LastYear />
    </div>
  );
}
