import { ContentItem } from '@/components/ui';
import { ValueProp, EyebrowText } from '@/components/theme';

export function Intro() {
	return (
		<ContentItem>
			<div className="absolute pt-20 text-base font-medium leading-loose">
				/ 001
			</div>
			<div className="flex h-horizontal-content flex-col justify-center pt-20">
				<ValueProp className="min-h-22">
					Thanks for visiting my corner of the web. Here you will find a
					selection of my writing, and work.
				</ValueProp>
			</div>
			<EyebrowText
				cta="Selected posts"
				icon="arrow-right"
			>
				Discover
			</EyebrowText>
		</ContentItem>
	);
}
