"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const exams = [
  {
    title: "JEE Advanced",
    description:
      "India's toughest engineering entrance exam for IIT aspirants.",
    difficulty: "Very Hard",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },

  {
    title: "NEET",
    description:
      "National medical entrance exam for future doctors and healthcare professionals.",
    difficulty: "Very Hard",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f",
  },

  {
    title: "UPSC",
    description:
      "The most prestigious civil services examination in India.",
    difficulty: "Extreme",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
];

export default function TrendingExamHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % exams.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="mt-8">

      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="
          relative
          h-[520px]
          rounded-[40px]
          overflow-hidden
          border border-white/10
          "
        >

          {/* Background */}
          <img
            src={exams[current].image}
            alt={exams[current].title}
            className="
            absolute inset-0
            w-full h-full
            object-cover
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-end">

            <div className="p-12 max-w-3xl">

              <div className="
              inline-flex
              px-5 py-2
              rounded-full
              bg-fuchsia-500/20
              border border-fuchsia-500/30
              text-fuchsia-300
              mb-6
              ">
                ✦ Trending Exam
              </div>

              <h1 className="text-7xl font-black leading-none">
                {exams[current].title}
              </h1>

              <p className="mt-6 text-zinc-300 text-xl leading-relaxed">
                {exams[current].description}
              </p>

              <div className="flex gap-4 mt-8">

                <div className="
                px-5 py-4
                rounded-2xl
                bg-white/10
                backdrop-blur
                ">
                  <p className="text-sm text-zinc-400">
                    Difficulty
                  </p>

                  <h3 className="text-2xl font-bold">
                    {exams[current].difficulty}
                  </h3>
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button className="
                px-8 py-4
                rounded-full
                bg-gradient-to-r
                from-fuchsia-600
                to-purple-600
                font-semibold
                hover:scale-105
                transition
                ">
                  Explore Exam
                </button>

                <button className="
                px-8 py-4
                rounded-full
                bg-white/10
                backdrop-blur
                hover:bg-white/20
                transition
                ">
                  View Syllabus
                </button>

              </div>

            </div>

          </div>

          {/* Indicators */}
          <div className="
          absolute bottom-8 right-8
          flex gap-3 z-20
          ">

            {exams.map((_, index) => (

              <div
                key={index}
                className={`
                h-3 rounded-full transition-all duration-500
                ${
                  current === index
                    ? "w-10 bg-fuchsia-500"
                    : "w-3 bg-white/40"
                }
                `}
              />

            ))}

          </div>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}