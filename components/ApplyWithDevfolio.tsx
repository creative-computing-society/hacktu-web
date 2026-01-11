"use client";

import { DEVFOLIO_LINK } from "@/app/config"
import { Button } from "./ui/button"
import Image from "next/image"
import { cn } from "@/lib/utils";
import { useWidthCutoff } from "@/hooks/use-mobile";

export default function ApplyWithDevfolio({ disabled, smaller }: { disabled?: boolean; smaller: boolean; }) {
  const hideDevfolioIcon = useWidthCutoff(1200);
  const smallerMode = useWidthCutoff(1000);
  return (
    <Button disabled={disabled} onClick={() => open(DEVFOLIO_LINK)} className={cn("flex bg-main h-auto p-0", smaller ? "w-[40%]" : "w-[80%]", smallerMode ? "w-[90%]" : "")}>
      <div className="flex items-stretch w-full h-full justify-between font-black">
        <div className={cn(
          "self-center text-4xl grow-1 text-center text-white",
          hideDevfolioIcon ? "p-8" : "pl-8 pr-8",
        )}>Apply with Devfolio</div>
        { hideDevfolioIcon || (
          <div className="bg-white flex items-center justify-center w-[10vw] p-8">
            <Image src="devfolio.svg" alt="Devfolio Logo" width={50} height={50} />
          </div>
        )}
      </div>
    </Button>
  )
}
