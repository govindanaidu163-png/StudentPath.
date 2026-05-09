"use client";

import {
  Canvas,
  useFrame,
} from "@react-three/fiber";

import {
  Stars,
  Float,
  Html,
} from "@react-three/drei";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

function CameraMotion() {
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    state.camera.position.x =
      Math.sin(time * 0.08) * 1.2;

    state.camera.position.y =
      Math.cos(time * 0.06) * 0.6;

    state.camera.position.z = 12;

    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function FutureNode({
  title,
  position,
  color,
  opacity,
}: {
  title: string;
  position: [number, number, number];
  color: string;
  opacity: any;
}) {
  return (
    <Float
      speed={1.4}
      rotationIntensity={0.25}
      floatIntensity={2}
    >
      <group
  position={position}
  visible={opacity.get() > 0.5}
>
        {/* GLOW */}

        <mesh>
          <sphereGeometry args={[0.7, 64, 64]} />

          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={3}
            roughness={0.2}
          />
        </mesh>

        {/* OUTER RING */}

        <mesh rotation={[1.4, 0.2, 0]}>
          <torusGeometry args={[1.1, 0.02, 16, 100]} />

          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={2}
          />
        </mesh>

        {/* LABEL */}

        <Html
          center
          distanceFactor={10}
          position={[0, -1.5, 0]}
        >
          <div
            className="
            text-white
            text-sm
            md:text-base
            font-semibold
            whitespace-nowrap
            tracking-wide
            px-4 py-1
            rounded-full
            border border-white/10
            bg-black/30
            backdrop-blur-md
            "
          >
            {title}
          </div>
        </Html>
      </group>
    </Float>
  );
}

function CosmicFog() {
  return (
    <>
      <mesh position={[-8, 2, -12]}>
        <sphereGeometry args={[4, 32, 32]} />

        <meshStandardMaterial
          color="#d946ef"
          emissive="#d946ef"
          emissiveIntensity={0.5}
          transparent
          opacity={0.15}
        />
      </mesh>

      <mesh position={[8, -2, -15]}>
        <sphereGeometry args={[5, 32, 32]} />

        <meshStandardMaterial
          color="#22d3ee"
          emissive="#22d3ee"
          emissiveIntensity={0.5}
          transparent
          opacity={0.12}
        />
      </mesh>
    </>
  );
}

export default function HiddenFutures() {
    const { scrollYProgress } = useScroll();

const firstNode = useTransform(
  scrollYProgress,
  [0.08, 0.18],
  [0, 1]
);

const secondNode = useTransform(
  scrollYProgress,
  [0.22, 0.32],
  [0, 1]
);

const thirdNode = useTransform(
  scrollYProgress,
  [0.36, 0.46],
  [0, 1]
);

const fourthNode = useTransform(
  scrollYProgress,
  [0.5, 0.6],
  [0, 1]
);

const fifthNode = useTransform(
  scrollYProgress,
  [0.54, 0.64],
  [0, 1]
);

const sixthNode = useTransform(
  scrollYProgress,
  [0.58, 0.68],
  [0, 1]
);

const seventhNode = useTransform(
  scrollYProgress,
  [0.62, 0.72],
  [0, 1]
);  
  return (
    <section
      className="
      relative
      h-[400vh]
      overflow-hidden
      bg-black
      "
    >
      {/* BACKGROUND */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-black
        via-[#05010a]
        to-black
        "
      />

      {/* STICKY UNIVERSE */}

      <div
        className="
        sticky
        top-0
        h-screen
        overflow-hidden
        "
      >
        {/* TOP TEXT */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
          absolute
          top-16
          left-1/2
          -translate-x-1/2
          z-30
          text-center
          px-6
          "
        >
          <p
            className="
            uppercase
            tracking-[0.5em]
            text-fuchsia-400
            text-xs
            mb-5
            "
          >
            Hidden Futures
          </p>

          <h2
            className="
            text-4xl
            md:text-6xl
            font-black
            tracking-[-0.05em]
            leading-[0.9]
            text-white
            "
          >
            The Future Is
            <br />

            Bigger Than
            <br />

            <span
              className="
              bg-gradient-to-r
              from-fuchsia-400
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
              "
            >
              You Imagine
            </span>
          </h2>
        </motion.div>

        {/* 3D SCENE */}

        <div className="absolute inset-0">
          <Canvas
            camera={{
              position: [0, 0, 12],
              fov: 50,
            }}
          >
            {/* CAMERA */}

            <CameraMotion />

            {/* LIGHTING */}

            <ambientLight intensity={0.35} />

            <pointLight
              position={[10, 10, 10]}
              intensity={4}
              color="#d946ef"
            />

            <pointLight
              position={[-10, -10, -10]}
              intensity={3}
              color="#22d3ee"
            />

            {/* STARS */}

            <Stars
              radius={120}
              depth={60}
              count={7000}
              factor={7}
              saturation={0}
              fade
              speed={0.5}
            />

            {/* FOG */}

            <CosmicFog />

            {/* FUTURE NODES */}

            <FutureNode
              title="AI Engineer"
              position={[-4, 2, -2]}
              color="#d946ef"
              opacity={firstNode}
            />

            <FutureNode
              title="Cyber Security"
              position={[3, -1, -4]}
              color="#22d3ee"
              opacity={secondNode}
            />

            <FutureNode
              title="Space Systems"
              position={[5, 3, -6]}
              color="#a855f7"
              opacity={thirdNode}
            />

            <FutureNode
              title="Robotics"
              position={[-5, -2, -5]}
              color="#ec4899"
              opacity={fourthNode}
            />

            <FutureNode
              title="Quantum Computing"
              position={[0, 4, -8]}
              color="#3b82f6"
              opacity={fifthNode}
            />

            <FutureNode
              title="Neurotech"
              position={[7, 0, -10]}
              color="#8b5cf6"
              opacity={sixthNode}
            />

            <FutureNode
              title="XR Developer"
              position={[-8, 1, -9]}
              color="#c084fc"
              opacity={seventhNode}
            />
          </Canvas>
        </div>

        {/* BOTTOM TEXT */}

        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="
          absolute
          bottom-12
          left-1/2
          -translate-x-1/2
          z-20
          "
        >
          <p
            className="
            uppercase
            tracking-[0.45em]
            text-zinc-400
            text-xs
            "
          >
            Scroll To Explore Hidden Futures
          </p>
        </motion.div>
      </div>
    </section>
  );
}