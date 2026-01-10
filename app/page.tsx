"use client"

import Navbar from "@/components/Navbar";
import Image from "next/image";
import Countdown from "@/components/Countdown";
import { FOOTER_LINKS, HACKATHON_DATE, HACKATHON_DATE_FMT, HACKATHON_END_DATE, HACKATHON_VERSION, NAVBAR, REGISTERATION_DEADLINE, SOCIALS, TIMELINE } from "./config";
import ApplyWithDevfolio from "@/components/ApplyWithDevfolio";
import { useCountdown } from "./utils";
import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";

function Hero() {
  const { isPassed, ...countdown } = useCountdown(REGISTERATION_DEADLINE);
  const { isPassed: startPassed, ...startCountDown} = useCountdown(HACKATHON_DATE);
  const isHackathonOver = (new Date(HACKATHON_END_DATE).getTime() - new Date().getTime()) < 0;
  return (
    <div className="w-[100vw] flex items-center justify-between">
      <Image src="/earth_graphic.webp" alt="Hero image" width={800} height={600} />
      <div className="flex flex-col items-center gap-8 mr-[10vw]">
        <div className="flex flex-col text-center gap-4">
          <div className="text-9xl font-black font-[Nippo-Variable]">HackTU {HACKATHON_VERSION}.0</div>
          <div className="text-2xl font-medium font-[Nippo-Variable]">{HACKATHON_DATE_FMT}</div>
        </div>
        {isPassed ? (
          startPassed ? (
            isHackathonOver ? (
              <div className="flex flex-col text-center">
                <div className="text-5xl">Thank you for a wonderful event!</div>
              </div>
            ) : (
              <div className="flex flex-col text-center">
                <div className="text-5xl">Hackathon is Live!</div>
              </div>
            )
          ) : (
          <div className="flex flex-col text-center">
            <div className="text-md">Registeration Over</div>
            <div className="text-3xl">Hackathon Starts In</div>
            <Countdown {...startCountDown} />
          </div>
          )
        ) : (
        <>
          <ApplyWithDevfolio />
          <div className="flex flex-col text-center">
            <div className="text-3xl">Registeration Deadline</div>
            <Countdown {...countdown} />
          </div>
        </>
        )}
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
          <div><span className="text-main font-bold">Creative Computing Society</span> is back with <span className="text-main font-bold">HackTU {HACKATHON_VERSION}.0</span>, our flagship event</div>
          <div>hosted at Thapar Institute of Engineering and Technology, Patiala.</div>
          <div>We're excited to see what innovative ideas emerge from this year's event.</div>
          <div>Whether you're a seasoned developer or new to hackathons, there's something for everyone.</div>
          <div>Development is more than just coding—it's an adrenaline rush that drives innovation.</div>
          <div>Today's tech world demands solutions that are both cutting-edge and user-friendly.</div>
          <div><span className="text-main font-bold">Gear up your tech stack</span>, brainstorm innovative ideas, ignite team spirit,</div>
          <div>and build solutions for real-world problems at <span className="text-main font-bold">HackTU {HACKATHON_VERSION}.0</span> - the biggest offline hackathon at TIET!</div>
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

function Tracks() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Tracks</div>
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

function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Timeline</div>
      <div className="flex flex-col items-center gap-4">
        <div className="flex">
          <Button variant="reverse" className="bg-main h-auto" onClick={() => setCurrentIndex(0)}>
            <div className="flex flex-col w-[40vw] whitespace-normal gap-4 p-4">
              <div className="text-4xl font-[Nippo-Variable]">{TIMELINE[0].title}</div>
              <div className="text-xl">{TIMELINE[0].description}</div>
            </div>
          </Button>
          <Button variant="reverse" className="bg-main h-auto" onClick={() => setCurrentIndex(1)}>
            <div className="flex flex-col w-[40vw] whitespace-normal gap-4 p-4">
              <div className="text-4xl font-[Nippo-Variable]">{TIMELINE[1].title}</div>
              <div className="text-xl">{TIMELINE[1].description}</div>
            </div>
          </Button>
        </div>
        <div className="flex">
          <Button variant="reverse" className="bg-main h-auto" onClick={() => setCurrentIndex(2)}>
            <div className="flex flex-col w-[40vw] whitespace-normal gap-4 p-4">
              <div className="text-4xl font-[Nippo-Variable]">{TIMELINE[2].title}</div>
              <div className="text-xl">{TIMELINE[2].description}</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="flex w-[100vw] justify-evenly text-center">
        <Calendar
          mode="range"
          hideNavigation
          defaultMonth={TIMELINE[currentIndex].start_date}
          selected={{ from: TIMELINE[currentIndex].start_date, to: TIMELINE[currentIndex].end_date}}
          numberOfMonths={2}
          onSelect={() => {}}
        />
      </div>
    </div>
  )
}

function Sponsor() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Sponsor</div>
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

function FAQs() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">FAQs</div>
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

function Footer() {
  return (
    <footer className="bg-main h-[60vh] rounded-t-[100%] flex items-center justify-center">
      <div className="flex flex-col gap-4 w-screen items-center">
        <div className="flex gap-4 font-[Nippo-Variable]">
          <Link href={FOOTER_LINKS.about}>About CCS</Link>
          <Link href={FOOTER_LINKS.privacy}>Privacy Policy</Link>
          <Link href={FOOTER_LINKS.codeofcontact}>Code of Contact</Link>
          <Link href={FOOTER_LINKS.termsandconditions}>Terms & Conditions</Link>
        </div>
        <div className="flex gap-4">
          <Link href={SOCIALS.mail}><Mail /></Link>
          <Link href={SOCIALS.instagram}><Instagram /></Link>
          <Link href={SOCIALS.linkedin}><Linkedin /></Link>
          <Link href={SOCIALS.whatsapp}><MessageCircle /></Link>
          <Link href={SOCIALS.discord}><Image src="/discord.svg" alt="Discord" width={25} height={25} /></Link>
        </div>
        <div className="flex font-[Nippo-Variable]">
©HackTU 7.0 2026 ALL RIGHTS RESERVED | Designed With ❤️ by
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
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
      <div className="h-32"></div>
      <Footer />
    </div>
  );
}
