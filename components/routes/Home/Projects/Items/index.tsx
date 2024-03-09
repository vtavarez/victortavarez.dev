'use client';
import { useState } from 'react';
import { Project, ValueProp } from '@/components/theme';
import type { ProjectType } from '@/lib/types';

export function Items({ items }: { items: ProjectType[] }) {
	const [animationFinished, setAnimationFinished] = useState(false);
	return (
		<div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
			<ValueProp
				className="xl:pl-4"
				onAnimationFinished={() => setAnimationFinished(true)}
			>
				Here are a few of my most recent side projects.
			</ValueProp>
			<div className="flex min-h-[492px] w-full flex-row flex-wrap justify-between gap-6 pt-8 xl:pt-12">
				{animationFinished &&
					items.map((project: ProjectType, i: number) => (
						<Project
							key={i}
							number={i + 1}
							{...project}
						/>
					))}
			</div>
		</div>
	);
}
