import DashboardNavbar from "@/components/DashboardNavbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
import CareerRow from "@/components/CareerRow";
import { supabase } from "@/lib/supabase";
import TrendingHero from "@/components/TrendingCareerCard";

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
        bg-[#030014]
        text-white
        overflow-x-hidden
        relative
        "
      >

        {/* GLOBAL GLOW */}

        <div
          className="
          fixed inset-0

          pointer-events-none

          bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.14),transparent_30%)]
          "
        />

        <div
          className="
          fixed

          top-[-250px]
          right-[-150px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-fuchsia-500/10

          blur-[140px]
          "
        />

        <div
          className="
          fixed

          bottom-[-250px]
          left-[-180px]

          w-[500px]
          h-[500px]

          rounded-full

          bg-cyan-500/10

          blur-[160px]
          "
        />

        {/* NAVBAR */}

        <DashboardNavbar />

        {/* HERO SECTION */}

        <section
          className="
          relative
          z-10

          px-4
          md:px-8

          pt-4
          md:pt-8

          pb-10
          "
        >

          <div className="relative z-10">

            {/* MOBILE */}

            <div
              className="
              md:hidden
              px-1
              "
            >

              {/* EXPLORE SECTION */}

              <section
                className="
                rounded-[34px]

                border border-white/10

                bg-white/[0.03]

                backdrop-blur-2xl

                p-5

                mb-7

                shadow-[0_0_50px_rgba(168,85,247,0.06)]
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

                  <Link
                    href="/explore"
                    className="
                    text-center

                    group
                    "
                  >

                    <div
                      className="
                      aspect-square

                      rounded-[24px]

                      border border-white/10

                      bg-[#0b1020]

                      flex items-center justify-center

                      mb-3

                      transition-all
                      duration-300

                      group-hover:scale-105

                      group-hover:border-fuchsia-500/30

                      shadow-[0_0_30px_rgba(168,85,247,0.06)]
                      "
                    >

                      <Briefcase
                        size={28}
                        className="
                        text-fuchsia-400
                        "
                      />

                    </div>

                    <p className="text-sm">
                      Careers
                    </p>

                  </Link>

                  {/* EXAMS */}

                  <Link
                    href="/exams"
                    className="
                    text-center

                    group
                    "
                  >

                    <div
                      className="
                      aspect-square

                      rounded-[24px]

                      border border-white/10

                      bg-[#0b1020]

                      flex items-center justify-center

                      mb-3

                      transition-all
                      duration-300

                      group-hover:scale-105

                      group-hover:border-cyan-500/30
                      "
                    >

                      <GraduationCap
                        size={28}
                        className="
                        text-cyan-400
                        "
                      />

                    </div>

                    <p className="text-sm">
                      Exams
                    </p>

                  </Link>

                  {/* GUIDE PATH */}

                  <Link
                    href="/guide-path"
                    className="
                    text-center

                    group
                    "
                  >

                    <div
                      className="
                      aspect-square

                      rounded-[24px]

                      border border-white/10

                      bg-[#0b1020]

                      flex items-center justify-center

                      mb-3

                      transition-all
                      duration-300

                      group-hover:scale-105

                      group-hover:border-purple-500/30
                      "
                    >

                      <Compass
                        size={28}
                        className="
                        text-purple-400
                        "
                      />

                    </div>

                    <p className="text-sm">
                      Guide
                    </p>

                  </Link>

                  {/* AI */}

                  <Link
                    href="/mentor"
                    className="
                    text-center

                    group
                    "
                  >

                    <div
                      className="
                      aspect-square

                      rounded-[24px]

                      border border-white/10

                      bg-[#0b1020]

                      flex items-center justify-center

                      mb-3

                      transition-all
                      duration-300

                      group-hover:scale-105

                      group-hover:border-fuchsia-500/30
                      "
                    >

                      <Bot
                        size={28}
                        className="
                        text-fuchsia-400
                        "
                      />

                    </div>

                    <p className="text-sm">
                      AI Mentor
                    </p>

                  </Link>

                </div>

              </section>

              {/* TRENDING */}

              <div className="mb-8">

                <TrendingHero
                  careers={careers}
                />

              </div>

            </div>

            {/* DESKTOP */}

            <div className="hidden md:block">

              <TrendingHero
                careers={careers}
              />

            </div>

          </div>

        </section>

        {/* CAREER ROWS */}

        <section
          className="
          relative
          z-10

          px-4
          md:px-8

          pb-32
          md:pb-24

          space-y-10
          "
        >

          {/* NETFLIX EFFECT WRAPPER */}

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="💻 Technology & AI"
              careers={technologyCareers}
            />

          </div>

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="⚙️ Engineering & Robotics"
              careers={engineeringCareers}
            />

          </div>

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="🎨 Design & Creative"
              careers={designCareers}
            />

          </div>

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="🚀 Space & Research"
              careers={spaceCareers}
            />

          </div>

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="📈 Business & Management"
              careers={businessCareers}
            />

          </div>

          <div
            className="
            transition-all
            duration-500
            "
          >

            <CareerRow
              category="🧬 Health & Biotech"
              careers={biotechCareers}
            />

          </div>

        </section>

      </main>

      {/* MOBILE NAV */}

      <MobileBottomNav />

    </>

  );

}