import Link from "next/link";

import { supabase } from "@/lib/supabase";

import AdminCareerForm from "@/components/AdminCareerForm";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditCareerPage({
  params,
}: PageProps) {

  const { id } = await params;

  /* FETCH CAREER */

  const { data: career, error } =
    await supabase
      .from("careers")
      .select("*")
      .eq("id", id)
      .single();

  /* CAREER NOT FOUND */

  if (error || !career) {

    return (

      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        text-2xl
        text-white
        "
      >
        Career not found.
      </div>

    );

  }

  /* FETCH INSIGHTS */

  const { data: insights } =
    await supabase
      .from("career_insights")
      .select("*")
      .eq("career_slug", career.slug)
      .order("card_order", {
        ascending: true,
      });

  /* MERGE DATA */

  const careerWithInsights = {
    ...career,
    career_insights:
      insights || [],
  };

  return (

    <section
      className="
      relative
      p-8
      lg:p-12
      overflow-hidden
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        top-[-200px]
        right-[-100px]
        w-[700px]
        h-[700px]
        rounded-full
        bg-fuchsia-500/10
        blur-[160px]
        "
      />

      {/* TOP */}

      <div
        className="
        relative
        z-10
        flex
        flex-col
        xl:flex-row
        xl:items-end
        xl:justify-between
        gap-10
        mb-16
        "
      >

        <div>

          <Link
            href="/admin/careers"
            className="
            inline-flex
            items-center
            gap-3
            text-zinc-400
            hover:text-white
            transition
            mb-8
            "
          >
            ← Back To Careers
          </Link>

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-fuchsia-400
            text-xs
            mb-5
            "
          >
            Career Editing System
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
            {career.title}
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
            Shape the cinematic identity,
            future pathways, and intelligence
            systems behind this career experience.
          </p>

        </div>

        {/* STATUS PANEL */}

        <div
          className="
          relative
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-8
          min-w-[320px]
          "
        >

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
              uppercase
              tracking-[0.3em]
              text-fuchsia-400
              text-xs
              mb-4
              "
            >
              System Status
            </p>

            <h3
              className="
              text-3xl
              font-black
              mb-6
              "
            >
              Editing Active
            </h3>

            <div className="space-y-4">

              <div
                className="
                flex
                items-center
                justify-between
                "
              >
                <span className="text-zinc-400">
                  Career ID
                </span>

                <span className="font-semibold">
                  #{career.id}
                </span>
              </div>

              <div
                className="
                flex
                items-center
                justify-between
                "
              >
                <span className="text-zinc-400">
                  Category
                </span>

                <span className="font-semibold">
                  {career.category}
                </span>
              </div>

              <div
                className="
                flex
                items-center
                justify-between
                "
              >
                <span className="text-zinc-400">
                  Status
                </span>

                <span className="text-green-400 font-semibold">
                  Live
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FORM */}

      <div className="relative z-10">

        <AdminCareerForm
          career={careerWithInsights}
        />

      </div>

    </section>

  );

}