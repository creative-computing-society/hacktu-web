"use client"

import { RefObject, useEffect, useRef, useState } from "react";
import { TIMELINE } from "@/app/config"
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useWidthCutoff } from "@/hooks/use-mobile";

const SHADOWCOLOR = ["red", "yellow", "green", "blue", "purple"]
export default function Timeline() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const switchToSingleColumn = useWidthCutoff(700);
  const verySmall = useWidthCutoff(484);
  const HOVER_CLASS = "translate-x-boxShadowX translate-y-boxShadowY shadow-none"

  const [buttonHoverState, setButtonHoverState] = useState(new Array(TIMELINE.length).fill(false) as boolean[])
  const [intervalState, setIntervalState] = useState<any>(null);

  useEffect(() => {
    let i = 0;
    let old_i = 0;
    const interval = setInterval(() => {
      const clone = buttonHoverState.slice();
      clone[old_i] = false;
      clone[i] = true;
      setCurrentIndex(i);
      setButtonHoverState(clone);
      old_i = i;
      i = (i + 1) % TIMELINE.length;
    }, 1000);
    setIntervalState(interval);

    return () => clearInterval(interval)
  }, [])
  return (
    <div id="timeline" className="flex flex-col items-center gap-4">
      <div className={cn("font-[Nippo-Variable] mb-16", verySmall ? "text-6xl" : "text-8xl")}>Timeline</div>
      <div className={cn("grid items-center gap-4", switchToSingleColumn ? "grid-cols-1" : "grid-cols-2")}>
      {TIMELINE.map((item, i) => (
        <Button key={`timeline-item-${i}`} className={cn("bg-main h-full", SHADOWCOLOR[i % SHADOWCOLOR.length] + "shadow", buttonHoverState[i] ? HOVER_CLASS : "")} onClick={() => {
          setCurrentIndex(i);
          clearInterval(intervalState);
          const calendar = document.getElementById("timeline-calendar");
          if (calendar) calendar.scrollIntoView({
            behavior: 'smooth',
            inline: 'end'
          })
        }}>
          <div className={cn("flex flex-col whitespace-normal gap-4 p-4", verySmall ? "w-[80vw]" : "w-[40vw]")}>
            <div className={cn("font-[Nippo-Variable]", switchToSingleColumn ? "text-xl" : "text-4xl")}>{item.title}</div>
            <div className="text-md">{item.description}</div>
          </div>
        </Button>
      ))}
      </div>
      <div className={cn("flex flex-col justify-evenly items-center", verySmall ? "w-[80vw]" : "w-[60vw]")}>
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

