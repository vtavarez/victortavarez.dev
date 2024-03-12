import { Socials } from './Socials';
import { Links } from './Links';
import { Marquee } from '@/components/ui';

export function Footer() {
	return (
		<footer className="absolute bottom-0 -mx-6 flex h-60 w-full flex-col justify-between overflow-x-hidden bg-background pb-4 pt-8 text-primary xl:-mx-8 xl:pb-8">
			<Socials />
			<Links />
		</footer>
	);
}
