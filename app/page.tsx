import {
  Hero,
  SelectedWork,
  SelectedPosts,
  LetsConnect,
} from '@/components/routes/Home';
import { ValueProp, EyebrowText } from '@/components/theme';
import { HorizontalContent, HorizontalContentItem } from '@/components/ui';

export default function Page() {
  return (
    <section className="pt-[100lvh]">
      <Hero />
      <section className="bg-gradient-to-t from-background from-95% to-transparent xl:pt-24">
        <HorizontalContent>
          <HorizontalContentItem>
            <ValueProp
              className="h-horizontal-content xl:pt-20"
              number="001"
            >
              Thanks for visiting my corner of the web. Here you will find a
              selection of my writing, and work.
            </ValueProp>
            <EyebrowText
              cta="Selected posts"
              icon="arrow-right"
            >
              Discover
            </EyebrowText>
          </HorizontalContentItem>
          <HorizontalContentItem>
            <div className="flex h-horizontal-content justify-center xl:pr-4 xl:pt-20">
              <SelectedPosts />
            </div>
          </HorizontalContentItem>
        </HorizontalContent>
        <EyebrowText
          cta="Selected work"
          icon="arrow-down"
        >
          Discover
        </EyebrowText>
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
      </section>
    </section>
  );
}
