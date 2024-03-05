import { Body } from './Body';
import { Heading } from '@/components/theme';
import { formatDate } from '@/lib/utils';
import { type TypedObject } from 'sanity';

type ContentType = {
	title: string;
	timeToRead?: number;
	publishedAt: string;
	body: TypedObject[];
};

export function Content({ title, timeToRead, publishedAt, body }: ContentType) {
	return (
		<div className="relative pt-[100lvh]">
			<Heading
				className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-12 xl:px-8 xl:pb-20"
				icon="arrow-down"
			>
				{title}
			</Heading>
			<div className="min-h-[100lvh] bg-background">
				<article className="mx-auto px-2 text-sm sm:max-w-[85%] xl:px-0 xl:text-base 2xl:max-w-[65%]">
					<div className="mx-auto flex w-fit items-center gap-8">
						<span>{formatDate(publishedAt)}</span>
						{timeToRead ? <span>{timeToRead + ' min read'}</span> : null}
					</div>
					<div className="py-8 xl:pb-24 xl:pt-14">
						<Body value={body} />
					</div>
				</article>
			</div>
		</div>
	);
}
