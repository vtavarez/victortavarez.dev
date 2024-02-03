"use client";
import Image from "next/image";
import { Body } from "./Body";
import { Author } from "@/components/ui";
import { Heading } from "@/components/theme";
import { formatDate } from "@/lib/utils";
import { PostType } from "@/lib/types";

export function PostPage({
  title,
  media,
  excerpt,
  publishedAt,
  author,
  body = [],
}: PostType) {
  return (
    <div className="relative pt-[100lvh]">
      <Heading>{title}</Heading>
      <div className="min-h-[82lvh] bg-background">
        <div className="relative aspect-video w-full">
          <Image
            className="absolute aspect-video h-full w-full object-cover"
            src={media}
            width={1400}
            height={1400}
            alt={excerpt}
          />
        </div>
        <h2>{excerpt}</h2>
        <div className="grid w-fit grid-cols-2 gap-2">
          <p className="flex items-center leading-none">
            {formatDate(publishedAt)}
          </p>
          <Author {...author} />
        </div>
        <article className="text-base">
          <Body value={body} />
        </article>
      </div>
    </div>
  );
}
