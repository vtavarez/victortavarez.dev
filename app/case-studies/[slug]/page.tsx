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
	const response = await getWork(params.slug);

	return 'error' in response
		? {
				title: '404 Not Found - Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: response.title + ' - Victor Tavarez',
				description: response.excerpt,
			};
}

export default async function Page({ params }: PostProps) {
	const response = await getWork(params.slug);
	return 'error' in response ? notFound() : <Project {...response} />;
}
