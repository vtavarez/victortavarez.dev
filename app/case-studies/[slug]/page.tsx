import { Content } from '@/components/theme';
import { notFound } from 'next/navigation';
import { getCaseStudy } from '@/lib/utils';
import { type Metadata } from 'next';

type Props = {
	params: {
		slug: string;
	};
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const study = await getCaseStudy(params.slug);

	return 'error' in study
		? {
				title: '404 Not Found | Case Studies | Victor Tavarez',
				description: 'This post could not be found.',
			}
		: {
				title: study.title + ' | Case Studies | Victor Tavarez',
				description: study.excerpt,
			};
}

export default async function Page({ params }: Props) {
	const study = await getCaseStudy(params.slug);
	return 'error' in study ? notFound() : <Content {...study} />;
}
