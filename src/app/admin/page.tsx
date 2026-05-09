import Link from "next/link";

export default function AdminPage() {

  const stats = [

    {
      title: "Total Careers",
      value: "101",
    },

    {
      title: "Media Assets",
      value: "284",
    },

    {
      title: "Career Categories",
      value: "12",
    },

    {
      title: "AI Systems",
      value: "08",
    },

  ];

  const sections = [

    {
      title: "Careers",
      desc:
        "Manage futuristic career content and experiences.",

      href: "/admin/careers",

      icon: "✦",
    },

    {
      title: "Exams",
      desc:
        "Control competitive exam systems and pathways.",

      href: "/admin/exams",

      icon: "⬢",
    },

    {
      title: "Media Studio",
      desc:
        "Upload cinematic images and videos.",

      href: "/admin/media",

      icon: "◎",
    },

    {
      title: "AI Engine",
      desc:
        "Future recommendation and AI systems.",

      href: "/admin/ai",

      icon: "◉",
    },

  ];

  return (

    <section
      className="
      relative
      p-8
      lg:p-12
      "
    >

      {/* HERO */}

      <div className="mb-20">

        <p
          className="
          uppercase
          tracking-[0.4em]
          text-fuchsia-400
          text-xs
          mb-5
          "
        >
          StudentPath Intelligence System
        </p>

        <h1
          className="
          text-5xl
          md:text-7xl
          font-black
          leading-[0.95]
          tracking-[-0.05em]
          "
        >
          Welcome Back,
          <br />
          Govinda
        </h1>

        <p
          className="
          mt-8
          text-zinc-400
          text-xl
          max-w-3xl
          leading-relaxed
          "
        >
          Build the future of career discovery,
          AI-powered guidance, cinematic learning,
          and intelligent exploration systems.
        </p>

      </div>

      {/* STATS */}

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        mb-20
        "
      >

        {stats.map((item) => (

          <div
            key={item.title}
            className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-8
            "
          >

            {/* GLOW */}

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-br
              from-fuchsia-500/10
              via-transparent
              to-cyan-500/10
              "
            />

            <div className="relative z-10">

              <p
                className="
                text-zinc-400
                uppercase
                tracking-[0.25em]
                text-xs
                mb-5
                "
              >
                {item.title}
              </p>

              <h2
                className="
                text-6xl
                font-black
                tracking-[-0.05em]
                "
              >
                {item.value}
              </h2>

            </div>

          </div>

        ))}

      </div>

      {/* SYSTEMS */}

      <div
        className="
        grid
        md:grid-cols-2
        gap-8
        "
      >

        {sections.map((item) => (

          <Link
            key={item.title}
            href={item.href}
            className="
            group
            relative
            overflow-hidden
            rounded-[36px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            p-10
            hover:-translate-y-2
            transition-all
            duration-500
            "
          >

            {/* HOVER */}

            <div
              className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              bg-gradient-to-br
              from-fuchsia-500/10
              via-transparent
              to-cyan-500/10
              "
            />

            <div className="relative z-10">

              <div
                className="
                w-16
                h-16
                rounded-2xl
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                text-2xl
                mb-8
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-4xl
                font-black
                mb-5
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-zinc-400
                text-lg
                leading-relaxed
                max-w-md
                "
              >
                {item.desc}
              </p>

              <div
                className="
                mt-10
                inline-flex
                items-center
                gap-3
                text-fuchsia-400
                font-semibold
                "
              >
                Open System →
              </div>

            </div>

          </Link>

        ))}

      </div>

    </section>

  );

}