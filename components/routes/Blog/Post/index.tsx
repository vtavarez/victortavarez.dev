import Image from 'next/image';
import { Body } from './Body';
import { Heading } from '@/components/theme';
import { formatDate } from '@/lib/utils';
import { PostType } from '@/lib/types';

export function Post({
	title,
	mainImage: { url, alt },
	timeToRead,
	excerpt,
	publishedAt,
	body = [],
}: PostType) {
	return (
		<div className="relative pt-[100lvh]">
			<Heading
				className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-12 xl:px-8 xl:pb-20"
				icon="arrow-down"
			>
				{title}
			</Heading>
			<div className="min-h-[100lvh] bg-background">
				<article className="mx-auto px-6 text-sm xl:max-w-[65%] xl:px-0 xl:text-base">
					<div className="mx-auto flex w-fit items-center gap-8">
						<span>{formatDate(publishedAt)}</span>
						<span>{timeToRead + ' min read'}</span>
					</div>
					<div className="py-8 xl:pb-24 xl:pt-14">
						<Body value={body} />
					</div>
				</article>
			</div>
		</div>
	);
}
