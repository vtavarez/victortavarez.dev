import { Heading } from '@/components/theme';
import { Menu } from '@/components/routes/case-studies';

export default async function Page() {
	return (
		<div className="flex h-[100lvh] flex-row items-end justify-between pb-12 xl:pb-32">
			<Heading className="xl:pb-3">Case Studies</Heading>
			<Menu items={[]} />
		</div>
	);
}
