"use client";

import { motion } from "framer-motion";
import Reveal from "../components/Reveal";


const careers = [
  {
    title: "Artificial Intelligence",
    description:
      "Build intelligent systems shaping the future.",
  },

  {
    title: "Space Science",
    description:
      "Explore galaxies, satellites, and cosmic technology.",
  },

  {
    title: "Medical Innovation",
    description:
      "Transform healthcare with science and compassion.",
  },

  {
    title: "Cyber Security",
    description:
      "Protect the digital future of humanity.",
  },

  {
    title: "Game Development",
    description:
      "Create immersive virtual worlds and experiences.",
  },
];

export default function CareerUniverse() {

  return (

    <section className="
    relative
    py-40
    px-6 lg:px-20
    bg-black
    overflow-hidden
    ">

      {/* Background Glow */}
      <div className="
      absolute
      top-1/2 left-1/2
      -translate-x-1/2
      -translate-y-1/2
      w-[1200px]
      h-[1200px]
      rounded-full
      bg-fuchsia-500/10
      blur-[240px]
      " />

      <Reveal>

      <div className="
      relative z-10
      max-w-7xl
      mx-auto
      ">

        {/* Heading */}
        <div className="
        text-center
        mb-28
        ">

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
            mb-6
            "
          >
            Discover Infinite Possibilities
          </motion.p>

          <motion.h2
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
            }}
            className="
            text-5xl
            lg:text-7xl
            font-black
            leading-tight
            "
          >
            Explore Worlds
            <br />

            Beyond Your Imagination
          </motion.h2>

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
            mt-10
            text-xl
            text-zinc-400
            max-w-3xl
            mx-auto
            leading-relaxed
            "
          >
            Every career is a universe filled with
            opportunities, innovation, and hidden futures
            waiting to be explored.
          </motion.p>

        </div>

        {/* Career Panels */}
        <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        gap-8
        ">

          {careers.map((career, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="
              relative
              overflow-hidden
              rounded-[40px]
              border border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-10
              min-h-[320px]
              group
              "
            >

              {/* Hover Glow */}
              <div className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-700
              bg-gradient-to-br
              from-fuchsia-500/20
              to-cyan-500/10
              " />

              {/* Floating Orb */}
              <div className="
              absolute
              top-[-60px]
              right-[-60px]
              w-[220px]
              h-[220px]
              rounded-full
              bg-fuchsia-500/20
              blur-[100px]
              " />

              <div className="relative z-10">

                <p className="
                uppercase
                tracking-[0.3em]
                text-xs
                text-zinc-500
                mb-6
                ">
                  Future Universe
                </p>

                <h3 className="
                text-4xl
                font-black
                leading-tight
                ">
                  {career.title}
                </h3>

                <p className="
                mt-8
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-md
                ">
                  {career.description}
                </p>

                <button className="
                mt-12
                px-8 py-4
                rounded-full
                bg-white/10
                border border-white/10
                hover:bg-fuchsia-500
                transition
                ">
                  Explore Universe
                </button>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
      </Reveal>
    </section>
  );
}