import { Metadata } from 'next';
import { getPostsCount, getPosts } from '@/lib/utils';
import { Heading } from '@/components/theme';
import { Posts } from '@/components/routes/blog';

type Props = {
	params: {
		page: string;
	};
};

export const metadata: Metadata = {
	title: 'Blog - Victor Tavarez',
	description:
		"Thoughts on the current state of web development, experiences, and the lessons I've learned along the way.",
};

export default async function Page({ params }: Props) {
	const totalPages = Math.ceil((await getPostsCount()) / 8 || 1);
	const page = parseInt(params.page || '1');
	const from = page === 1 ? 0 : 8 * page;
	const to = page === 1 ? 8 : 8 * page + 8;

	const posts = await getPosts(from, to);

	const props = {
		totalPages,
		posts,
	};

	return (
		<section className="relative pt-[100lvh]">
			<Heading
				className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-8 xl:px-8 xl:pb-20"
				icon="arrow-down"
			>
				Blog
			</Heading>
			<Posts {...props} />
		</section>
	);
}
