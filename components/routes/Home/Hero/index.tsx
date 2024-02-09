'use client';
import Title from './Title';
import Summery from './Summery';
import { ContactButton } from '@/components/ui';

export function Hero() {
  return (
    <div className="col-span-12 mb-12 mt-8 flex flex-col gap-4 xl:mb-32 xl:mt-16 xl:gap-6 2xl:col-span-6">
      <Title />
      <Summery />
      <ContactButton>Get in touch</ContactButton>
    </div>
  );
}
