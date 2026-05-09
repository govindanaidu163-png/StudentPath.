"use client";

import { motion } from "framer-motion";

type Insight = {
  title?: string;
  value?: string;
  description?: string;
  deepInsight?: string;
  tags?: string[];
  position?: string;
};

export default function CareerInsights({
  insights = [],
}: {
  insights?: Insight[];
}) {

  const safeInsights = insights || [];

  return (
    <section
      className="
      relative
      py-40
      px-6
      lg:px-12
      bg-black
      overflow-visible
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        "
      >
        {/* HEADING */}

        <div className="mb-20">

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-fuchsia-400
            text-sm
            mb-6
            "
          >
            Career Intelligence
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-[0.95]
            "
          >
            Important Insights
            <br />
            Before You Start
          </h2>

        </div>

        {/* EMPTY STATE */}

        {safeInsights.length === 0 && (

          <div
            className="
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-12
            text-center
            "
          >
            <h3 className="text-3xl font-black mb-4">
              Insights Coming Soon
            </h3>

            <p className="text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              We are currently preparing detailed insights,
              salary trends, growth analysis, and future
              opportunities for this career path.
            </p>
          </div>

        )}

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          overflow-visible
          "
        >

          {safeInsights.map((item, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              className="
              group
              relative
              z-0
              hover:z-50
              overflow-visible
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              min-h-[260px]
              transition-all
              duration-500
              "
            >

              {/* CARD HOVER GLOW */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                rounded-[32px]
                bg-gradient-to-br
                from-fuchsia-500/10
                via-transparent
                to-cyan-500/10
                "
              />

              {/* MAIN CONTENT */}

              <div className="relative z-10">

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-zinc-500
                  text-xs
                  "
                >
                  {item.title || "Career Insight"}
                </p>

                <h3
                  className="
                  text-4xl
                  font-black
                  mt-8
                  leading-tight
                  "
                >
                  {item.value || "Growing"}
                </h3>

                <p
                  className="
                  mt-6
                  text-zinc-400
                  leading-relaxed
                  "
                >
                  {item.description ||
                    "This field is evolving rapidly with strong opportunities for future growth."}
                </p>

              </div>

              {/* PREMIUM POPUP */}

              <div
                className={`
                absolute
                opacity-0
                pointer-events-none
                group-hover:opacity-100
                scale-95
                group-hover:scale-100
                transition-all
                duration-500
                z-[999]

                ${
                  item.position === "right"
                    ? "left-0 top-1/2 -translate-y-1/2"
                    : item.position === "left"
                    ? "right-0 top-1/2 -translate-y-1/2"
                    : "left-1/2 -translate-x-1/2 bottom-0"
                }
                `}
              >

                <div
                  className="
                  relative
                  w-[620px]
                  h-[420px]
                  rounded-[32px]

                  border
                  border-white/15

                  bg-black/85
                  backdrop-blur-[40px]

                  shadow-[0_0_80px_rgba(217,70,239,0.35)]

                  before:absolute
                  before:inset-0
                  before:rounded-[32px]
                  before:bg-gradient-to-br
                  before:from-white/5
                  before:to-transparent
                  before:pointer-events-none

                  p-8

                  overflow-hidden

                  flex
                  flex-col
                  justify-between
                  "
                >

                  {/* BACKGROUND EFFECT */}

                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-fuchsia-500/10
                    via-transparent
                    to-cyan-500/10
                    "
                  />

                  {/* CONTENT */}

                  <div className="relative z-10">

                    <p
                      className="
                      text-fuchsia-400
                      uppercase
                      tracking-[0.35em]
                      text-xs
                      mb-5
                      "
                    >
                      Deep Insight
                    </p>

                    <h4
                      className="
                      text-4xl
                      font-black
                      mb-6
                      leading-tight
                      "
                    >
                      {item.title || "Career Growth"}
                    </h4>

                    <p
                      className="
                      text-zinc-300
                      text-lg
                      leading-relaxed
                      max-w-[90%]
                      "
                    >
                      {item.deepInsight ||
                        "This career area is evolving rapidly and offers strong long-term growth for people who develop deep technical expertise and future-ready skills."}
                    </p>

                  </div>

                  {/* TAGS */}

                  <div
                    className="
                    relative
                    z-10
                    flex
                    gap-4
                    flex-wrap
                    "
                  >

                    {(item.tags || [
                      "📈 High Growth",
                      "🌍 Global Scope",
                      "🚀 Future Ready",
                    ]).map((tag, tagIndex) => (

                      <div
                        key={tagIndex}
                        className="
                        px-4
                        py-2
                        rounded-full
                        bg-white/10
                        border
                        border-white/10
                        text-sm
                        "
                      >
                        {tag}
                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}