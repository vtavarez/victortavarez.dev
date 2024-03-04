import { Project } from '@/components/routes/case-studies';
import { notFound } from 'next/navigation';
import { getWork } from '@/lib/utils';
import { type Metadata } from 'next';

type PostProps = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({
	params,
}: PostProps): Promise<Metadata> {
	const project = await getWork(params.slug);

	return 'error' in project
		? {
				title: '404 Not Found - Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: project.title + ' - Victor Tavarez',
				description: project.excerpt,
			};
}

export default async function Page({ params }: PostProps) {
	const project = await getWork(params.slug);
	return 'error' in project ? notFound() : <Project {...project} />;
}
