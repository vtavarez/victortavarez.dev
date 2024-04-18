'use client';
import { useState } from 'react';
import { ScrollingMouse } from '@/components/ui';
import { ValueProp } from '@/components/theme';
export function Blurb() {
	const [showAnimation, setShowAnimation] = useState(false);
	return (
		<div className="flex h-horizontal-content flex-col justify-center pt-14 lg:pt-20">
			<ValueProp
				className="min-h-20"
				onAnimationFinished={() => setShowAnimation(true)}
			>
				Thanks for visiting my corner of the web. Here you will find a selection
				of my writing, and work.
			</ValueProp>
			<div className="h-10">
				{showAnimation && <ScrollingMouse className="mx-auto" />}
			</div>
		</div>
	);
}
