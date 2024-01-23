import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";

export function Commodore64(props: MeshProps) {
  const { scene } = useGLTF("/3d/commodore64.glb");
  useFrame(() => {
    scene.rotation.y += 0.002;
  });
  return (
    <primitive
      position={[0, -20, 0]}
      rotation={[0, Math.PI, 0]}
      object={scene}
      {...props}
    />
  );
}
