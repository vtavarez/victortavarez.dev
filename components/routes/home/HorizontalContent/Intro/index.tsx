import { Blurb } from './Blurb';
import { ContentItem } from '@/components/ui';
import { EyebrowText } from '@/components/theme';

export function Intro() {
	return (
		<ContentItem>
			<div className="absolute pt-14 text-sm font-medium leading-loose lg:pt-20 lg:text-base">
				/ 001
			</div>
			<Blurb />
			<EyebrowText
				cta="Selected posts"
				icon="arrow-right"
			>
				Discover
			</EyebrowText>
		</ContentItem>
	);
}
