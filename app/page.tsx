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
        className="xl:pb-38 h-[728px] pb-8 pt-20 text-2xl xl:h-[768px] xl:pt-48"
        number="001"
      >
        Hey there, and welcome to my corner of the web. Above you will find a
        selection of my writing. Below you will find a selection of my work.
      </ValueProp>
      <EyebrowText
        text="Selected work"
        cta="Discover"
      />
      <SelectedWork />
      <ValueProp
        className="h-[768px] py-24 text-2xl xl:mb-32 xl:pb-8 xl:pt-48"
        number="002"
      >
        With over 8 years of experience working with the web, I have worked on a
        wide range of projects, from small websites to large scale applications.
        I have also worked with a wide range of clients, from small businesses
        to large corporations.
      </ValueProp>
      <Marquee />
      <ValueProp
        className="h-[368px] py-24 text-2xl xl:pb-8 xl:pt-48"
        number="003"
      >
        If you would like to get in touch, please feel free to reach out.
      </ValueProp>
      <Contact />
    </main>
  );
}
