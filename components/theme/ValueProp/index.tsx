"use client";
import React, { useRef } from "react";
import { Typewriter } from "@/components/ui";
import { cn } from "@/lib/utils";

export function ValueProp({
  number,
  children,
  className,
  ...props
}: {
  number: string;
  children: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const container = useRef(null);

  return (
    <div
      ref={container}
      className={cn("grid max-h-full grid-cols-12 gap-4", className)}
      {...props}
    >
      <div className="col-span-12 text-lg font-medium leading-loose md:col-span-1">
        {"/" + number}
      </div>
      <div className="text-balance col-span-12 flex items-start justify-center text-left text-3xl font-medium md:col-span-11 md:items-center lg:text-5xl">
        <p className="text-balance mb-5 max-w-3xl pl-4 leading-snug transition-all duration-200 ease-linear md:pl-0">
          <Typewriter
            container={container}
            once={true}
          >
            {children}
          </Typewriter>
        </p>
      </div>
    </div>
  );
}
