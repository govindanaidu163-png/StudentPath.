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

      bg-black

      flex
      flex-col
      justify-between

      transition-all
      duration-500

      hover:scale-[1.02]
      hover:border-white/20
      hover:shadow-[0_20px_80px_rgba(0,0,0,0.6)]
      "
    >

      {/* IMAGE */}
      <img
        src={image || "/images/default.jpg"}
        alt={title}
        className="
        absolute inset-0

        w-full h-full

        object-cover

        opacity-90

        scale-100

        group-hover:scale-105

        transition-transform
        duration-700
        ease-out
        "
      />

      {/* SOFT BOTTOM FADE */}
      <div
        className="
        absolute
        inset-0

        bg-gradient-to-t
        from-black/85
        via-black/20
        to-transparent
        "
      />

      {/* TOP CONTENT */}
      <div className="relative z-10 p-8">

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

          text-white

          drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]
          "
        >
          {title}
        </h2>

        {/* TAGLINE */}
        <p
          className="
          mt-6

          text-zinc-200

          text-lg

          leading-relaxed

          max-w-[320px]

          drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]
          "
        >
          {tagline ||
            "Builds intelligent systems and future-ready technologies."}
        </p>

      </div>

      {/* BOTTOM SECTION */}
      <div className="relative z-10 p-8 pt-0">

        {/* GLASS PANEL */}
        <div
          className="
          rounded-[28px]

          border border-white/10

          bg-black/35

          backdrop-blur-xl

          p-6
          "
        >

          {/* STATS */}
          <div className="space-y-5 mb-6">

            <div>
              <p className="text-zinc-400 text-sm mb-1">
                Salary Range
              </p>

              <h3 className="text-4xl font-black text-white">
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

            hover:scale-[1.02]

            shadow-[0_10px_40px_rgba(0,0,0,0.4)]
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

      </div>

    </Link>
  );
}