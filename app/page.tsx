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
				<Contact />
			</section>
		</section>
	);
}
