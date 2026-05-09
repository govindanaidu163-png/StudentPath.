"use client";

import { Canvas } from "@react-three/fiber";
import {
  Stars,
  Float,
  Html,
} from "@react-three/drei";


function FutureNode({
  title,
  position,
}: {
  title: string;
  position: [number, number, number];
}) {
  return (
    <Float
      speed={1.2}
      rotationIntensity={0.2}
      floatIntensity={2}
    >
      <group position={position}>

        {/* GLOW SPHERE */}

        <mesh>
          <sphereGeometry args={[0.7, 64, 64]} />

          <meshStandardMaterial
            color="#d946ef"
            emissive="#d946ef"
            emissiveIntensity={3}
            roughness={0.2}
          />
        </mesh>

        {/* TEXT */}

        <Html
          distanceFactor={10}
          position={[0, -1.4, 0]}
          center
        >
          <div
            className="
            text-white
            text-sm
            font-semibold
            whitespace-nowrap
            tracking-wide
            "
          >
            {title}
          </div>
        </Html>

      </group>
    </Float>
  );
}
function FloatingOrb({
  position,
  scale,
}: {
  position: [number, number, number];
  scale: number;
}) {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.4}
      floatIntensity={1.5}
    >
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />

        <meshStandardMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={2}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 overflow-y-hidden h-[850px]">
      <Canvas camera={{ position: [0, 0, 12], fov: 50 }}>

        {/* LIGHTING */}

        <ambientLight intensity={0.4} />

        <pointLight
          position={[4,1.3,-1]}
          intensity={3}
          color="#d946ef"
        />

        <pointLight
          position={[-4,-2,-2]}
          intensity={1}
          color="#22d3ee"
        />

        {/* STARS */}

        <Stars
          radius={120}
          depth={60}
          count={6000}
          factor={7}
          saturation={0}
          fade
          speed={0.6}
        />

        {/* FLOATING ORBS */}

        

              <FloatingOrb
                   position={[-4, 2, -2]}
                    scale={1.2}
                  />

                    <FloatingOrb
                    position={[3, -1, -4]}
                       scale={0.8}
                    />

                    <FloatingOrb
                    position={[5, 3, -6]}
                       scale={1.5   }
                    />

                    {/* FUTURE NODES */}

                    <FutureNode
                    title="AI Engineer"
                        position={[-3, 1, -2]}
                        />

                    <FutureNode 
                    title="Cyber Security"
                    position={[2, -1, -3]}
                    />

                    <FutureNode
                     title="Space Systems"
                    position={[4, 2, -5]}
                        />

                    <FutureNode
                     title="Robotics"
                    position={[-5, -2, -4]}
                    />




      </Canvas>
    </div>
  );
}