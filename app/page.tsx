import {
  Hero,
  SelectedWork,
  SelectedPosts,
  Contact,
} from "@/components/landing";
import { ValueProp, EyebrowText, Marquee } from "@/components/theme";

export default function Home() {
  return (
    <main className="px-6 xl:px-16">
      <Hero />
      <EyebrowText text="Selected posts" />
      <SelectedPosts />
      <ValueProp
        className="xl:pb-38 pb-8 pt-20 text-2xl xl:pt-48"
        number="001"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum debitis
        tempore molestias eligendi nesciunt dicta inventore deleniti nobis.
      </ValueProp>
      <EyebrowText
        text="Selected work"
        cta="Discover"
      />
      <SelectedWork />
      <ValueProp
        className="py-24 text-2xl xl:py-48"
        number="002"
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum debitis
        tempore molestias eligendi nesciunt dicta inventore deleniti nobis.
      </ValueProp>
      <Marquee />
      <Contact />
    </main>
  );
}
