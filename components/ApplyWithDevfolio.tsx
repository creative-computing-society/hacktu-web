"use client"

import { DEVFOLIO_LINK } from "@/app/config"
import { Button } from "./ui/button"
import Image from "next/image"

export default function ApplyWithDevfolio({ disabled }: { disabled?: boolean }) {
  return (
    <Button disabled={disabled} onClick={() => open(DEVFOLIO_LINK)} className="flex bg-main w-[80%] h-auto p-0">
      <div className="flex items-center justify-between font-black">
        <div className="pt-8 pb-8 text-4xl grow-1 text-center text-white">Apply with Devfolio</div>
        <div className="bg-white w-[20%] pt-8 pb-8 pr-8 pl-8 pr-0">
          <Image src="devfolio.svg" alt="Devfolio Logo" width={200} height={0} />
        </div>
      </div>
    </Button>
  )
}
