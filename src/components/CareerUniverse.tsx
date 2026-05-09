"use client";

import { motion } from "framer-motion";

export default function CareerUniverse({
  nodes,
  title,
}: {
  nodes: string[];
  title: string;
}) {
  return (
    <section
      className="
      relative
      min-h-[1200px]
      bg-black
      overflow-hidden
      flex
      items-center
      justify-center
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        bg-fuchsia-500/20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(217,70,239,0.15),transparent_70%)]
        "
      />

      {/* TOP LEFT CONTENT */}

      <div
        className="
        absolute
        top-24
        left-10
        lg:left-20
        z-30
        max-w-md
        "
      >
        <p
          className="
          uppercase
          tracking-[0.4em]
          text-fuchsia-400
          text-sm
          mb-6
          "
        >
          Career Universe
        </p>

        <h2
          className="
          text-5xl
          lg:text-6xl
          font-black
          leading-tight
          "
        >
          Explore
          <br />
          Career Paths
        </h2>

        <p
          className="
          mt-8
          text-zinc-400
          text-lg
          leading-relaxed
          "
        >
          Discover specialized domains, future opportunities,
          and interconnected paths inside this career ecosystem.
        </p>
      </div>

      {/* RING 1 */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[620px]
        h-[620px]
        rounded-full
        border
        border-white/10
        "
      />

      {/* RING 2 */}

      <motion.div
        animate={{
          rotate: [0, -360],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[450px]
        h-[450px]
        rounded-full
        border
        border-fuchsia-500/10
        "
      />

      {/* RING 3 */}

      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
        absolute
        w-[280px]
        h-[280px]
        rounded-full
        border
        border-white/10
        "
      />

      {/* OUTER ORBIT */}

      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        border
        border-white/10
        "
      />

      {/* INNER ORBIT */}

      <div
        className="
        absolute
        w-[500px]
        h-[500px]
        rounded-full
        border
        border-fuchsia-500/20
        "
      />

      {/* CENTER CORE */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        relative
        z-20
        w-52
        h-52
        rounded-full
        bg-gradient-to-br
        from-fuchsia-500
        to-purple-700
        flex
        items-center
        justify-center
        shadow-[0_0_120px_rgba(217,70,239,0.9)]
        "
      >
        <div className="text-center">
          <p
            className="
            uppercase
            tracking-[0.3em]
            text-sm
            text-white/70
            mb-3
            "
          >
            Core Career
          </p>

          <h2
            className="
            text-3xl
            lg:text-4xl
            font-black
            leading-tight
            px-4
            "
          >
            {title}
          </h2>
        </div>
      </motion.div>

      {/* ORBIT NODES */}

      {(nodes || []).map((item, index) => {
        const totalNodes = (nodes || []).length;

        const angle =
          (index / totalNodes) * Math.PI * 2;

        const radius = 290;

        const x = Math.cos(angle) * radius;

        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x,
              y,
            }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}
            whileHover={{
              scale: 1.1,
            }}
            className="
            absolute
            z-10
            "
          >
            {/* CONNECTOR LINE */}

            <div
              className="
              absolute
              top-1/2
              left-1/2
              h-[1px]
              bg-gradient-to-r
              from-fuchsia-500/70
              to-transparent
              origin-left
              "
              style={{
                width: radius,
                transform: `rotate(${angle}rad)`,
              }}
            />

            {/* NODE */}

            <div
              className="
              relative
              px-6
              py-4
              rounded-2xl
              border
              border-fuchsia-500/30
              bg-white/5
              backdrop-blur-xl
              text-white
              font-semibold
              shadow-[0_0_30px_rgba(217,70,239,0.3)]
              transition-all
              duration-300
              hover:bg-fuchsia-500/10
              hover:border-fuchsia-400/60
              "
            >
              {item}
            </div>
          </motion.div>
        );
      })}
    </section>
  );
}