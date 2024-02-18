import { Project } from '@/components/theme';

export async function Projects() {
	return (
		<section className="mt-2 md:mt-0">
			{Array.from({ length: 3 }).map((_, i) => (
				<Project key={i} />
			))}
		</section>
	);
}
