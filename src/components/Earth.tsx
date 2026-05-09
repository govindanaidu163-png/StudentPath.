"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import { TextureLoader } from "three";
import { useLoader } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Globe() {
  const earthRef = useRef<THREE.Mesh>(null!);

  const texture = useLoader(TextureLoader, "/textures/earth.jpg");

  useFrame(() => {
    earthRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={earthRef} args={[2, 64, 64]}>
      <meshStandardMaterial map={texture} />
    </Sphere>
  );
}

export default function Earth() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 6] }}>
        
        {/* Lighting */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 3, 5]}
          intensity={2}
          color="#8b5cf6"
        />

        {/* Earth */}
        <Globe />

      </Canvas>
    </div>
  );
}