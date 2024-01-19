import React from "react";
import { cn } from "@/lib/utils";

export function ValueProp({
  number,
  children,
  className,
  ...props
}: {
  number: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("grid grid-cols-12 gap-4", className)}
      {...props}
    >
      <div className="col-span-4 text-lg font-medium leading-loose">
        /{number}
      </div>
      <div className="text-balance col-span-8 text-left text-3xl font-medium lg:text-5xl xl:mr-auto">
        {children}
      </div>
    </div>
  );
}
