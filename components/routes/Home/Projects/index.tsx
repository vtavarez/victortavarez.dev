import { EyebrowText } from '@/components/theme';
import { getProjects } from '@/lib/utils';
import { Items } from './Items';

export async function Projects() {
	const projects = await getProjects(6, 'desc');

	return (
		<section className="mt-2 flex h-full flex-col justify-between md:mt-0 md:h-horizontal-content">
			<div className="flex h-full flex-col justify-start lg:justify-center">
				<Items items={projects} />
			</div>
			<div>
				<EyebrowText className="pt-14 md:pt-20">Lets connect</EyebrowText>
			</div>
		</section>
	);
}
