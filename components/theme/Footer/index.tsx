import { Socials } from "./Socials";
import { Links } from "./Links";
import { Marquee } from "@/components/theme";

export function Footer() {
  return (
    <footer className="absolute bottom-0 -mx-6 h-80 w-full overflow-x-hidden bg-background py-8 text-primary xl:-mx-16">
      <Socials />
      <div className="flex flex-col justify-center py-2">
        <Marquee />
      </div>
      <Links />
    </footer>
  );
}
