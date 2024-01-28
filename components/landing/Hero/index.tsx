"use client";
import Title from "./Title";
import Summery from "./Summery";
import { ContactButton } from "@/components/ui";

export function Hero() {
  return (
    <div className="col-span-12 my-6 flex flex-col gap-2 xl:mb-24 xl:mt-12 2xl:col-span-6">
      <Title />
      <Summery />
      <ContactButton>Get in touch</ContactButton>
    </div>
  );
}
