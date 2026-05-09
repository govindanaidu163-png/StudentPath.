"use client";

import { motion } from "framer-motion";

export default function PossibilitySection() {

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

      {/* Cosmic Glow */}
      <div className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[1200px]
      h-[1200px]
      rounded-full
      bg-cyan-500/10
      blur-[260px]
      " />

      {/* Floating Paths */}
      <div className="
      absolute inset-0
      overflow-hidden
      ">

        {[...Array(12)].map((_, index) => (

          <motion.div
            key={index}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 5 + index,
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
              left: `${index * 9}%`,
              height: `${200 + index * 30}px`,
              top: `${20 + index * 2}%`,
            }}
          />

        ))}

      </div>

      {/* Content */}
      <div className="
      relative z-10
      text-center
      max-w-6xl
      ">

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
            duration: 0.8,
          }}
          className="
          uppercase
          tracking-[0.5em]
          text-cyan-400
          text-sm
          mb-8
          "
        >
          Beyond What You Know
        </motion.p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 60,
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
          Your Future Is
          <br />

          <span className="
          bg-gradient-to-r
          from-cyan-400
          via-fuchsia-400
          to-purple-400
          bg-clip-text
          text-transparent
          ">
            Bigger Than
            <br />
            You Imagine
          </span>

        </motion.h2>

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
          max-w-4xl
          mx-auto
          "
        >
          Hidden careers.
          Unknown opportunities.
          Entire worlds of possibility
          waiting to be discovered.
        </motion.p>

        {/* Floating Insight Cards */}
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
          mt-24
          grid
          grid-cols-1
          md:grid-cols-3
          gap-8
          "
        >

          {[
            "AI & Robotics",
            "Space Technology",
            "Digital Medicine",
          ].map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                y: -8,
              }}
              className="
              rounded-[36px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-10
              "
            >

              <div className="
              w-20 h-20
              rounded-full
              bg-gradient-to-br
              from-fuchsia-500
              to-cyan-500
              blur-[1px]
              mx-auto
              mb-8
              " />

              <h3 className="
              text-3xl
              font-black
              ">
                {item}
              </h3>

            </motion.div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}