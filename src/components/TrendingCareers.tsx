"use client";

import { motion } from "framer-motion";

const careers = [
  {
    title: "AI Engineer",
    salary: "₹18L - ₹60L",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },

  {
    title: "Cyber Security",
    salary: "₹12L - ₹40L",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  },

  {
    title: "Space Scientist",
    salary: "₹20L - ₹80L",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
  },

  {
    title: "Data Scientist",
    salary: "₹15L - ₹45L",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  },

  {
    title: "Game Developer",
    salary: "₹10L - ₹35L",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e",
  },
];

export default function TrendingCareers() {
  return (
    <section className="mt-12">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-bold">
          Trending Careers
        </h2>

        <button className="text-fuchsia-400 hover:text-fuchsia-300 transition">
          View All
        </button>

      </div>

      {/* Cards */}
      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">

        {careers.map((career, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="
            min-w-[320px]
            h-[420px]
            rounded-[30px]
            overflow-hidden
            border border-white/10
            bg-[#0b1020]
            relative
            group
            "
          >

            {/* Image */}
            <img
              src={career.image}
              alt={career.title}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              group-hover:scale-110
              transition duration-700
              "
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 p-6 z-10">

              <h3 className="text-3xl font-black">
                {career.title}
              </h3>

              <p className="text-zinc-300 mt-2">
                {career.salary}
              </p>

              <button
                className="
                mt-5
                px-5 py-3
                rounded-full
                bg-white/10
                backdrop-blur
                hover:bg-white/20
                transition
                "
              >
                Explore Career
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}