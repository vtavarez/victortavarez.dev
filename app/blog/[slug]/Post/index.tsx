"use client";
import Image from "next/image";
import { Body } from "./Body";
import { Author } from "@/components/ui";
import { Heading } from "@/components/theme";
import { formatDate } from "@/lib/utils";
import { PostType } from "@/lib/types";

export function PostPage({
  title,
  mainImage: { url, alt },
  timeToRead,
  excerpt,
  publishedAt,
  author,
  body = [],
}: PostType) {
  return (
    <div className="relative pt-[100lvh]">
      <Heading>{title}</Heading>
      <div className="-mx-6 min-h-[85lvh] bg-background xl:-mx-8">
        <div className="relative aspect-video w-full">
          <Image
            className="absolute aspect-video h-full w-full object-cover"
            src={url}
            width={1400}
            height={1400}
            alt={alt}
            priority
          />
        </div>
        <article className="mx-auto text-base xl:max-w-[70%]">
          <h2 className="mx-auto my-4 w-fit">{excerpt}</h2>
          <div className="mx-auto flex w-fit items-center gap-8">
            <Author {...author} />
            <div className="grid grid-cols-2 gap-4 leading-none">
              <span>{formatDate(publishedAt)}</span>
              <span>{timeToRead + " min read"}</span>
            </div>
          </div>
          <div className="py-12">
            <Body value={body} />
          </div>
        </article>
      </div>
    </div>
  );
}
