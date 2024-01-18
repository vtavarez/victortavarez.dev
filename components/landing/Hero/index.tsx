"use client";
import Title from "./Title";
import Summery from "./Summery";
import { ContactButton } from "@/components/ui";

export function Hero() {
  return (
    <div className="my-6 flex flex-col gap-4 xl:my-12">
      <Title />
      <Summery />
      <ContactButton>Get in touch</ContactButton>
    </div>
  );
}
