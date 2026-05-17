import DashboardNavbar from "@/components/DashboardNavbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
import CareerRow from "@/components/CareerRow";
import { supabase } from "@/lib/supabase";
import TrendingHero from "@/components/TrendingHero";

import {
  Briefcase,
  GraduationCap,
  Compass,
  Bot,
} from "lucide-react";

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

    <>

      <main
        className="
        min-h-screen
        bg-black
        text-white
        overflow-x-hidden
        "
      >

        {/* NAVBAR */}

        <DashboardNavbar />

        {/* HERO SECTION */}

        <section
          className="
          relative
          px-4
          md:px-8
          pt-4
          md:pt-0
          pb-10
          "
        >

          {/* BACKGROUND GLOW */}

          <div
            className="
            absolute
            top-[-300px]
            left-1/2
            -translate-x-1/2
            w-[700px]
            md:w-[1100px]
            h-[700px]
            md:h-[1100px]
            rounded-full
            bg-cyan-500/5
            blur-[120px]
            md:blur-[180px]
            "
          />

          <div className="relative z-10">

{/* MOBILE TOP SECTION */}

<div className="md:hidden
px-1">

  {/* GREETING */}

  <div
    className="
    flex
    items-center
    justify-between
    mb-3 px-1
    "
  >

    <div className="flex items-center gap-4">
    </div>

  </div>

  {/* EXPLORE SECTION */}

  <section
    className="
    rounded-[34px]
    border border-white/10
    bg-transparent
    p-5
    mb-7
    "
  >

    {/* TITLE */}

    <div
      className="
      flex
      items-center
      justify-between
      mb-5
      "
    >

      <h2
        className="
        text-[1.5rem]
        font-bold
        tracking-[-0.04em]
        leading-none
        "
      >
        Explore
      </h2>

      <button
        className="
        text-fuchsia-400
        text-sm
        font-medium
        "
      >
        Show all
      </button>

    </div>

    {/* GRID */}

    <div
      className="
      grid
      grid-cols-4
      gap-4
      "
    >

      {/* CAREERS */}

      <div className="text-center">

        <div
          className="
          aspect-square
          rounded-[24px]
          border border-white/10
          bg-[#0b1020]
          flex items-center justify-center
          mb-3
          "
        >
          <span className="text-3xl">
            💼
          </span>
        </div>

        <p className="text-sm">
          Careers
        </p>

      </div>

      {/* EXAMS */}

      <div className="text-center">

        <div
          className="
          aspect-square
          rounded-[24px]
          border border-white/10
          bg-[#0b1020]
          flex items-center justify-center
          mb-3
          "
        >
          <span className="text-3xl">
            🎓
          </span>
        </div>

        <p className="text-sm">
          Exams
        </p>

      </div>

      {/* COLLEGES */}

      <div className="text-center">

        <div
          className="
          aspect-square
          rounded-[24px]
          border border-white/10
          bg-[#0b1020]
          flex items-center justify-center
          mb-3
          "
        >
          <span className="text-3xl">
            🏫
          </span>
        </div>

        <p className="text-sm">
          Colleges
        </p>

      </div>

      {/* SKILLS */}

      <div className="text-center">

        <div
          className="
          aspect-square
          rounded-[24px]
          border border-white/10
          bg-[#0b1020]
          flex items-center justify-center
          mb-3
          "
        >
          <span className="text-3xl">
            💡
          </span>
        </div>

        <p className="text-sm">
          Skills
        </p>

      </div>

    </div>

  </section>

  {/* TRENDING */}

  <div className="mb-8">

    {/* HEADER */}

    <div
      className="
      flex
      items-center
      justify-between
      mb-4
      "
    >

      <h2
        className="
        text-[1.5rem]
        font-bold
        tracking-[-0.04em]
        leading-none
        "
      >
        Trendings
      </h2>

      <button
        className="
        text-fuchsia-400
        text-sm
        font-medium
        "
      >
        Show all
      </button>

    </div>

    {/* CARD */}

    <div
      className="
      relative
      overflow-hidden
      rounded-[28px]
      border border-white/10
      bg-transparent
      "
    >

      {/* IMAGE */}

      <img
        src="/images/trending-ai.jpg"
        alt="Trendings"
        className="
        w-full
        h-[150px]
        object-cover
        "
      />

      {/* SAVE */}

      <button
        className="
        absolute
        top-5
        right-5
        w-10 h-10
        rounded-2xl
        bg-white/20
        backdrop-blur-xl
        flex items-center justify-center
        text-2xl
        "
      >
        ♡
      </button>

      {/* CONTENT */}

      <div className="p-3">

        <h3
          className="
          text-[1.5rem]
          font-bold
          tracking-[-0.05em]
          mb-3
          "
        >
          Software Engineer
        </h3>

        <p
          className="
          text-zinc-400
          text-base
          leading-relaxed
          "
        >
          High Demand • Great Salary • Future Ready
        </p>

        <p
          className="
          mt-5
          text-fuchsia-400
          text-sm
          "
        >
          24.5K students interested
        </p>

      </div>

    </div>

  </div>

</div>

            {/* DESKTOP HERO */}

            <div className="hidden md:block">

              <TrendingHero />

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
                  text-7xl
                  font-black
                  leading-[0.9]
                  tracking-[-0.06em]
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
                  text-xl
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

          </div>

        </section>

        {/* CAREER ROWS */}

        <section
          className="
          px-4
          md:px-8
          pb-32
          md:pb-24
          "
        >

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

      {/* MOBILE BOTTOM NAV */}

      <MobileBottomNav />

    </>

  );

}