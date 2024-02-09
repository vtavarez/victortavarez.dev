'use client';
import { Heading } from '@/components/theme';

export function Hero() {
  return (
    <div className="fixed inset-0 -z-10 flex h-[100lvh] flex-col justify-end px-6 xl:px-8">
      <Heading
        className="pb-20 xl:pb-28"
        icon
      >
        Hey, welcome.
      </Heading>
    </div>
  );
}
