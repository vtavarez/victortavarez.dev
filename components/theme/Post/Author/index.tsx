import { cn } from "@/lib/utils";
import type { AuthorType } from "@/lib/types";
import Image from "next/image";

export function Author({
  name,
  image,
  className,
}: AuthorType & { className?: string }) {
  return (
    <div className={cn("flex flex-row items-end gap-4", className)}>
      <p className="ml-auto text-end text-sm">{name}</p>
      <Image
        className="rounded-full"
        src={image}
        alt="author"
        width={40}
        height={40}
      />
    </div>
  );
}
