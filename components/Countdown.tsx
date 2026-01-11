"use client";

import { CardContent, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { leftPad } from '@/app/utils';
import { JetBrains_Mono } from "next/font/google"
import { useWidthCutoff } from '@/hooks/use-mobile';

const mono = JetBrains_Mono({ subsets: ['latin'] });

function Box({ label, value, className }: { label: string, value: string, className?: string }) {
  return <Button className={cn("pt-4 pb-4 flex flex-col text-center h-auto bg-transparent", className)}>
    <CardTitle>{label}</CardTitle>
    <CardContent className={"text-2xl " + mono.className}>
      {value}
    </CardContent>
  </Button>
}

export default function Countdown({ days, hours, minutes, seconds, milliseconds }: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}) {
  const fullWidthMode = useWidthCutoff(1500);
  const moveSmallerUnitsDown = useWidthCutoff(700);

  const secondsNode = <Box label="Seconds" className="blueshadow" value={leftPad(seconds.toString(), 2, "0")} />
  const millisecondsNode = <Box label="Milliseconds" className="purpleshadow" value={leftPad(milliseconds.toString(), 3, "0")} />
  return (
    <div className="flex flex-col gap-4">
    <div className={cn("flex justify-center gap-2", fullWidthMode ? "w-[90vw]" : "w-[40vw]")}>
      <Box label="Days" className="redshadow" value={days.toString()} />
      <Box label="Hours" className="yellowshadow" value={hours.toString()} />
      <Box label="Minutes" className="greenshadow" value={minutes.toString()} />
      {moveSmallerUnitsDown || secondsNode}
      {moveSmallerUnitsDown || millisecondsNode}
    </div>
    <div className={cn("flex justify-center gap-2", fullWidthMode ? "w-[90vw]" : "w-[40vw]")}>
      {moveSmallerUnitsDown && secondsNode}
      {moveSmallerUnitsDown && millisecondsNode}
    </div>
    </div>
  )
}
