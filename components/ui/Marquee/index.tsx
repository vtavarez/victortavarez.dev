import { Children } from "react";
import Items from "./Items";

export function Marquee({ children }: { children: React.ReactNode }) {
  const nodes = Children.toArray(children) as React.ReactElement[];

  return (
    <div className="marquee-gradiant-left marquee-gradiant-right group relative -mx-6 overflow-hidden whitespace-nowrap bg-primary py-4 text-background xl:-mx-8 xl:py-10">
      {Array.from({ length: 2 }).map((_, index) => (
        <Items
          key={index}
          nodes={nodes}
        />
      ))}
    </div>
  );
}
