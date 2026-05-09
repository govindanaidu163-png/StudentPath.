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
    y: -8,
    scale: 1.015,
  }}
  transition={{
    duration: 0.35,
  }}
  className="
  relative
  min-w-[520px]
  h-[380px]

  rounded-[38px]
  overflow-hidden

  border border-white/10

  bg-black

  group
  "
>

  {/* IMAGE */}

  <img
    src={career.hero_image || "/images/default.jpg"}
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

  {/* CINEMATIC OVERLAY */}

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

      {/* CATEGORY */}

      {/* <p
        className="
        uppercase

        tracking-[0.28em]

        text-[11px]

        text-fuchsia-300

        mb-5
        "
      >
        {career.category}
      </p> */}

      {/* TITLE */}

      <h3
        className="
        text-4xl

        font-black

        leading-[0.9]

        tracking-[-0.06em]

        max-w-[360px]

        text-white
        "
      >
        {career.title}
      </h3>

      {/* DESCRIPTION */}

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

        <div
          className="
          px-4 py-2

          rounded-full

          bg-white/10

          border border-white/10

          text-white/90

          text-sm
          "
        >
          Future Ready
        </div>

        <div
          className="
          px-4 py-2

          rounded-full

          bg-white/10

          border border-white/10

          text-white/90

          text-sm
          "
        >
          High Demand
        </div>

        <div
          className="
          px-4 py-2

          rounded-full

          bg-white/10

          border border-white/10

          text-white/90

          text-sm
          "
        >
          Remote Friendly
        </div>

      </div>

    </div>

    {/* BOTTOM PANEL */}

{/* HOVER PANEL */}

<div
  className="
  absolute

  left-5
  right-5
  bottom-5

  rounded-[24px]

  border border-white/10

  bg-black/35

  backdrop-blur-xl

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

      {/* SALARY */}

      <div>
        <p className="text-zinc-400 text-[11px] mb-1 uppercase">
          Salary
        </p>

        <h4 className="text-2xl font-black text-white whitespace-nowrap">
          ₹10L - ₹45L
        </h4>
      </div>

      {/* DEMAND */}

      <div>
        <p className="text-zinc-400 text-[11px] mb-1 uppercase">
          Demand
        </p>

        <h4 className="text-lg font-bold text-green-400 whitespace-nowrap">
          Very High
        </h4>
      </div>

      {/* DIFFICULTY */}

      <div>
        <p className="text-zinc-400 text-[11px] mb-1 uppercase">
          Difficulty
        </p>

        <h4 className="text-lg font-bold text-white whitespace-nowrap">
          Advanced
        </h4>
      </div>

    </div>

    {/* BUTTON */}

    {/* <button
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
          ${career.primary_color || "#d946ef"},
          ${career.secondary_color || "#9333ea"}
        )
        `,
      }}
    >
      Enter Career →
    </button> */}

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