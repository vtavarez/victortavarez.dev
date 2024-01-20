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
      <div className="col-span-12 text-lg font-medium leading-loose md:col-span-1">
        {"/" + number}
      </div>
      <div className="text-balance col-span-12 flex items-center justify-center text-left text-3xl font-medium md:col-span-11 lg:text-5xl">
        <p className="text-balanced mb-5 max-w-3xl pl-3 leading-snug md:pl-0">
          {children}
        </p>
      </div>
    </div>
  );
}
