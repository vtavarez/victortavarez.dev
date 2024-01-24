"use client";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

export function ThreeCanvas({
  children,
  ...props
}: {
  children: React.ReactNode;
}) {
  return (
    <Canvas {...props}>
      <Suspense fallback={null}>
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
        <OrbitControls
          enableDamping
          enableRotate
          enableZoom={false}
        />
        {children}
      </Suspense>
    </Canvas>
  );
}
