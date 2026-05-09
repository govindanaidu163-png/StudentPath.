import Link from "next/link";

import AdminTopbar from "@/components/AdminTopbar";

import { createCareer } from "../actions";

import { supabase } from "@/lib/supabase";

export default async function AdminCareersPage() {

  const { data: careers, error } =
    await supabase
      .from("careers")
      .select("*")
      .order("id");

  if (error || !careers) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        text-2xl
        text-white
        bg-black
        "
      >

        Failed to load careers.

      </div>

    );

  }

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      "
    >

      {/* TOPBAR */}

      <AdminTopbar
        title="Careers Dashboard"
        subtitle="Manage futuristic careers, media systems, and public experiences."
      />

      {/* CONTENT */}

      <div
        className="
        p-8
        lg:p-12
        "
      >

        {/* ACTION ROW */}

        <div
          className="
          flex
          items-center
          justify-between
          gap-6
          mb-10
          flex-wrap
          "
        >

          {/* STATS */}

          <div
            className="
            flex
            items-center
            gap-5
            "
          >

            <div
              className="
              px-6
              py-5
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              "
            >

              <p
                className="
                text-zinc-500
                text-sm
                mb-2
                "
              >
                Total Careers
              </p>

              <h2
                className="
                text-4xl
                font-black
                "
              >
                {careers.length}
              </h2>

            </div>

          </div>

        </div>

        {/* GRID */}

        <div
          className="
          grid
          md:grid-cols-2
          2xl:grid-cols-3
          gap-8
          "
        >

          {careers.map((career) => (

            <div
              key={career.id}
              className="
              group
              relative
              overflow-hidden
              rounded-[36px]
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              hover:-translate-y-2
              transition-all
              duration-500
              "
            >

              {/* HOVER GLOW */}

              <div
                className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                bg-gradient-to-br
                from-fuchsia-500/10
                via-transparent
                to-cyan-500/10
                "
              />

              {/* IMAGE */}

              <div
                className="
                relative
                h-[160px]
                overflow-hidden
                "
              >

                <img
                  src={
                    career.hero_image ||
                    "/images/default.jpg"
                  }
                  alt={career.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  group-hover:scale-105
                  transition-transform
                  duration-700
                  "
                />

                {/* OVERLAY */}

                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/10
                  via-black/20
                  to-black
                  "
                />

                {/* CATEGORY */}

                <div
                  className="
                  absolute
                  top-6
                  left-6
                  px-4
                  py-2
                  rounded-full
                  bg-black/40
                  backdrop-blur-xl
                  border
                  border-white/10
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-fuchsia-400
                  "
                >

                  {career.category || "Future Career"}

                </div>

              </div>

              {/* CONTENT */}

              <div className="relative z-10 p-8">

                <h2
                  className="
                  text-4xl
                  font-black
                  leading-tight
                  mb-5
                  "
                >
                  {career.title}
                </h2>

                <p
                  className="
                  text-zinc-400
                  leading-relaxed
                  line-clamp-3
                  mb-8
                  "
                >
                  {career.description}
                </p>

                {/* META */}

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  mb-8
                  "
                >

                  <div>

                    <p
                      className="
                      text-zinc-500
                      text-xs
                      uppercase
                      mb-2
                      "
                    >
                      Demand
                    </p>

                    <p className="font-semibold">
                      {career.demand || "High"}
                    </p>

                  </div>

                  <div>

                    <p
                      className="
                      text-zinc-500
                      text-xs
                      uppercase
                      mb-2
                      "
                    >
                      Salary
                    </p>

                    <p className="font-semibold">
                      {career.salary || "N/A"}
                    </p>

                  </div>

                </div>

                {/* ACTIONS */}

                <div
                  className="
                  flex
                  gap-4
                  "
                >

                  <Link
                    href={`/career/${career.slug}`}
                    className="
                    flex-1
                    text-center
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    hover:bg-white/10
                    transition
                    "
                  >

                    Preview

                  </Link>

                  <Link
                    href={`/admin/careers/${career.id}`}
                    className="
                    flex-1
                    text-center
                    py-4
                    rounded-2xl
                    bg-fuchsia-600
                    hover:bg-fuchsia-500
                    transition
                    font-semibold
                    "
                  >

                    Edit System

                  </Link>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </main>

  );

}