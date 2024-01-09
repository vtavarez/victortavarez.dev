import { Hero, Featured, Contact } from "@/components/landing";
import { Marquee } from "@/components/ui";

export default function Home() {
  return (
    <main className="px-6 xl:px-16">
      <Hero />
      <Featured />
      <Marquee />
      <Contact />
    </main>
  );
}
