"use client";

import { FOOTER_LINKS, HACKATHON_DATE, HACKATHON_VERSION, SOCIALS } from "@/app/config"
import Link from "next/link";
import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export default function Footer() {
  const smallerFont = useWidthCutoff(737);
  return (
    <footer className={cn("bg-main rounded-t-[100%] flex items-center justify-center", smallerFont ? "text-[3vw] h-[30vh]" : "text-2xl h-[60vh]")}>
      <div className={cn("flex flex-col gap-4 w-screen items-center", smallerFont ? "mt-[10vh]" : "mt-[30vh]")}>
        <div className={cn("flex gap-4 font-[Nippo-Variable]", smallerFont ? "flex-col text-center" : "")}>
          <Link href={FOOTER_LINKS.about}>About CCS</Link>
          <Link href={FOOTER_LINKS.privacy}>Privacy Policy</Link>
          <Link href={FOOTER_LINKS.codeofcontact}>Code of Contact</Link>
          <Link href={FOOTER_LINKS.termsandconditions}>Terms & Conditions</Link>
        </div>
        <div className="flex gap-4">
          <Link href={SOCIALS.mail}><Mail /></Link>
          <Link href={SOCIALS.instagram}><Instagram /></Link>
          <Link href={SOCIALS.linkedin}><Linkedin /></Link>
          <Link href={SOCIALS.whatsapp}><MessageCircle /></Link>
          <Link href={SOCIALS.discord}><Image src="/discord.svg" alt="Discord" width={25} height={25} /></Link>
        </div>
        <div className="flex font-[Nippo-Variable]">
©HackTU {HACKATHON_VERSION}.0 {new Date(HACKATHON_DATE).getFullYear()} ALL RIGHTS RESERVED | Designed With ❤️ by
        </div>
      </div>
    </footer>
  )
}

