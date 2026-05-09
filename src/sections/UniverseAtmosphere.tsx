"use client";

import { motion } from "framer-motion";

export default function UniverseAtmosphere() {

  return (

    <div className="
    fixed
    inset-0
    overflow-hidden
    pointer-events-none
    z-0
    ">

      {/* Floating Orbs */}
      {[...Array(12)].map((_, index) => (

        <motion.div
          key={index}
          animate={{
            y: [0, -60, 0],
            x: [0, 30, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            repeat: Infinity,
            duration: 10 + index * 2,
          }}
          className="
          absolute
          rounded-full
          blur-[120px]
          "
          style={{
            width: `${200 + index * 30}px`,
            height: `${200 + index * 30}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              index % 2 === 0
                ? "rgba(217,70,239,0.15)"
                : "rgba(34,211,238,0.12)",
          }}
        />

      ))}

      {/* Tiny Stars */}
      {[...Array(80)].map((_, index) => (

        <motion.div
          key={index}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.4, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 4,
          }}
          className="
          absolute
          w-[2px]
          h-[2px]
          rounded-full
          bg-white
          "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

    </div>
  );
}