import {
  Hero,
  SelectedWork,
  SelectedPosts,
  Contact,
} from "@/components/landing";
import { RouteAnimation, ValueProp, EyebrowText } from "@/components/theme";

export default function Home() {
  return (
    <RouteAnimation>
      <Hero />
      <EyebrowText>Selected posts</EyebrowText>
      <SelectedPosts />
      <ValueProp
        className="xl:pb-38 h-[728px] pb-8 pt-20 text-2xl xl:h-[768px] xl:pt-48"
        number="001"
      >
        Hey there, and welcome to my corner of the web. Above you will find a
        selection of my writing, and below you will find a selection of my work.
      </ValueProp>
      <EyebrowText cta="Discover">Selected work</EyebrowText>
      <SelectedWork />
      <ValueProp
        className="h-[768px] py-24 text-2xl xl:mb-32 xl:pb-8 xl:pt-48"
        number="002"
      >
        With almost a decade of working with the web, I have worked on a wide
        range of projects, from small websites to large scale applications. I
        have also worked with a wide range of clients, from small teams to large
        corporations.
      </ValueProp>
      <EyebrowText>Lets connect</EyebrowText>
      <ValueProp
        className="h-[368px] py-24 text-2xl xl:pb-8 xl:pt-0"
        number="003"
      >
        If you would like to get in touch, please feel free to reach out.
      </ValueProp>
      <Contact />
    </RouteAnimation>
  );
}
