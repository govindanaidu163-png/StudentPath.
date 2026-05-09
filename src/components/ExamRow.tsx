"use client";

import { motion } from "framer-motion";

interface Exam {
  title: string;
  difficulty: string;
  image: string;
}

interface Props {
  category: string;
  exams: Exam[];
}

export default function ExamRow({
  category,
  exams,
}: Props) {
  return (
    <section className="mt-14">

      {/* Heading */}
      <div className="flex items-center justify-between mb-6">

        <h2 className="text-3xl font-black">
          {category}
        </h2>

        <button
          className="
          text-fuchsia-400
          hover:text-fuchsia-300
          transition
          "
        >
          View All
        </button>

      </div>

      {/* Row */}
      <div
        className="
        flex gap-6 overflow-x-auto
        scrollbar-hide pb-4
        "
      >

        {exams.map((exam, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="
            relative
            min-w-[320px]
            h-[380px]
            rounded-[30px]
            overflow-hidden
            border border-white/10
            group
            "
          >

            {/* Image */}
            <img
              src={exam.image}
              alt={exam.title}
              className="
              absolute inset-0
              w-full h-full
              object-cover
              group-hover:scale-110
              transition duration-700
              "
            />

            {/* Overlay */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-t
              from-black
              via-black/30
              to-transparent
              "
            />

            {/* Content */}
            <div
              className="
              relative z-10
              h-full
              flex flex-col justify-end
              p-6
              "
            >

              <div
                className="
                inline-flex
                px-4 py-2
                rounded-full
                bg-fuchsia-500/20
                border border-fuchsia-500/30
                text-fuchsia-300
                text-sm
                w-fit
                mb-5
                "
              >
                ✦ Competitive Exam
              </div>

              <h3 className="text-4xl font-black">
                {exam.title}
              </h3>

              <p className="text-zinc-300 mt-2">
                Difficulty: {exam.difficulty}
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
                w-fit
                "
              >
                Explore Exam
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}