"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Scene from "@/components/Scene";
import Earth from "@/components/Earth";

export default function Hero() {

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateY = useTransform(mouseX, [-300, 300], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;

    mouseX.set(clientX - window.innerWidth / 2);
    mouseY.set(clientY - window.innerHeight / 2);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center"
    >

      {/* 3D Scene */}
      <Scene />

      <Earth />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1]" />

      {/* Purple Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.18),transparent_55%)] z-[2]" />

      {/* Content */}
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
        className="relative z-10 text-center px-6 max-w-6xl"
      >

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-2
          px-5 py-2 rounded-full
          border border-white/10
          bg-white/5 backdrop-blur-md
          text-sm text-zinc-300 mb-10"
        >
          ✦ The Future of Intelligent Learning
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] text-white"
        >
          A universe Full of{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            knowledge
          </span>
          ,
          <br />
          and Intelligence —
          <br />
          in one conversation.
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-8 text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
        >
          Explore careers, discover opportunities, learn new skills,
          and build your future through an immersive AI-powered platform.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row
          items-center justify-center
          gap-5 mt-14"
        >

          {/* Primary Button */}
          <motion.button
            whileHover={{
              scale: 1.06,
              boxShadow: "0px 0px 50px rgba(168,85,247,0.7)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 rounded-full
            bg-gradient-to-r from-fuchsia-600 to-purple-600
            text-white font-semibold text-lg"
          >
            Start Exploring 🚀
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
            whileTap={{ scale: 0.96 }}
            className="px-10 py-4 rounded-full
            border border-white/10
            bg-white/5 backdrop-blur-md
            text-white font-medium text-lg"
          >
            View Platform
          </motion.button>

        </motion.div>

      </motion.div>

    </section>
  );
}