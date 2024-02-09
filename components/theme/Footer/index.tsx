import { Socials } from './Socials';
import { Links } from './Links';
import { Marquee } from '@/components/ui';

export function Footer() {
  return (
    <footer className="absolute bottom-0 -mx-6 flex h-60 w-full flex-col justify-between overflow-x-hidden bg-background py-8 text-primary xl:-mx-8">
      <Socials />
      {/* <div className="flex flex-col justify-center py-2">
        <Marquee>
          {Array.from({ length: 3 }).map((_, i) => (
            <span key={i}>
              {"let's deliver a seamless and delightful user journey."}
            </span>
          ))}
        </Marquee>
      </div> */}
      <Links />
    </footer>
  );
}
