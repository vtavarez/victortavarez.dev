"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, PerspectiveCamera } from "@react-three/drei";
import { BouncingLoader } from "@/components/ui";

export function ThreeCanvas({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<BouncingLoader />}>
      <Canvas {...props}>
        <directionalLight
          position={[0, 20, 10]}
          intensity={0.8 * Math.PI}
        />
        <directionalLight
          position={[30, 20, 0]}
          intensity={0.4 * Math.PI}
        />
        <directionalLight
          position={[-30, 20, 0]}
          intensity={0.4 * Math.PI}
        />
        <directionalLight
          position={[0, 20, -10]}
          intensity={0.8 * Math.PI}
        />
        <ambientLight intensity={0.3} />
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 160]}
        />
        <PresentationControls
          enabled={true}
          global={false}
          cursor={true}
          polar={[-Infinity, Infinity]}
        >
          {children}
        </PresentationControls>
      </Canvas>
    </Suspense>
  );
}
