import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { Marquee } from "@/components/theme";

export function Footer() {
  return (
    <footer className="absolute bottom-0 -mx-6 h-80 w-full overflow-x-hidden bg-background py-8 text-primary xl:-mx-16">
      <div className="flex h-fit w-full flex-col justify-between px-6 pb-4 text-base font-medium md:flex-row xl:px-16">
        <div>Victor.</div>
        <div>Januaray 25, 2023</div>
        <div>Socials</div>
        <div>
          <div>
            <ul>
              <li>Github</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center py-2">
        <Marquee />
      </div>
      <div className="mt-6 flex h-fit w-full flex-row justify-between px-6 text-base xl:px-16">
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-row flex-wrap items-center justify-between gap-4">
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          Top <ArrowUp />
        </div>
      </div>
    </footer>
  );
}
