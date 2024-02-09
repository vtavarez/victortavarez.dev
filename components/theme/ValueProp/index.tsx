'use client';
import React, { useRef, useState } from 'react';
import { useIntersectionObserver } from '@/lib/hooks';
import { Typewriter } from '@/components/ui';
import { cn } from '@/lib/utils';

export function ValueProp({
  number,
  children,
  className,
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
      <div className="col-span-12 pt-28 text-base font-medium leading-loose lg:col-span-1 lg:pt-0">
        {'/ ' + number}
      </div>
      <div className="col-span-12 flex flex-col items-center justify-start text-responsive-heading font-medium lg:col-span-11 lg:justify-center">
        {isInView && (
          <Typewriter>
            <p
              className="max-w-3xl pl-2 leading-snug md:pl-6 lg:p-0"
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
