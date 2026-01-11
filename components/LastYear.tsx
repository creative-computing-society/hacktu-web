"use client";

import { useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function LastYear() {
  const switchToColumn = useWidthCutoff(666);
  const verySmall = useWidthCutoff(484);

  return (
    <div className="flex flex-col items-center">
      <div className={cn("font-[Nippo-Variable] mb-16", verySmall ? "text-6xl" : "text-8xl")}>Last Year{switchToColumn || "..."}</div>
      <div className={cn("flex w-[100vw] justify-evenly text-center", switchToColumn && "flex-col gap-16")}>
        <div className="flex flex-col gap-2">
          <div className={cn("font-[Nippo-Variable]", verySmall ? "text-4xl" : "text-6xl")}>100+</div>
          <div className={cn(verySmall ? "text-3xl" : "text-4xl")}>Projects</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className={cn("font-[Nippo-Variable]", verySmall ? "text-4xl" : "text-6xl")}>500+</div>
          <div className={cn(verySmall ? "text-3xl" : "text-4xl")}>Hackers</div>
        </div>
        <div className="flex flex-col gap-2">
          <div className={cn("font-[Nippo-Variable]", verySmall ? "text-4xl" : "text-6xl")}>5 Lakhs+</div>
          <div className={cn(verySmall ? "text-3xl" : "text-4xl")}>Prizes</div>
        </div>
      </div>
    </div>
  )
}

