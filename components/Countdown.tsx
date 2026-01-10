"use client"

import { useEffect, useState } from 'react'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from './ui/input-otp'
import { Rows2 as Seperator } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

function getRemainingTime(endDateStr: string) {
  const today = new Date();
  const end = new Date(endDateStr);

  let days = end.getDate() - today.getDate();
  let hours = end.getHours() - today.getHours();
  let minutes = end.getMinutes() - today.getMinutes();
  let seconds = end.getSeconds() - today.getSeconds();
  let milliseconds = end.getMilliseconds() - today.getMilliseconds();

  if (milliseconds < 0) {
    seconds--;
    milliseconds += 1000;
  }

  if (seconds < 0) {
    minutes--;
    seconds += 60;
  }

  if (minutes < 0) {
    hours--;
    minutes += 60;
  }

  if (hours < 0) {
    days--;
    hours += 24;
  }

  return { days, hours, minutes, seconds, milliseconds };
}

function Box({ label, value, className }: { label: string, value: string, className?: string }) {
  return <Button className={cn("p-4 flex flex-col text-center h-auto bg-transparent", className)}>
    <CardTitle>{label}</CardTitle>
    <CardContent className="text-4xl font-[Nippo-Variable]">
      {value}
    </CardContent>
  </Button>
}

function leftPad(
  original: string,
  new_length: number,
  padder: string
) {
  let output = original;
  for (let _ = 0; _ < new_length - original.length; _++)
    output = padder + output;
  return output;
}

export default function Countdown({ endTime }: { endTime: string }) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const time = getRemainingTime(endTime);
      setDays(time.days);
      setHours(time.hours);
      setMinutes(time.minutes);
      setSeconds(time.seconds);
      setMilliseconds(time.milliseconds);
    }, 10)
  }, [])

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
