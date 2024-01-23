"use client";
import { ThreeCanvas } from "@/components/ui";
import { Commodore64 } from "./Models";

export function ThreeScene() {
  return (
    <ThreeCanvas>
      <Commodore64 />
    </ThreeCanvas>
  );
}
