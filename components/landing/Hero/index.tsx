"use client";
import Title from "./Title";
import Summery from "./Summery";
import { ContactButton } from "@/components/ui";
import { ThreeScene } from "@/components/theme";

export function Hero() {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 my-6 flex flex-col gap-4 xl:col-span-6 xl:my-12">
        <Title />
        <Summery />
        <ContactButton>Get in touch</ContactButton>
      </div>
      <div className="hidden xl:col-span-6 xl:block">
        <ThreeScene />
      </div>
    </div>
  );
}
