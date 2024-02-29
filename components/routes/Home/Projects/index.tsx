import { EyebrowText } from '@/components/theme';
import { getProjects } from '@/lib/utils';
import { Items } from './Items';

export async function Projects() {
	const projects = await getProjects(6, 'desc');

	return (
		<section className="mt-2 flex h-horizontal-content flex-col justify-between md:mt-0">
			<Items items={projects} />
			<div>
				<EyebrowText>Lets connect</EyebrowText>
			</div>
		</section>
	);
}
