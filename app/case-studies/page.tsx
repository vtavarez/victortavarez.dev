import { Heading } from '@/components/theme';
import { Menu } from '@/components/routes/case-studies';
import { getCaseStudies } from '@/lib/utils';

export default async function Page() {
	const studies = await getCaseStudies();
	return (
		<section className="flex h-[100lvh] flex-row items-end justify-between pb-12 xl:pb-32">
			<Heading className="xl:pb-3">Case Studies</Heading>
			<Menu items={studies} />
		</section>
	);
}
