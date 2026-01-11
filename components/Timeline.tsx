"use client"

import { useRef, useState } from "react";
import { TimelineItem, TIMELINE } from "@/app/config"
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWidthCutoff } from "@/hooks/use-mobile";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const switchToSingleColumn = useWidthCutoff(700);
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-8xl font-[Nippo-Variable] mb-16">Timeline</div>
      <div className={cn("grid items-center gap-4", switchToSingleColumn ? "grid-cols-1" : "grid-cols-2")}>
      {TIMELINE.map((item, i) => (
        <Button key={`timeline-item-${i}`} className={cn("bg-main h-full", SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow")} onClick={() => {
          setCurrentIndex(i);
          const calendar = document.getElementById("timeline-calendar");
          if (calendar) calendar.scrollIntoView({
            behavior: 'smooth',
            inline: 'end'
          })
        }}>
          <div className="flex flex-col w-[40vw] whitespace-normal gap-4 p-4">
            <div className={cn("font-[Nippo-Variable]", switchToSingleColumn ? "text-2xl" : "text-4xl")}>{item.title}</div>
            <div className="text-xl">{item.description}</div>
          </div>
        </Button>
      ))}
      </div>
      <div className="flex flex-col w-[100vw] justify-evenly items-center">
      <div id="timeline-calendar" className="translate-y-[-25vw]"></div>
        <Calendar
          className="bg-offwhite p-8 rounded-xl"
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

