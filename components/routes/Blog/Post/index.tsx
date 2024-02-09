import Image from 'next/image';
import { Body } from './Body';
import { Heading } from '@/components/theme';
import { formatDate } from '@/lib/utils';
import { PostType } from '@/lib/types';

export function Post({
  title,
  mainImage: { url, alt },
  timeToRead,
  excerpt,
  publishedAt,
  body = [],
}: PostType) {
  return (
    <div className="relative pt-[100lvh]">
      <Heading
        className="h-100lvh fixed inset-0 -z-10 flex items-end overflow-hidden px-6 pb-28 xl:px-8"
        icon
      >
        {title}
      </Heading>
      <div className="-mx-6 min-h-[100lvh] bg-background xl:-mx-8">
        <div className="relative aspect-square w-full xl:aspect-video">
          <Image
            className="absolute aspect-video h-full w-full object-cover"
            src={url}
            width={1400}
            height={1400}
            alt={alt}
            priority
          />
        </div>
        <article className="mx-auto px-6 text-sm xl:max-w-[65%] xl:px-0 xl:text-base">
          <h2 className="mx-auto my-4 w-fit text-pretty xl:my-2">{excerpt}</h2>
          <div className="mx-auto flex w-fit items-center gap-8">
            <div className="grid grid-cols-2 gap-4 leading-none">
              <span>{formatDate(publishedAt)}</span>
              <span>{timeToRead + ' min read'}</span>
            </div>
          </div>
          <div className="py-8 xl:pb-24 xl:pt-14">
            <Body value={body} />
          </div>
        </article>
      </div>
    </div>
  );
}
