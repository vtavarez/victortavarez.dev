'use client';
import { Heading } from '@/components/theme';

export function Hero() {
  return (
    <div className="flex h-[100lvh] flex-col justify-end">
      <Heading
        className="pb-44"
        icon
      >
        Hey, welcome.
      </Heading>
    </div>
  );
}
