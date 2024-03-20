import { Body } from './Body';
import { Heading } from '@/components/theme';
import { formatDate } from '@/lib/utils';
import { type TypedObject } from 'sanity';

type Case = {
	kickoffDate: string;
	duration: string;
	publishedAt?: never;
	timeToRead?: never;
};

type Post = {
	timeToRead: number;
	publishedAt: string;
	kickoffDate?: never;
	duration?: never;
};

type Content = {
	title: string;
	categories: string[];
	excerpt: string;
	body: TypedObject[];
} & (Case | Post);

export function Content({
	title,
	kickoffDate,
	duration,
	categories,
	excerpt,
	publishedAt,
	timeToRead,
	body,
}: Content) {
	return (
		<section className="relative pt-[100lvh]">
			<Heading
				className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-6 xl:px-8 xl:pb-12"
				icon="arrow-down"
			>
				{title}
			</Heading>
			<div className="min-h-[100lvh] bg-gradient-to-t from-background from-95% to-transparent">
				<article className="mx-auto px-2 text-sm sm:max-w-[85%] xl:px-0 2xl:max-w-[65%]">
					<div className="mx-auto flex w-fit flex-col gap-1">
						{kickoffDate && (
							<>
								<div>{formatDate(kickoffDate)}</div>
								<div>
									Project duration:{' '}
									<span className="text-xs lg:text-sm">{duration}</span>
								</div>
								<div>
									Scope of work:{' '}
									{categories.map((category, idx) => (
										<span
											key={idx}
											className="inline-block rounded-sm bg-primary px-[5px] py-[3px] text-center text-xs leading-none text-background"
										>
											{category}
										</span>
									))}
								</div>
								<p className="mt-6">{excerpt}</p>
							</>
						)}
						{publishedAt && (
							<>
								<div className="mx-auto mb-3 flex flex-row gap-4">
									<span>{formatDate(publishedAt)}</span>
									<span>{timeToRead + ' min read'}</span>
								</div>
								<div className="flex flex-row justify-center gap-2">
									{categories.map((category, idx) => (
										<span
											key={idx}
											className="inline-block rounded-sm bg-primary px-[5px] py-[3px] text-center text-xs leading-none text-background"
										>
											{category}
										</span>
									))}
								</div>
								<p className="mt-6">{excerpt}</p>
							</>
						)}
					</div>
					<div className="py-8 xl:pb-24 xl:pt-14">
						<Body value={body} />
					</div>
				</article>
			</div>
		</section>
	);
}
