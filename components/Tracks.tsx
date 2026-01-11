"use client";

import { TRACKS } from "@/app/config"
import { Card, CardTitle } from "./ui/card";
import { cn } from "@/lib/utils";
import { useWidthCutoff } from "@/hooks/use-mobile";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function Tracks() {
  const smallerFont = useWidthCutoff(582);
  const switchToSingleColumn = useWidthCutoff(1144);
  return (
    <div className="flex flex-col items-center">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Tracks</div>
      <div className={cn("grid gap-4 w-[80vw] justify-evenly text-center", switchToSingleColumn ? "grid-cols-1" : "grid-cols-2")}>
        {TRACKS.map((track, i) => (
          <Card key={`track-${i}`} className={cn("p-4 flex flex-col h-auto justify-evenly", SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow")}>
            <CardTitle>
              <div className={cn("font-[Nippo-Variable]", smallerFont ? "text-3xl" : "text-6xl")}>{track.name}</div>
              <div className="text-xl">{track.sdg}</div>
            </CardTitle>
            <div className="text-2xl">{track.description}</div>
          </Card>
        ))}
      </div>
    </div>
  )
}

