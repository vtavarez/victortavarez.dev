"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/Menu";
import { ModeToggle } from "@/components/ui/Buttons";
import navigation_links from "@/lib/data/navigation_links.json";

export function Navigation() {
  return (
    <div className="-mx-6 flex flex-row items-center px-3 py-2 xl:mx-0 xl:py-3">
      <h2 className="mr-auto text-base font-medium leading-none tracking-tighter text-primary">
        <Link href="/">Victor.</Link>
      </h2>
      <div className="mx-auto text-base font-medium leading-none tracking-tighter text-primary">
        Web Developer
      </div>
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
