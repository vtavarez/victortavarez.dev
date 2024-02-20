import { Project, EyebrowText, ValueProp } from '@/components/theme';

export async function Projects() {
	return (
		<section className="mt-2 flex h-horizontal-content flex-col justify-between md:mt-0">
			<div className="flex flex-col justify-between">
				<ValueProp>Here are a few of my most recent projects.</ValueProp>
				<div>
					{Array.from({ length: 3 }).map((_, i) => (
						<Project
							key={i}
							number={i + 1}
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
