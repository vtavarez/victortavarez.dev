import { createElement } from "react";
import { cn } from "@/lib/utils";

export default function Items({ nodes }: { nodes: React.ReactElement[] }) {
  return (
    <div className="inline-block">
      <div className="inline-flex w-max transform-gpu animate-marquee text-4xl font-semibold will-change-transform group-hover:[animation-play-state:paused] xl:text-[3.5rem]">
        {nodes.map((node, idx) =>
          createElement(
            node.type,
            {
              ...node.props,
              key: `marquee-item-${idx}`,
              className: cn(node.props.className, "mx-2 inline-block"),
            },
            node.props.children,
          ),
        )}
      </div>
    </div>
  );
}
