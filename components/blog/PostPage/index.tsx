import { Body } from "./Body";
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
    <div>
      <h1>{title}</h1>
      <h2>{excerpt}</h2>
      <p>{formatDate(publishedAt)}</p>
      <article className="text-base">
        <Body value={body} />
      </article>
    </div>
  );
}
