import { Heading } from '@/components/theme';
import { Menu } from '@/components/routes/case-studies';
import { getCaseStudies } from '@/lib/utils';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Case Studies - Victor Tavarez',
	description:
		"Case studies that delve into recent projects I've undertaken for various clients.",
};

export default async function Page() {
	const studies = await getCaseStudies();
	return (
		<section className="flex h-[100lvh] flex-row items-end justify-between pb-6 xl:pb-24">
			<Heading className="xl:pb-3">Case Studies</Heading>
			<Menu items={studies} />
		</section>
	);
}
