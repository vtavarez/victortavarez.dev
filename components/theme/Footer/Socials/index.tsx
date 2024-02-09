import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import socials from '@/lib/data/socials.json';

export function Socials() {
  const today = new Date();
  return (
    <div className="flex h-fit w-full flex-col justify-between px-6 pb-4 text-base font-medium md:flex-row xl:px-16">
      <div>Victor.</div>
      <div>{formatDate(today)}</div>
      <div>Socials</div>
      <div>
        <div>
          <ul className="xl:pr-4">
            {socials.map(({ id, title, href }) => (
              <li key={id}>
                <Link href={href}>{title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
