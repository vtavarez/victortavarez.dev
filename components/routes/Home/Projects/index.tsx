import { EyebrowText } from '@/components/theme';
import { getProjects } from '@/lib/utils';
import { Items } from './Items';

export async function Projects() {
	const response = await getProjects(6, 'desc');

	return (
		<section className="mt-2 flex h-horizontal-content flex-col justify-between md:mt-0">
			{response.error ? null : <Items items={response.projects} />}
			<div>
				<EyebrowText>Lets connect</EyebrowText>
			</div>
		</section>
	);
}
