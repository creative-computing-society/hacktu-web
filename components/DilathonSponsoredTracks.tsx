"use client";

import { DILATHON_SPONSORED_TRACKS } from "@/app/config";
import { cn } from "@/lib/utils";
import { Card, CardTitle } from "./ui/card";
import Image from "next/image";
import { useWidthCutoff } from "@/hooks/use-mobile";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function DilathonSponsoredTracks({
  smallerFont, switchToSingleColumn, verySmall
}: {
  smallerFont: boolean,
  switchToSingleColumn: boolean,
  verySmall: boolean,
}) {
  const titleInColumn = useWidthCutoff(890);
  return (
    <Card className="flex flex-col w-[90vw] items-center mt-16 bg-[#111111] p-4 redshadow">
      <div className={cn("flex items-center justify-evenly font-[Nippo-Variable] mb-8", verySmall ? "text-6xl" : "text-8xl", titleInColumn ? "flex-col" : "")}>
      <Image src="/sponsors/dilathon_white.png" alt="Dilathon" width={400} height={20} />
      <div className="text-white">Tracks</div>
      </div>
      <div className={cn("grid gap-4 w-[80vw] justify-evenly text-center", switchToSingleColumn ? "grid-cols-1" : "grid-cols-2")}>
        {DILATHON_SPONSORED_TRACKS.map((track, i) => (
          <Card key={`dilathon-track-${i}`} className={cn("p-4 bg-[#111100] text-white flex flex-col h-auto justify-evenly", SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow")}>
            <CardTitle>
              <div className={cn("font-[Nippo-Variable]", smallerFont ? "text-xl" : "text-4xl")}>{track.name}</div>
            </CardTitle>
            <div className="flex flex-col gap-2 text-start">
              <div className="font-bold text-lg">Problem</div>
              <div className="text-lg text-[#fb542b]">{track.problem}</div>
              <div className="font-bold text-lg">Challenge</div>
              <div className="text-lg text-[#68b8ff]">{track.challenge}</div>
              <div className="font-bold text-lg">Requirements</div>
              <div className="flex flex-col ml-4">
              {track.requirements.map((requirement, j) => (
                <div key={`dilathon-track-${i}-requirement-${j}`}>{requirement}</div>
              ))}
              </div>
            </div>
          </Card>
        ))}
        <Card className={cn("p-4 bg-black text-white flex flex-col h-auto justify-evenly", SHADOWCOLOR[(DILATHON_SPONSORED_TRACKS.length) % SHADOWCOLOR.length] + "shadow")}>
          <CardTitle>
            <div className={cn("font-[Nippo-Variable]", smallerFont ? "text-xl" : "text-4xl")}>OPEN DEFENCE INNOVATION</div>
          </CardTitle>
          <div className="text-md">
Surprise us! Propose + prototype any defense-relevant drone solution:
Counter-UAV jamming
Swarm coordination
Thermal target tracking
Autonomous package delivery (ISR)
Your wildest idea...
          </div>
        </Card>
      </div>
    </Card>
  )
}
