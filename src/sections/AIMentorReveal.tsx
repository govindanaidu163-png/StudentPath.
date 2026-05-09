"use client";

import { motion } from "framer-motion";

export default function AIMentorReveal() {

  return (

    <section className="
    relative
    min-h-screen
    flex items-center
    justify-center
    px-6 lg:px-20
    bg-black
    overflow-hidden
    ">

      {/* Massive Glow */}
      <div className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[900px]
      h-[900px]
      rounded-full
      bg-fuchsia-500/20
      blur-[220px]
      " />

      {/* Floating Particles */}
      {[...Array(30)].map((_, index) => (

        <motion.div
          key={index}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: 4 + index * 0.2,
          }}
          className="
          absolute
          w-2 h-2
          rounded-full
          bg-white
          "
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />

      ))}

      {/* Content */}
      <div className="
      relative z-10
      text-center
      max-w-5xl
      ">

        {/* AI Core */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="
          relative
          mx-auto
          w-[240px]
          h-[240px]
          rounded-full
          bg-gradient-to-br
          from-fuchsia-500
          via-purple-500
          to-cyan-500
          shadow-[0_0_120px_rgba(217,70,239,0.6)]
          "
        >

          <div className="
          absolute inset-6
          rounded-full
          border border-white/20
          " />

          <div className="
          absolute inset-12
          rounded-full
          border border-white/10
          " />

        </motion.div>

        {/* Label */}
        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          mt-20
          uppercase
          tracking-[0.5em]
          text-fuchsia-400
          text-sm
          "
        >
          AI Guidance System
        </motion.p>

        {/* Main Text */}
        <motion.h2
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="
          mt-10
          text-5xl
          md:text-7xl
          font-black
          leading-[1]
          "
        >
          Tell Me
          <br />

          <span className="
          bg-gradient-to-r
          from-fuchsia-400
          via-cyan-400
          to-purple-400
          bg-clip-text
          text-transparent
          ">
            Who You Want
            <br />
            To Become
          </span>

        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="
          mt-12
          text-2xl
          text-zinc-400
          leading-relaxed
          max-w-3xl
          mx-auto
          "
        >
          Personalized guidance,
          intelligent pathways,
          and AI-powered exploration
          designed around your future.
        </motion.p>

        {/* CTA */}
        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="
          mt-16
          px-12 py-6
          rounded-full
          bg-gradient-to-r
          from-fuchsia-600
          to-purple-600
          text-xl
          font-semibold
          shadow-[0_0_60px_rgba(217,70,239,0.5)]
          "
        >
          Begin Exploration
        </motion.button>

      </div>

    </section>
  );
}