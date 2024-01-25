import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";

export function Commodore64(props: MeshProps) {
  const { scene } = useGLTF("/3d/commodore64.glb");
  return (
    <primitive
      position={[0, -20, 0]}
      rotation={[0.5, Math.PI, 0]}
      object={scene}
      {...props}
    />
  );
}
