import { Hero, Featured, Contact } from "@/components/landing";

export default function Home() {
  return (
    <main className="px-6 xl:px-16">
      <Hero />
      <Featured />
      <Contact />
    </main>
  );
}
