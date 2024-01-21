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
        Hey there, and welcome. I am a full-stack developer with a passion for
        building beautiful, functional, and accessible web applications. Below
        you will find a selection of my work.
      </ValueProp>
      <EyebrowText
        text="Selected work"
        cta="Discover"
      />
      <SelectedWork />
      <ValueProp
        className="h-[768px] py-24 text-2xl xl:mb-32 xl:pb-8 xl:pt-48"
        number="003"
      >
        A function using async/await can use as many await expressions as it
        wants, and each will be handled in the same way (though a promise will
        only be returned to the caller for the first await, while every other
        await will utilize internal callbacks).
      </ValueProp>
      <Marquee />
      <Contact />
    </main>
  );
}
