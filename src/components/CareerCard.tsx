"use client";

import Link from "next/link";

type Props = {
  title: string;
  demand: string;
  salary?: string;
  tagline?: string;
  slug: string;

  image?: string;

  primaryColor?: string;
  secondaryColor?: string;

  category?: string;
};

export default function CareerCard({
  title,
  demand,
  salary,
  tagline,
  slug,

  image,

  primaryColor = "#d946ef",
  secondaryColor = "#9333ea",

  category = "Future Career",
}: Props) {

  return (

    <Link
      href={`/career/${slug}`}
      className="
      group
      relative
      overflow-hidden

      rounded-[38px]

      min-h-[520px]

      border border-white/10

      bg-black/40

      backdrop-blur-2xl

      p-8

      flex
      flex-col
      justify-between

      transition-all
      duration-500

      hover:scale-[1.03]
      hover:border-white/20
      "
    >

      {/* BACKGROUND IMAGE */}

      <img
        src={image || "/images/default.jpg"}
        alt={title}
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
        from-black/20
        via-black/50
        to-black
        "
      />

      {/* COLOR GLOW */}

      <div
        className="
        absolute

        inset-0

        opacity-70
        "
        style={{
          background: `
          radial-gradient(
            circle at top left,
            ${primaryColor}55,
            transparent 45%
          )
          `,
        }}
      />

      {/* CONTENT */}

      <div className="relative z-10">

        {/* CATEGORY */}

        <p
          className="
          uppercase

          tracking-[0.35em]

          text-xs

          text-white/70

          mb-6
          "
        >
          {category}
        </p>

        {/* TITLE */}

        <h2
          className="
          text-5xl

          font-black

          leading-[0.95]

          tracking-[-0.05em]

          max-w-[280px]
          "
        >
          {title}
        </h2>

        {/* TAGLINE */}

        <p
          className="
          mt-6

          text-zinc-300

          text-lg

          leading-relaxed

          max-w-[320px]
          "
        >
          {tagline || "Builds intelligent systems and future-ready technologies."}
        </p>

      </div>

      {/* BOTTOM */}

      <div className="relative z-10">

        {/* STATS */}

        <div className="space-y-5 mb-8">

          <div>
            <p className="text-zinc-400 text-sm mb-1">
              Salary Range
            </p>

            <h3 className="text-4xl font-black">
              {salary || "₹10L - ₹45L"}
            </h3>
          </div>

          <div>
            <p className="text-zinc-400 text-sm mb-1">
              Industry Demand
            </p>

            <h3 className="text-2xl font-black text-green-400">
              {demand}
            </h3>
          </div>

        </div>

        {/* BUTTON */}

        <button
          className="
          w-full

          py-4

          rounded-full

          text-lg
          font-semibold

          text-white

          transition-all
          duration-300

          shadow-[0_0_40px_rgba(217,70,239,0.45)]

          group-hover:scale-[1.03]
          "
          style={{
            background: `
            linear-gradient(
              135deg,
              ${primaryColor},
              ${secondaryColor}
            )
            `,
          }}
        >
          Explore Career
        </button>

      </div>

    </Link>

  );
}