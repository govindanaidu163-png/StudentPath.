"use client";

import { motion } from "framer-motion";

export default function FinalLeap() {

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

      {/* Massive Cosmic Glow */}
      <div className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[1200px]
      h-[1200px]
      rounded-full
      bg-fuchsia-500/10
      blur-[260px]
      " />

      {/* Converging Lines */}
      <div className="
      absolute inset-0
      overflow-hidden
      ">

        {[...Array(14)].map((_, index) => (

          <motion.div
            key={index}
            animate={{
              opacity: [0.2, 0.7, 0.2],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + index * 0.3,
            }}
            className="
            absolute
            w-[2px]
            bg-gradient-to-b
            from-transparent
            via-fuchsia-500
            to-transparent
            "
            style={{
              left: `${index * 7}%`,
              height: `${240 + index * 20}px`,
              top: `${20 + index}%`,
            }}
          />

        ))}

      </div>

      {/* Content */}
      <div className="
      relative z-10
      text-center
      max-w-5xl
      ">

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
          uppercase
          tracking-[0.5em]
          text-fuchsia-400
          text-sm
          mb-8
          "
        >
          The Beginning
        </motion.p>

        {/* Main Heading */}
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
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-black
          leading-[0.95]
          "
        >
          Every Future
          <br />

          <span className="
          bg-gradient-to-r
          from-fuchsia-400
          via-cyan-400
          to-purple-400
          bg-clip-text
          text-transparent
          ">
            Begins With
            <br />
            One Decision
          </span>

        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{
            opacity: 0,
            y: 40,
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
          Your future is larger than you imagined.
          Explore careers, discover hidden opportunities,
          and design the life you truly want.
        </motion.p>

        {/* CTA */}
        <motion.div
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
            delay: 0.4,
          }}
          className="
          mt-20
          flex flex-wrap
          justify-center
          gap-6
          "
        >

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
            px-14 py-6
            rounded-full
            bg-gradient-to-r
            from-fuchsia-600
            to-purple-600
            text-xl
            font-semibold
            shadow-[0_0_60px_rgba(217,70,239,0.5)]
            "
          >
            Start Your Journey
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
            px-14 py-6
            rounded-full
            border border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            text-xl
            font-semibold
            "
          >
            Explore Futures
          </motion.button>

        </motion.div>

      </div>

    </section>
  );
}