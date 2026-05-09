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

    <section className="mt-20">

      {/* HEADING */}

      <div className="flex items-center justify-between mb-8">

        <h2
          className="
          text-3xl
          md:text-4xl
          font-black
          tracking-[-0.04em]
          "
        >
          {category}
        </h2>

        <button
          className="
          text-fuchsia-400
          hover:text-fuchsia-300
          transition
          uppercase
          tracking-[0.25em]
          text-sm
          "
        >
          Explore
        </button>

      </div>

      {/* ROW */}

      <div
        className="
        flex gap-6 overflow-x-auto pb-6
        scrollbar-hide
        "
      >

        {careers.map((career, index) => (

          <Link
            key={index}
            href={`/career/${career.slug}`}
            className="block"
          >

            <motion.div

              whileHover={{
                y: -10,
                scale: 1.02,
              }}

              transition={{
                duration: 0.3,
              }}

              className="
              relative

              min-w-[360px]
              h-[520px]

              rounded-[36px]

              overflow-hidden

              border border-white/10

              bg-black/40

              backdrop-blur-xl

              group
              "
            >

              {/* BACKGROUND IMAGE */}

              <img
                src={career.hero_image || "/images/default.jpg"}
                alt={career.title}
                className="
                absolute inset-0

                w-full h-full

                object-cover

                opacity-40

                scale-105

                group-hover:scale-110

                transition duration-700
                "
              />

              {/* DARK OVERLAY */}

              <div
                className="
                absolute inset-0

                bg-gradient-to-b
                from-black/10
                via-black/40
                to-black
                "
              />

              {/* GLOW OVERLAY */}

              <div
                className="
                absolute inset-0
                opacity-70
                "
                style={{
                  background: `
                  radial-gradient(
                    circle at top right,
                    ${career.primary_color || "#d946ef"}55,
                    transparent 45%
                  )
                  `,
                }}
              />

              {/* ORB */}

              <div
                className="
                absolute

                top-[-80px]
                right-[-80px]

                w-[220px]
                h-[220px]

                rounded-full

                blur-[80px]
                "
                style={{
                  background:
                    career.primary_color || "#d946ef",
                }}
              />

              {/* CONTENT */}

              <div
                className="
                relative z-10

                h-full

                flex flex-col justify-between

                p-8
                "
              >

                {/* TOP */}

                <div>

                  <p
                    className="
                    uppercase

                    tracking-[0.3em]

                    text-fuchsia-400

                    text-xs

                    mb-5
                    "
                  >
                    {career.category}
                  </p>

                  <h3
                    className="
                    text-5xl

                    font-black

                    leading-[0.95]

                    tracking-[-0.05em]

                    max-w-[260px]
                    "
                  >
                    {career.title}
                  </h3>

                  <p
                    className="
                    text-zinc-300

                    mt-6

                    leading-relaxed

                    text-lg

                    max-w-[300px]
                    "
                  >
                    {career.description}
                  </p>

                </div>

                {/* BOTTOM */}

                <div>

                  {/* SALARY */}

                  <div className="mb-7">

                    <p className="text-zinc-500 text-sm mb-2">
                      Salary Range
                    </p>

                    <h4 className="text-3xl font-black">
                      {career.salary}
                    </h4>

                  </div>

                  {/* DEMAND + BUTTON */}

                  <div
                    className="
                    flex items-center justify-between
                    gap-4
                    "
                  >

                    <div>

                      <p className="text-zinc-500 text-sm">
                        Industry Demand
                      </p>

                      <p
                        className="
                        font-semibold
                        mt-1
                        text-green-400
                        "
                      >
                        {career.demand}
                      </p>

                    </div>

                    {/* BUTTON */}

                    <div
                      className="
                      px-5 py-3

                      rounded-full

                      text-sm
                      font-semibold

                      text-white

                      transition-all
                      duration-300

                      shadow-[0_0_40px_rgba(217,70,239,0.45)]

                      group-hover:scale-105
                      "
                      style={{
                        background: `
                        linear-gradient(
                          135deg,
                          ${career.primary_color || "#d946ef"},
                          ${career.secondary_color || "#9333ea"}
                        )
                        `,
                      }}
                    >
                      Explore Career
                    </div>

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