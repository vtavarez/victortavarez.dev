"use client";
import Link from "next/link";
import navigation_links from "@/lib/data/navigation_links.json";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/Menu";
import { ModeToggle } from "@/components/ui/Buttons";

export function Navigation() {
  return (
    <div className="space-between -mx-6 flex flex-row items-center px-3 py-2 xl:mx-0 xl:py-3">
      <h2 className="mr-auto text-lg font-medium leading-none tracking-tighter text-primary">
        <Link href="/">Victor.</Link>
      </h2>
      <div className="ml-auto">
        <NavigationMenu className="mr-2 sm:mr-[8rem]">
          <NavigationMenuList>
            {navigation_links.map(
              ({
                id,
                title,
                href,
              }: {
                id: number;
                title: string;
                href: string;
              }) => (
                <NavigationMenuItem key={id}>
                  <Link
                    href={href}
                    legacyBehavior
                    passHref
                  >
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {title}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ),
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <ModeToggle />
    </div>
  );
}
