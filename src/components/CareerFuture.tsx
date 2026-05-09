"use client";

import { motion } from "framer-motion";

const futures = [
  {
    title: "Product Engineer",
    description:
      "Build scalable products used by millions worldwide.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  },

  {
    title: "Startup Founder",
    description:
      "Launch your own company and solve real-world problems.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4",
  },

  {
    title: "Freelancer",
    description:
      "Work independently with global clients and remote teams.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    title: "Tech Lead",
    description:
      "Lead engineering teams and architect powerful systems.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
  },

  {
    title: "Research Scientist",
    description:
      "Push innovation forward with advanced research and AI.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d",
  },
];

export default function CareerFuture() {
  return (
    <section className="relative py-32 px-6 lg:px-20 bg-black overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        bottom-[-300px]
        left-1/2
        -translate-x-1/2
        w-[1000px]
        h-[1000px]
        rounded-full
        bg-purple-500/10
        blur-[200px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}

        <div className="mb-20">

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-fuchsia-400
            text-sm
            mb-6
            "
          >
            Future Opportunities
          </p>

          <h2
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-none
            "
          >
            Where This Career
            <br />
            Can Take You
          </h2>

        </div>

        {/* FUTURE CARDS */}

        <div
          className="
          flex
          gap-8
          overflow-x-auto
          pb-6
          scrollbar-hide
          "
        >

          {futures.map((future, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
              relative
              min-w-[340px]
              h-[440px]
              rounded-[36px]
              overflow-hidden
              border
              border-white/10
              group
              "
            >

              {/* IMAGE */}

              <img
                src={future.image}
                alt={future.title}
                className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-700
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

              {/* CONTENT */}

              <div
                className="
                relative
                z-10
                h-full
                flex
                flex-col
                justify-end
                p-8
                "
              >

                <p
                  className="
                  uppercase
                  tracking-[0.3em]
                  text-fuchsia-400
                  text-xs
                  mb-4
                  "
                >
                  Future Role
                </p>

                <h3
                  className="
                  text-4xl
                  font-black
                  leading-tight
                  "
                >
                  {future.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-zinc-300
                  leading-relaxed
                  "
                >
                  {future.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}