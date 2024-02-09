import {
  Hero,
  SelectedWork,
  SelectedPosts,
  LetsConnect,
} from '@/components/routes/Home';
import { ValueProp, EyebrowText } from '@/components/theme';

export default function Page() {
  return (
    <div className="pt-[100lvh]">
      <Hero />
      <div className="bg-gradient-to-t from-background from-95% to-transparent">
        <ValueProp
          className="xl:pb-38 h-[728px] pb-8 pt-20  xl:h-[100lvh] xl:pt-48"
          number="001"
        >
          Thanks for visiting my corner of the web. Here you will find a
          selection of my writing, and work.
        </ValueProp>
        <EyebrowText cta="Selected work">Discover</EyebrowText>
        <SelectedWork />
        <ValueProp
          className="h-[768px] py-24 text-2xl xl:mb-32 xl:pb-8 xl:pt-48"
          number="002"
        >
          With almost a decade of working with the web, I have worked on a wide
          range of projects, from small websites to large scale applications. I
          have also worked with a wide range of clients, from small teams to
          large corporations.
        </ValueProp>
        <EyebrowText>Lets connect</EyebrowText>
        <ValueProp
          className="h-[368px] py-24 text-2xl xl:pb-8 xl:pt-0"
          number="003"
        >
          If you would like to get in touch, please feel free to reach out.
        </ValueProp>
        <LetsConnect />
      </div>
    </div>
  );
}
