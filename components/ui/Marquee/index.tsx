"use client";
import Items from "./Items";
import marquee_items from "@/lib/data/marquee_items.json";

export function Marquee(): React.ReactNode {
  return (
    <div className="group -mx-6 overflow-hidden whitespace-nowrap bg-primary py-6 text-background xl:-mx-16">
      {Array.from({ length: 2 }).map((_, index) => (
        <Items
          key={index}
          items={marquee_items}
        />
      ))}
    </div>
  );
}
