"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Career {
  id: number;
  slug: string;
  title: string;
  description: string;
  category: string;
  salary: string;
  demand: string;
  hero_image?: string;
  primary_color?: string;
  secondary_color?: string;
}

interface Props {
  category: string;
  careers: Career[];
}

export default function CareerRow({
  category,
  careers,
}: Props) {

  return (

    <section className="mt-12 md:mt-20">

      {/* HEADER */}

      <div className="flex items-center justify-between mb-5 md:mb-8">

        <div>

          <h2
            className="
            text-xl
            md:text-4xl

            font-black

            tracking-[-0.04em]
            "
          >
            {category}
          </h2>

          <p
            className="
            text-zinc-500

            text-xs
            md:text-sm

            mt-1
            "
          >
            Explore futuristic opportunities
          </p>

        </div>

        <button
          className="
          text-fuchsia-400

          hover:text-fuchsia-300

          transition

          text-xs
          md:text-sm

          font-medium
          "
        >
          View All
        </button>

      </div>

      {/* ROW */}

      <div
        className="
        flex

        gap-3
        md:gap-6

        overflow-x-auto

        pb-3
        md:pb-6

        snap-x snap-mandatory

        scrollbar-hide
        "
      >

        {careers.map((career, index) => (

          <Link
            key={index}
            href={`/career/${career.slug}`}
            className="block snap-center"
          >

            {/* MOBILE CARD */}

            <div
              className="
              md:hidden

              relative

              min-w-[180px]
              h-[280px]

              rounded-[24px]

              overflow-hidden

              border border-white/10

              bg-black
              "
            >

              {/* IMAGE */}

              <img
                src={
                  career.hero_image ||
                  "/images/default.jpg"
                }
                alt={career.title}
                className="
                absolute inset-0

                w-full h-full

                object-cover
                "
              />

              {/* OVERLAY */}

              <div
                className="
                absolute inset-0

                bg-gradient-to-t
                from-black/90
                via-black/20
                to-transparent
                "
              />

              {/* HEART */}

              <div
                className="
                absolute

                top-3
                right-3

                w-8 h-8

                rounded-full

                bg-black/40

                backdrop-blur-md

                border border-white/10

                flex items-center justify-center

                text-white
                text-sm

                z-20
                "
              >
                ♡
              </div>

              {/* CONTENT */}

              <div
                className="
                relative z-10

                h-full

                flex flex-col justify-end

                p-4
                "
              >

                <h3
                  className="
                  text-2xl

                  font-black

                  leading-[0.95]

                  tracking-[-0.05em]

                  text-white
                  "
                >
                  {career.title}
                </h3>

                <p
                  className="
                  text-fuchsia-400

                  text-sm

                  mt-2
                  "
                >
                  {career.demand}
                </p>

              </div>

            </div>

            {/* DESKTOP CARD */}

            <motion.div

              whileHover={{
                y: -6,
                scale: 1.015,
              }}

              transition={{
                duration: 0.35,
              }}

              className="
              hidden md:block

              relative

              min-w-[520px]

              h-[390px]

              rounded-[38px]

              overflow-hidden

              border border-white/10

              bg-black

              group
              "
            >

              {/* IMAGE */}

              <img
                src={
                  career.hero_image ||
                  "/images/default.jpg"
                }
                alt={career.title}
                className="
                absolute inset-0

                w-full h-full

                object-cover

                group-hover:scale-105

                transition-transform
                duration-700
                "
              />

              {/* OVERLAY */}

              <div
                className="
                absolute inset-0

                bg-gradient-to-r
                from-black/75
                via-black/30
                to-black/10
                "
              />

              {/* CONTENT */}

              <div
                className="
                relative z-10

                h-full

                flex flex-col justify-between

                p-10
                "
              >

                {/* TOP */}

                <div>

                  <h3
                    className="
                    text-5xl

                    font-black

                    leading-[0.9]

                    tracking-[-0.06em]

                    max-w-[360px]

                    text-white
                    "
                  >
                    {career.title}
                  </h3>

                  <p
                    className="
                    text-zinc-200

                    mt-5

                    text-[15px]

                    leading-relaxed

                    max-w-[360px]
                    "
                  >
                    {career.description}
                  </p>

                  {/* TAGS */}

                  <div className="flex gap-3 flex-wrap mt-7">

                    {[
                      "Future Ready",
                      "High Demand",
                      "Remote Friendly",
                    ].map((tag) => (

                      <div
                        key={tag}
                        className="
                        px-4 py-2

                        rounded-full

                        bg-white/10

                        border border-white/10

                        backdrop-blur-md

                        text-white/90

                        text-sm
                        "
                      >
                        {tag}
                      </div>

                    ))}

                  </div>

                </div>

                {/* HOVER PANEL */}

                <div
                  className="
                  absolute

                  left-5
                  right-5
                  bottom-5

                  rounded-[24px]

                  border border-white/10

                  bg-white/[0.05]

                  backdrop-blur-2xl

                  px-5 py-4

                  opacity-0
                  translate-y-6

                  group-hover:opacity-100
                  group-hover:translate-y-0

                  transition-all
                  duration-500
                  "
                >

                  <div className="flex items-center justify-between gap-5">

                    {/* STATS */}

                    <div className="flex items-center gap-7">

                      <div>

                        <p className="text-zinc-400 text-[11px] uppercase mb-1">
                          Salary
                        </p>

                        <h4 className="text-2xl font-black text-white">
                          ₹10L+
                        </h4>

                      </div>

                      <div>

                        <p className="text-zinc-400 text-[11px] uppercase mb-1">
                          Demand
                        </p>

                        <h4 className="text-lg font-bold text-green-400">
                          Very High
                        </h4>

                      </div>

                      <div>

                        <p className="text-zinc-400 text-[11px] uppercase mb-1">
                          Difficulty
                        </p>

                        <h4 className="text-lg font-bold text-white">
                          Advanced
                        </h4>

                      </div>

                    </div>

                    {/* BUTTON */}

                    <button
                      className="
                      px-5 py-3

                      rounded-full

                      text-sm
                      font-semibold

                      text-white

                      whitespace-nowrap

                      transition-all
                      duration-300

                      hover:scale-105
                      "
                      style={{
                        background: `
                        linear-gradient(
                          135deg,
                          ${
                            career.primary_color ||
                            "#d946ef"
                          },
                          ${
                            career.secondary_color ||
                            "#9333ea"
                          }
                        )
                        `,
                      }}
                    >
                      Enter Career →
                    </button>

                  </div>

                </div>

              </div>

            </motion.div>

          </Link>

        ))}

      </div>

    </section>

  );

}