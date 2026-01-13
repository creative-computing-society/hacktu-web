"use client";

import { SOCIALS, SPONSOR_PACKET, SPONSORS } from "@/app/config"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function Sponsor() {
  const verySmall = useWidthCutoff(484);
  return (
    <div id="sponsor" className="flex flex-col items-center">
      <div className={cn("font-[Nippo-Variable] mb-16", verySmall ? "text-6xl" : "text-8xl")}>Sponsor</div>
      <div className={cn("flex flex-col w-[100vw] gap-15 justify-evenly items-center text-center", verySmall ? "p-2" : "p-8")}>
      <div className="grid grid-cols-2 gap-4">
        {SPONSORS.map(({ image_link, link, name }, i) => (
          <Card key={`sponsor-${name}`} className={cn("flex items-center justify-center p-8", SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow")}>
            <Link href={link}>
              <Image src={image_link} width={600} height={400} alt={name} />
            </Link>
          </Card>
        ))}
      </div>
      <div className={cn("flex flex-col gap-4 font-[Nippo-Variable]", verySmall ? "w-[90vw]" : "")}>
        <div className={cn(verySmall ? "text-3xl" : "text-6xl")}>Looking to Sponsor?</div>
        <div className={cn(verySmall ? "text-2xl" : "text-4xl")}>See our sponsor packet below and reach out to us</div>
        <Link href={SOCIALS.mail} className="text-2xl underline">here!</Link>
        <Link href={SPONSOR_PACKET}>
          <Button className={cn("h-auto p-4 cursor-pointer w-full", verySmall ? "text-3xl" : "text-5xl")}>Sponsor Packet</Button>
        </Link>
      </div>
      </div>
    </div>
  )
}

