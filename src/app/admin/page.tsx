import Link from "next/link";

export default function AdminPage() {

const stats = [
{
title: "Careers",
value: "101",
},
{
title: "Media",
value: "284",
},
{
title: "Categories",
value: "12",
},
{
title: "AI",
value: "08",
},
];

const sections = [
{
title: "Careers",
href: "/admin/careers",
icon: "🚀",
},
{
title: "Exams",
href: "/admin/exams",
icon: "📝",
},
{
title: "Media Studio",
href: "/admin/media",
icon: "🎬",
},
{
title: "AI Engine",
href: "/admin/ai",
icon: "🤖",
},
];

return (
<section
className="
max-w-7xl
mx-auto

  p-4
  md:p-8
  lg:p-12
  "
>

  {/* HEADER */}

  <div className="mb-8">

    <p
      className="
      text-fuchsia-400
      uppercase
      tracking-[0.3em]
      text-xs
      mb-3
      "
    >
      StudentPath
    </p>

    <h1
      className="
      text-3xl
      md:text-5xl
      font-black
      "
    >
      Admin Dashboard
    </h1>

  </div>

  {/* STATS */}

  <div
    className="
    grid
    grid-cols-2
    lg:grid-cols-4
    gap-4
    mb-8
    "
  >

    {stats.map((item) => (

      <div
        key={item.title}
        className="
        rounded-3xl

        border
        border-white/10

        bg-white/[0.04]

        p-5
        "
      >

        <p
          className="
          text-zinc-500
          text-sm
          "
        >
          {item.title}
        </p>

        <h2
          className="
          mt-2

          text-3xl
          md:text-5xl

          font-black
          "
        >
          {item.value}
        </h2>

      </div>

    ))}

  </div>

  {/* SYSTEMS */}

  <div
    className="
    grid
    gap-4
    md:grid-cols-2
    "
  >

    {sections.map((item) => (

      <Link
        key={item.title}
        href={item.href}
        className="
        group

        rounded-3xl

        border
        border-white/10

        bg-white/[0.04]

        p-6

        hover:border-fuchsia-500/40

        transition-all
        "
      >

        <div
          className="
          flex
          items-center
          justify-between
          "
        >

          <div>

            <div className="text-3xl mb-3">
              {item.icon}
            </div>

            <h3
              className="
              text-xl
              md:text-2xl

              font-bold
              "
            >
              {item.title}
            </h3>

          </div>

          <div
            className="
            text-fuchsia-400

            group-hover:translate-x-1

            transition
            "
          >
            →
          </div>

        </div>

      </Link>

    ))}

  </div>

</section>

);
}