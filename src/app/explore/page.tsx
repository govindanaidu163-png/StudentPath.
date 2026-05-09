import DashboardNavbar from "@/components/DashboardNavbar";

import TrendingHero from "@/components/TrendingHero";

import CareerRow from "@/components/CareerRow";

import { supabase } from "@/lib/supabase";

export default async function ExplorePage() {

  const { data: careers, error } =
    await supabase
      .from("careers")
      .select("*");

  if (error || !careers) {

    return (

      <div
        className="
        min-h-screen
        bg-black
        text-red-500
        flex items-center justify-center
        text-2xl
        "
      >
        Failed to load careers
      </div>

    );

  }

  /* CATEGORY FILTERS */

  const technologyCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Technology & AI"
    );

  const engineeringCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Engineering & Robotics"
    );

  const designCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Design & Creative"
    );

  const spaceCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Space & Research"
    );

  const businessCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Business & Management"
    );

  const biotechCareers =
    careers.filter(
      (career) =>
        career.category ===
        "Health & Biotech"
    );

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      overflow-hidden
      "
    >

      {/* NAVBAR */}

      <DashboardNavbar />

      {/* HERO SECTION */}

      <section
        className="
        relative
        px-4
        pt-18
        pb-8
        "
      >

        {/* BACKGROUND GLOW */}

        <div
          className="
          absolute
          top-[-250px]
          left-1/2
          -translate-x-1/2
          w-[1000px]
          h-[1000px]
          rounded-full
          bg-fuchsia-500/20
          blur-[180px]
          "
        />

        <div className="relative z-10">

          <TrendingHero />

          {/* HEADER */}

          <div className="mt-20 max-w-5xl">

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-fuchsia-400
              text-xs
              mb-6
              "
            >
              Explore Futures
            </p>

            <h1
              className="
              text-5xl
              md:text-7xl
              font-black
              leading-[0.9]
              tracking-[-0.05em]
              "
            >

              Discover Careers

              <br />

              Beyond Traditional

              <br />

              <span
                className="
                bg-gradient-to-r
                from-fuchsia-400
                via-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
                "
              >
                Imagination
              </span>

            </h1>

            <p
              className="
              mt-8
              text-zinc-400
              text-lg
              max-w-2xl
              leading-relaxed
              "
            >
              Explore hidden industries,
              futuristic opportunities,
              and next-generation careers
              shaping humanity’s future.
            </p>

          </div>

        </div>

      </section>

      {/* CATEGORY ROWS */}

      <section className="px-8 pb-24">

        <CareerRow
          category="💻 Technology & AI"
          careers={technologyCareers}
        />

        <CareerRow
          category="⚙️ Engineering & Robotics"
          careers={engineeringCareers}
        />

        <CareerRow
          category="🎨 Design & Creative"
          careers={designCareers}
        />

        <CareerRow
          category="🚀 Space & Research"
          careers={spaceCareers}
        />

        <CareerRow
          category="📈 Business & Management"
          careers={businessCareers}
        />

        <CareerRow
          category="🧬 Health & Biotech"
          careers={biotechCareers}
        />

      </section>

    </main>

  );

}