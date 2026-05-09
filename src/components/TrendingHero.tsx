"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const careers = [
  {
    title: "AI Engineer",
    description:
      "Build intelligent systems, work with cutting-edge AI, and shape the future.",
    salary: "₹18L - ₹60L",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },

  {
    title: "Space Scientist",
    description:
      "Design next-generation space missions and advanced exploration systems.",
    salary: "₹20L - ₹80L",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },

  {
    title: "Cyber Security",
    description:
      "Protect systems from cyber threats and secure digital infrastructures.",
    salary: "₹12L - ₹40L",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },
];

export default function TrendingHero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % careers.length);
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

          {/* Background Image */}
          <img
            src={careers[current].image}
            alt={careers[current].title}
            className="
            absolute inset-0
            w-full h-full
            object-cover
            "
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Purple Glow */}
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
              backdrop-blur
              text-fuchsia-300
              mb-6
              ">
                ✦ Trending Career
              </div>

              <h1 className="text-7xl font-black leading-none">
                {careers[current].title}
              </h1>

              <p className="mt-6 text-zinc-300 text-xl leading-relaxed">
                {careers[current].description}
              </p>

              <div className="flex gap-4 mt-8">

                <div className="
                px-5 py-4
                rounded-2xl
                bg-white/10
                backdrop-blur
                ">
                  <p className="text-sm text-zinc-400">
                    Average Salary
                  </p>

                  <h3 className="text-2xl font-bold">
                    {careers[current].salary}
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
                  Explore Career
                </button>

                <button className="
                px-8 py-4
                rounded-full
                bg-white/10
                backdrop-blur
                hover:bg-white/20
                transition
                ">
                  View Roadmap
                </button>

              </div>

            </div>

          </div>

          {/* Slider Indicators */}
          <div className="
          absolute bottom-8 right-8
          flex gap-3
          z-20
          ">

            {careers.map((_, index) => (

              <div
                key={index}
                className={`
                h-3 rounded-full transition-all duration-500
                ${current === index
                  ? "w-10 bg-fuchsia-500"
                  : "w-3 bg-white/40"}
                `}
              />

            ))}

          </div>

        </motion.div>

      </AnimatePresence>

    </section>
  );
}