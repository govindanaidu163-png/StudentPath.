"use client";

import { motion } from "framer-motion";

export default function SpotlightBanner() {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[40px]
      border border-white/10
      bg-gradient-to-br
      from-[#0b1020]
      via-[#111827]
      to-[#1a1040]
      p-7 md:p-10
      "
    >

      {/* Background Glow */}
      <div className="absolute top-[-120px] right-[-100px] w-[320px] h-[320px] bg-fuchsia-500/20 blur-[140px]" />

      <div className="absolute bottom-[-120px] left-[-100px] w-[280px] h-[280px] bg-blue-500/20 blur-[140px]" />

      {/* Tiny Grid */}
      <div
        className="
        absolute inset-0 opacity-[0.06]
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-[size:40px_40px]
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">

        {/* Badge */}
        <div
          className="
          inline-flex items-center gap-2
          px-4 py-2
          rounded-full
          border border-fuchsia-500/20
          bg-fuchsia-500/10
          text-sm text-fuchsia-300
          mb-6
          "
        >
          ✦ Featured Career Path
        </div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
          text-5xl md:text-7xl
          font-black
          leading-tight
          tracking-tight
          "
        >
          Become an{" "}
          <span
            className="
            bg-gradient-to-r
            from-fuchsia-400
            to-purple-500
            bg-clip-text
            text-transparent
            "
          >
            AI Engineer
          </span>
        </motion.h1>

        {/* Description */}
        <p
          className="
          mt-6
          text-zinc-300
          text-lg
          leading-relaxed
          max-w-2xl
          "
        >
          Build intelligent systems, work with cutting-edge AI,
          shape future technologies, and unlock one of the
          highest-demand careers in the world.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 mt-8">

          <div className="px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
            <p className="text-zinc-400 text-sm">
              Average Salary
            </p>

            <h3 className="text-xl font-bold mt-1">
              ₹18L - ₹60L
            </h3>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
            <p className="text-zinc-400 text-sm">
              Demand Growth
            </p>

            <h3 className="text-xl font-bold mt-1">
              +42%
            </h3>
          </div>

          <div className="px-5 py-3 rounded-2xl bg-white/[0.05] border border-white/10">
            <p className="text-zinc-400 text-sm">
              Skill Level
            </p>

            <h3 className="text-xl font-bold mt-1">
              Advanced
            </h3>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-10">

          <button
            className="
            px-8 py-4 rounded-full
            bg-gradient-to-r
            from-fuchsia-600
            to-purple-600
            font-semibold
            hover:scale-105
            transition
            "
          >
            Explore Career
          </button>

          <button
            className="
            px-8 py-4 rounded-full
            border border-white/10
            bg-white/[0.05]
            hover:bg-white/[0.08]
            transition
            "
          >
            View Roadmap
          </button>

        </div>

      </div>
    </section>
  );
}