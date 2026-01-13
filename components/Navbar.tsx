"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "./ui/navigation-menu";
import { useIsMobile, useWidthCutoff } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function Navbar({ items }: {
  items: {
    name: string;
    link: string
  }[]
}) {
  useEffect(() => {
    // https://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
    // Source - https://stackoverflow.com/a
    // Posted by Joseph Silber, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-01-13, License - CC BY-SA 3.0
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
  }, [])
  const hideBanner = useWidthCutoff(1000);
  const hideCCSLogo = useWidthCutoff(500);
  const verySmall = useWidthCutoff(484);
  return (
    <NavigationMenu viewport={useIsMobile()} className="z-5 h-24 fixed bg-white p-4 border-black">
    {hideCCSLogo || (
      <NavigationMenuList className="w-[50vw] justify-start pl-4">
        <div className="bg-[var(--maindark)] p-2 rounded-4xl">
          <Image src="/ccs_logo_white.png" alt="CCS Logo" width={40} height={40} />
        </div>
      </NavigationMenuList>
    )}
    <NavigationMenuList className={cn(hideCCSLogo ? "w-[100vw]" : "w-[50vw] pr-4 justify-end")}>
      {items.map(({ name, link }) => (
        <NavigationMenuItem key={`navbar-item-${name}`}>
          <NavigationMenuLink href={link} className={cn(
            navigationMenuTriggerStyle(),
            "bg-transparent",
            verySmall ? "text-sm" : "text-xl"
          )}>
            {name}
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
      {hideBanner || (
        <NavigationMenuItem>
          <Image
            className="translate-y-[25%]"
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
            alt="Major League Hacking 2026"
            width={120}
            height={120}
          />
        </NavigationMenuItem>
      )}
    </NavigationMenuList>
    </NavigationMenu>
  )
}
