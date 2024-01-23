"use client";
import Model from "./Model";
import { Canvas } from "@react-three/fiber";

export function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Model position={[0, 0, 0]} />
    </Canvas>
  );
}
