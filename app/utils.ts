"use client"

import { useEffect, useState } from "react";

export function useCountdown(endTime: string) {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [isPassed, setIsPassed] = useState(false);
  useEffect(() => {
    setInterval(() => {
      const time = getRemainingTime(endTime);
      setDays(time.days);
      setHours(time.hours);
      setMinutes(time.minutes);
      setSeconds(time.seconds);
      setMilliseconds(time.milliseconds);
      setIsPassed(time.isPast);
    }, 10)
  }, []);

  return { days, hours, minutes, seconds, milliseconds, isPassed };
}

export function getRemainingTime(endDateStr: string) {
  const now = new Date();
  const end = new Date(endDateStr);

  const diffMs = end.getTime() - now.getTime();
  const isPast = diffMs < 0;

  const absMs = Math.abs(diffMs);

  let milliseconds = absMs % 1000;
  let totalSeconds = Math.floor(absMs / 1000);

  let seconds = totalSeconds % 60;
  let totalMinutes = Math.floor(totalSeconds / 60);

  let minutes = totalMinutes % 60;
  let totalHours = Math.floor(totalMinutes / 60);

  let hours = totalHours % 24;
  let days = Math.floor(totalHours / 24);

  return { days, hours, minutes, seconds, milliseconds, isPast };
}

export function leftPad(
  original: string,
  new_length: number,
  padder: string
) {
  let output = original;
  for (let _ = 0; _ < new_length - original.length; _++)
    output = padder + output;
  return output;
}
