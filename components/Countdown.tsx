"use client"

import { CardContent, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { leftPad } from '@/app/utils';

function Box({ label, value, className }: { label: string, value: string, className?: string }) {
  return <Button className={cn("p-4 flex flex-col text-center h-auto bg-transparent", className)}>
    <CardTitle>{label}</CardTitle>
    <CardContent className="text-4xl font-[Nippo-Variable]">
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
  return (
    <div className="flex gap-2">
      <Box label="Days" value={days.toString()} />
      <Box label="Hours" value={hours.toString()} />
      <Box label="Minutes" value={minutes.toString()} />
      <Box label="Seconds" value={leftPad(seconds.toString(), 2, "0")} />
      <Box className="min-w-[8vw]" label="Milliseconds" value={leftPad(milliseconds.toString(), 3, "0")} />
    </div>
  )
}
