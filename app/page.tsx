import {
  Hero,
  SelectedProjects,
  SelectedPosts,
  Contact,
} from "@/components/landing";
import { Marquee } from "@/components/ui";

export default function Home() {
  return (
    <main className="px-6 xl:px-16">
      <Hero />
      <SelectedProjects />
      <SelectedPosts />
      <Marquee />
      <Contact />
    </main>
  );
}
