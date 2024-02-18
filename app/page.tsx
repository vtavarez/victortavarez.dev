import {
	Hero,
	Projects,
	HorizontalContent,
	Contact,
} from '@/components/routes/home';
import { ValueProp } from '@/components/theme';

export default function Page() {
	return (
		<section className="pt-[100lvh]">
			<Hero />
			<section className="bg-gradient-to-t from-background from-95% to-transparent xl:pt-24">
				<HorizontalContent />
				<Projects />
				{/* <ValueProp
					className="h-[768px] py-24 text-2xl xl:mb-32 xl:pb-8 xl:pt-48"
					number="003"
				>
					With almost a decade of working with the web, I have worked on a wide
					range of projects, from small websites to large scale applications. I
					have also worked with a wide range of clients, from small teams to
					large corporations.
				</ValueProp> */}
				<Contact />
			</section>
		</section>
	);
}
