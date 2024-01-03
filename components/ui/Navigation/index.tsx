"use client";
import Link from "next/link";
import items from "./items.json";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/Menu";
import { ModeToggle } from "@/components/ui/Button";

export function Navigation() {
  return (
    <div className="space-between flex flex-row items-center px-3 py-2 xl:px-16 xl:py-3">
      <h2 className="mr-auto text-2xl font-semibold leading-none tracking-tighter text-primary">
        <Link href="/">Vic</Link>
      </h2>
      <div className="ml-auto">
        <NavigationMenu className="mr-2 sm:mr-[8rem]">
          <NavigationMenuList>
            {items.map(({ id, title, href }) => (
              <NavigationMenuItem key={id}>
                <Link
                  href={href}
                  legacyBehavior
                  passHref
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ModeToggle />
    </div>
  );
}
