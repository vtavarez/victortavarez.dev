import {
  Hero,
  SelectedProjects,
  SelectedPosts,
  Contact,
} from "@/components/landing";
import { ValueProp } from "@/components/theme";
import { Marquee } from "@/components/ui";

export default function Home() {
  return (
    <main className="px-6 xl:px-16">
      <Hero />
      <SelectedProjects />
      <ValueProp number="001">
        <p className="text-balanced mb-5 max-w-3xl leading-snug">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          debitis tempore molestias eligendi nesciunt dicta inventore deleniti
          nobis.
        </p>
      </ValueProp>
      <SelectedPosts />
      <ValueProp number="002">
        <p className="text-balanced mb-5 max-w-3xl leading-snug">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          debitis tempore molestias eligendi nesciunt dicta inventore deleniti
          nobis.
        </p>
      </ValueProp>
      <Marquee />
      <Contact />
    </main>
  );
}
