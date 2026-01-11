"use client";

import Countdown from "../components/Countdown";
import ApplyWithDevfolio from "@/components/ApplyWithDevfolio";
import { useCountdown } from "@/app/utils";
import { HACKATHON_DATE, HACKATHON_DATE_FMT, HACKATHON_END_DATE, HACKATHON_VERSION, REGISTERATION_DEADLINE } from "@/app/config";
import Image from "next/image";
import { useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Hero() {
  const { isPassed, ...countdown } = useCountdown(REGISTERATION_DEADLINE);
  const { isPassed: startPassed, ...startCountDown} = useCountdown(HACKATHON_DATE);
  const isHackathonOver = (new Date(HACKATHON_END_DATE).getTime() - new Date().getTime()) < 0;
  const hideImage = useWidthCutoff(1500);
  const showMLHOfficialTag = useWidthCutoff(1001);
  const verySmall = useWidthCutoff(484);
  return (
    <div className="w-[100vw] h-[100vh] flex items-center justify-between">
      {hideImage || (
        <Image src="/earth_graphic.webp" alt="Hero image" width={800} height={600} />
      )}
      <div className={cn("flex flex-col items-center gap-8", hideImage ? "w-screen justify-between mt-[25vh]" : "mr-[10vw]")}>
        <div className="flex flex-col text-center gap-4">
          <div>
            <div className={cn("font-black font-[Nippo-Variable]", verySmall ? "text-8xl" : "text-9xl")}>HackTU {HACKATHON_VERSION}.0</div>
            { showMLHOfficialTag && <div className="text-md font-normal font-[Nippo-Variable]">MLH Official Hackathon</div> }
          </div>
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

