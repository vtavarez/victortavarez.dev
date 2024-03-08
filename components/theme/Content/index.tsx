import { Body } from './Body';
import { Heading } from '@/components/theme';
import { formatDate } from '@/lib/utils';
import { type TypedObject } from 'sanity';

type Content = {
	title: string;
	categories: string[];
	excerpt: string;
	body: TypedObject[];
};

type CaseStudy = {
	timeToRead: never;
	publishedAt: never;
	kickoffDate: string;
	duration: string;
} & Content;

type BlogPost = {
	kickoffDate: never;
	duration: never;
	timeToRead: number;
	publishedAt: string;
} & Content;

export function Content({
	title,
	timeToRead,
	duration,
	categories,
	publishedAt,
	kickoffDate,
	excerpt,
	body,
}: BlogPost | CaseStudy) {
	return (
		<section className="relative pt-[100lvh]">
			<Heading
				className="fixed inset-0 -z-10 flex h-[100lvh] items-end overflow-hidden px-6 pb-12 xl:px-8 xl:pb-20"
				icon="arrow-down"
			>
				{title}
			</Heading>
			<div className="min-h-[100lvh] bg-background">
				<article className="mx-auto px-2 text-sm sm:max-w-[85%] xl:px-0 xl:text-base 2xl:max-w-[65%]">
					<div className="mx-auto flex w-fit flex-col items-center gap-1 text-sm lg:text-base">
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
											className="inline-block rounded-sm bg-gray-800/10 px-[3px] py-[2px] text-center text-xs leading-none text-primary dark:bg-gray-200/15 lg:text-sm"
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
								<div className="mb-3 flex flex-row gap-4">
									<span>{formatDate(publishedAt)}</span>
									<span>{timeToRead + ' min read'}</span>
								</div>
								<div className="flex flex-row justify-center gap-2">
									{categories.map((category, idx) => (
										<span
											key={idx}
											className="inline-block rounded-sm bg-gray-800/10 px-[3px] py-[2px] text-center text-xs leading-none text-primary dark:bg-gray-200/15 lg:text-sm"
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
