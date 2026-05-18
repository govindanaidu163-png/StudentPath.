"use client";

import Link from "next/link";

import {
  Heart,
  TrendingUp,
} from "lucide-react";

import {
  useEffect,
  useState,
} from "react";

export default function TrendingCareerCard({
  careers,
}: any) {

  const [
    current,
    setCurrent,
  ] = useState(0);

  /* TOP 5 TRENDING */

  const trendingCareers =
    careers?.slice(0, 5) || [];

  /* AUTO SLIDER */

  useEffect(() => {

    if (
      trendingCareers.length === 0
    ) return;

    const interval =
      setInterval(() => {

        setCurrent((prev) =>
          prev ===
          trendingCareers.length - 1
            ? 0
            : prev + 1
        );

      }, 4000);

    return () =>
      clearInterval(interval);

  }, [trendingCareers.length]);

  /* EMPTY */

  if (
    trendingCareers.length === 0
  ) {

    return null;

  }

  const career =
    trendingCareers[current];

  return (

    <section className="w-full">

      {/* HEADER */}

      <div
        className="
        flex
        items-center
        justify-between

        mb-5
        md:mb-7
        "
      >

        {/* <h2
          className="
          text-[2rem]
          md:text-[3.2rem]

          font-black

          tracking-[-0.06em]

          leading-none
          "
        >

          Trending Careers

        </h2>

        <button
          className="
          text-fuchsia-400

          text-sm
          md:text-base

          font-semibold

          hover:text-fuchsia-300

          transition-all
          duration-300
          "
        >

          Show all

        </button> */}

      </div>

      {/* CARD */}

      <Link
        href={`/career/${career.id}`}
        className="
        block

        relative

        overflow-hidden

        rounded-[34px]
        md:rounded-[48px]

        border border-white/10

        bg-[#070b16]

        h-[320px]
        md:h-[520px]

        transition-all
        duration-700

        shadow-[0_0_60px_rgba(168,85,247,0.08)]

        hover:scale-[1.01]
        "
      >

        {/* IMAGE */}

        <img
  src={
    career.hero_image ||
    "/images/trending-ai.jpg"
  }
  alt={
    career.career_name ||
    career.name ||
    "Career"
  }
          className="
          w-full
          h-full
          object-cover
          "
        />

        {/* OVERLAY */}

        <div
          className="
          absolute
          inset-0

          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
          "
        />

        {/* GLOW */}

        {/* <div
          className="
          absolute

          bottom-[-120px]
          left-1/2
          -translate-x-1/2

          w-[320px]
          md:w-[520px]

          h-[320px]
          md:h-[520px]

          rounded-full

          bg-fuchsia-500/20

          blur-[120px]
          "
        /> */}

        {/* SAVE */}

        {/* <button
          className="
          absolute

          top-5
          right-5

          md:top-7
          md:right-7

          w-14
          h-14

          md:w-16
          md:h-16

          rounded-2xl

          bg-white/15

          backdrop-blur-xl

          border border-white/10

          flex
          items-center
          justify-center

          hover:scale-110

          transition-all
          duration-300

          shadow-[0_0_30px_rgba(255,255,255,0.08)]
          "
        >

          <Heart size={28} />

        </button> */}

        {/* CONTENT */}

        <div
          className="
          absolute

          bottom-0
          left-0

          w-full

          p-6
          md:p-10
          "
        >

          {/* TITLE */}

          <h3
            className="
            text-[2rem]
            md:text-[4rem]

            font-black

            tracking-[-0.06em]

            leading-none
            "
          >

            {career.title ||
              career.name}

          </h3>

          {/* DESCRIPTION */}

          <p
            className="
            mt-4

            text-zinc-300

            text-base
            md:text-xl

            leading-relaxed
            "
          >

            {career.description ||
              career.short_description ||
              "Explore one of the most future-ready careers."}

          </p>

          {/* TRENDING */}

          <div
            className="
            mt-6

            flex
            items-center

            gap-3

            text-fuchsia-400
            "
          >

            <TrendingUp
              size={22}
            />

            <span
              className="
              text-sm
              md:text-lg
              "
            >

              {career.students ||
                "24.5K students interested"}

            </span>

          </div>

          {/* SLIDER DOTS */}

          <div
            className="
            flex
            items-center

            gap-3

            mt-7
            "
          >

            {trendingCareers.map(
              (
                _: any,
                index: number
              ) => (

                <div
                  key={index}
                  className={`
                  rounded-full

                  transition-all
                  duration-500

                  ${
                    current ===
                    index
                      ? "w-10 h-2.5 bg-fuchsia-500"
                      : "w-2.5 h-2.5 bg-white/30"
                  }
                  `}
                />

              )

            )}
            

          </div>

        </div>

      </Link>

    </section>

  );

}