import { cn } from "@/lib/utils";
import type { AuthorType } from "@/lib/types";
import Image from "next/image";

export function Author({
  name,
  image,
  className,
}: AuthorType & { className?: string }) {
  return (
    <div className={cn("flex items-end gap-3 pb-2", className)}>
      <p className="text-end text-sm md:text-base">{name}</p>
      <Image
        className="rounded-full grayscale filter"
        src={image}
        alt="author"
        width={30}
        height={30}
      />
    </div>
  );
}
