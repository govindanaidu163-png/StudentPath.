"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingHero() {

  const { scrollY } = useScroll();

  const textY = useTransform(
    scrollY,
    [0, 1000],
    [0, 260]
  );

  return (

    <section
      className="
      relative
      min-h-[120vh]
      overflow-hidden
      flex
      items-start
      justify-start
      pt-24
      "
    >

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
        bg-black/50
        "
      />

      {/* CINEMATIC GRADIENT */}

      <div
        className="
        absolute inset-0
        bg-gradient-to-b
        from-black/10
        via-black/30
        to-black
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
            text-4xl
            md:text-5xl
            lg:text-[5.5rem]
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
            lg:text-[6.1rem]
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
            text-5xl
            md:text-6xl
            lg:text-[6.3rem]
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