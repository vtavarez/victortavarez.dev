import { Project, EyebrowText, ValueProp } from '@/components/theme';
import { getProjects } from '@/lib/utils';

export async function Projects() {
	const response = await getProjects(6, 'desc');

	return (
		<section className="mt-2 flex h-horizontal-content flex-col justify-between md:mt-0">
			<div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
				<ValueProp>Here are a few of my most recent projects.</ValueProp>
				<div className="inline-flex min-h-[294px] w-full flex-wrap justify-between xl:pt-12">
					{response.error
						? null
						: response.projects.map((project, i) => (
								<Project
									key={i}
									number={i + 1}
									{...project}
								/>
							))}
				</div>
			</div>
			<div>
				<EyebrowText>Lets connect</EyebrowText>
			</div>
		</section>
	);
}
