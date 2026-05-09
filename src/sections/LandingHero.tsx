"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingHero() {

  const { scrollY } = useScroll();

  const textY = useTransform(
    scrollY,
    [0, 1000],
    [0, 260]
  );

  const glowY = useTransform(
    scrollY,
    [0, 1000],
    [0, -180]
  );

  return (

    <section className="
        relative
        min-h-[120vh]
        overflow-hidden
        flex
        items-start
        justify-start
        pt-24
">

      {/* VIDEO BACKGROUND */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
        absolute inset-0
        w-full h-full
        object-cover
        "
      >

        <source
          src="/videos/landing-hero.mp4"
          type="video/mp4"
        />

      </video>


      {/* DARK OVERLAY */}

      <div
        className="
        absolute inset-0
        bg-black/65
        "
      />


      {/* CINEMATIC GRADIENT */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-black/20
        via-black/40
        to-black
        "
      />


      {/* LIGHT BEAMS */}

      <div
        className="
        absolute inset-0
        overflow-hidden
        pointer-events-none
        "
      >

        {/* Beam 1 */}

        <motion.div
          animate={{
            rotate: [12, 18, 12],
            opacity: [0.12, 0.22, 0.12],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
          className="
          absolute
          top-[-10%]
          left-[10%]
          w-[900px]
          h-[180px]
          bg-fuchsia-500/20
          blur-[120px]
          rotate-[12deg]
          "
        />


        {/* Beam 2 */}

        <motion.div
          animate={{
            rotate: [-10, -16, -10],
            opacity: [0.10, 0.18, 0.10],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
          }}
          className="
          absolute
          bottom-[15%]
          right-[0%]
          w-[800px]
          h-[160px]
          bg-cyan-500/20
          blur-[120px]
          -rotate-[12deg]
          "
        />

      </div>


      {/* MAIN GLOW */}

      <motion.div
        style={{ y: glowY }}
        className="
        absolute
        top-[-250px]
        right-[-100px]
        w-[950px]
        h-[950px]
        rounded-full
        bg-fuchsia-500/20
        blur-[220px]
        "
      />


      {/* HERO CONTENT */}

      <motion.div
        style={{ y: textY }}
        className="
        relative
        z-20
        w-full
        px-8
        md:px-16
        lg:px-24
        pt-12
        "
      >

        {/* LABEL */}

        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
          uppercase
          tracking-[0.45em]
          text-fuchsia-400
          text-[11px]
          md:text-xs
          mb-10
          ml-1
          "
        >
          The Future Of Career Discovery
        </motion.p>


        {/* TITLE */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
          className="
          text-left
          font-black
          leading-[0.88]
          tracking-[-0.05em]
          max-w-5xl
          "
        >

          {/* LINE 1 */}

          <div
            className="
            text-white
            text-5xl
            md:text-6xl
            lg:text-[6.5rem]
            "
          >
            The Future
          </div>


          {/* LINE 2 */}

          <div
            className="
            text-white
            text-5xl
            md:text-6xl
            lg:text-[6.5rem]
            "
          >
            Is Bigger
          </div>


          {/* LINE 3 */}

          <div
            className="
            bg-gradient-to-r
            from-fuchsia-400
            via-purple-400
            to-cyan-400
            bg-clip-text
            text-transparent
            text-6xl
            md:text-7xl
            lg:text-[7.5rem]
            "
          >
            Than You Think
          </div>

        </motion.h1>


        {/* SUBTEXT */}

        <motion.p
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.4,
          }}
          className="
          mt-10
          text-lg
          md:text-2xl
          text-zinc-300
          max-w-3xl
          leading-relaxed
          "
        >
          Discover hidden careers, future opportunities,
          and AI-guided paths designed to unlock
          your true potential.
        </motion.p>


        {/* BUTTONS */}
{/* 
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="
          flex
          flex-wrap
          gap-6
          mt-14
          "
        >

          <button
            className="
            px-10 py-5
            rounded-full
            bg-fuchsia-600
            hover:bg-fuchsia-500
            transition-all
            duration-300
            text-lg
            font-semibold
            shadow-[0_0_60px_rgba(217,70,239,0.5)]
            hover:scale-105
            "
          >
            Explore Careers
          </button>


          <button
            className="
            px-10 py-5
            rounded-full
            border border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:bg-white/10
            transition-all
            duration-300
            text-lg
            font-semibold
            hover:scale-105
            "
          >
            Start Guide Path
          </button>

        </motion.div>
 */}

        {/* STATS */}

        {/* <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="
          flex
          flex-wrap
          gap-6
          mt-20
          "
        >

          {[
            ["500+", "Careers"],
            ["200+", "Exams"],
            ["AI", "Guidance"],
          ].map(([value, label], index) => (

            <motion.div
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              key={index}
              className="
              rounded-[28px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              px-8 py-6
              min-w-[180px]
              shadow-[0_0_30px_rgba(255,255,255,0.03)]
              "
            >

              <h3
                className="
                text-4xl
                font-black
                "
              >
                {value}
              </h3>

              <p
                className="
                text-zinc-400
                mt-2
                "
              >
                {label}
              </p>

            </motion.div> */}

          {/* ))}

        </motion.div> */}

      </motion.div>


      {/* BOTTOM TRANSITION */}

      <div
        className="
        absolute
        bottom-0
        left-0
        w-full
        h-[320px]
        pointer-events-none
        "
      >

        {/* Fade */}

        <div
          className="
          absolute inset-0
          bg-gradient-to-b
          from-transparent
          via-black/40
          to-black
          "
        />


        {/* Glow */}

        <div
          className="
          absolute
          bottom-[-120px]
          left-1/2
          -translate-x-1/2
          w-[900px]
          h-[300px]
          rounded-full
          bg-fuchsia-500/20
          blur-[140px]
          "
        />


        {/* SCROLL INDICATOR */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 1,
          }}
          className="
          absolute
          bottom-24
          left-1/2
          -translate-x-1/2
          text-center
          "
        >

          <p
            className="
            text-zinc-400
            uppercase
            tracking-[0.4em]
            text-xs
            mb-5
            "
          >
            Explore Hidden Futures
          </p>


          <motion.div
            animate={{
              y: [0, 15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="
            flex justify-center
            "
          >

            <div
              className="
              w-8 h-14
              rounded-full
              border border-white/20
              flex justify-center
              p-2
              "
            >

              <div
                className="
                w-2 h-2
                rounded-full
                bg-white
                "
              />

            </div>

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}