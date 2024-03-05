'use client';
import { useState } from 'react';
import { Project, ValueProp } from '@/components/theme';
import type { Project as ProjectType } from '@/lib/types';

export function Items({ items }: { items: ProjectType[] }) {
	const [animationFinished, setAnimationFinished] = useState(false);
	return (
		<div className="mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
			<ValueProp
				className="xl:pl-4"
				onAnimationFinished={() => setAnimationFinished(true)}
			>
				Here are a few of my most recent projects.
			</ValueProp>
			<div className="inline-flex min-h-[492px] w-full flex-wrap justify-between gap-6 xl:pt-12">
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