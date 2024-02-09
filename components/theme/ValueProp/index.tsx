'use client';
import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/lib/hooks';
import { Typewriter } from '@/components/ui';
import { cn } from '@/lib/utils';

export function ValueProp({
  number,
  children,
  className,
  ...props
}: {
  number: string;
  children: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const container = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useIntersectionObserver(() => setIsInView(prev => !prev), container, {
    amount: 0.8,
  });

  return (
    <div
      ref={container}
      className={cn('grid grid-cols-12 gap-4', className)}
    >
      <div className="col-span-12 text-base font-medium leading-loose md:col-span-1">
        {'/ ' + number}
      </div>
      <div className="col-span-12 flex items-start justify-center text-left text-3xl font-medium md:col-span-11 md:items-center lg:text-[2rem]">
        {isInView && (
          <Typewriter>
            <p
              className="mb-5 max-w-3xl pl-4 leading-snug md:pl-0"
              aria-description={children}
            >
              {children}
            </p>
          </Typewriter>
        )}
      </div>
    </div>
  );
}
