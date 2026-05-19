import DashboardNavbar from "@/components/DashboardNavbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
import CareerRow from "@/components/CareerRow";
import { supabase } from "@/lib/supabase";
import TrendingHero from "@/components/TrendingCareerCard";

import {
  Briefcase,
  GraduationCap,
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

        <header
  className="
  fixed
  top-0
  left-0
  right-0

  z-[9999]

  backdrop-blur-2xl

  bg-[#030014]/75

  border-b border-white/5
  "
>
  <DashboardNavbar />
</header>

<div className="h-[160px] md:h-[90px]" />

{/* TRENDING SECTION */}

        {/* TRENDING HERO */}

        <section
          className="
          relative
          z-10

          md:px-0

          pt-0

          mb-14 md:mb-0
          "
        >

          {/* MOBILE */}

          <div className="md:hidden px-4 pt-4">

            <TrendingHero
              careers={careers}
            />

          </div>

          {/* DESKTOP */}

          <div className="hidden md:block">

            <TrendingHero
              careers={careers}
            />

          </div>

        </section>

        {/* MOBILE QUICK ACTIONS */}

        <div
          className="
          md:hidden

          px-4

          -mt-8

          relative
          z-30

          mb-8
          "
        >

          <div
            className="
            flex
            items-start

            gap-5

            overflow-x-auto

            scrollbar-hide

            pb-2
            "
          >

            {/* CAREERS */}

            <Link
              href="/explore"
              className="
              flex-shrink-0

              text-center

              group
              "
            >

              <div
                className="
                relative

                w-20 h-20

                rounded-full

                p-[2px]

                bg-gradient-to-r
                from-fuchsia-500
                to-purple-500

                shadow-[0_0_25px_rgba(217,70,239,0.35)]

                transition-all
                duration-300

                group-hover:scale-105
                "
              >

                <div
                  className="
                  w-full h-full

                  rounded-full

                  bg-[#0b1020]

                  flex items-center justify-center
                  "
                >

                  <Briefcase
                    size={30}
                    className="text-fuchsia-400"
                  />

                </div>

              </div>

              <p
                className="
                mt-3

                text-sm

                font-medium
                "
              >

                Careers

              </p>

            </Link>

            {/* EXAMS */}

            <Link
              href="/explore/exams"
              className="
              flex-shrink-0

              text-center

              group
              "
            >

              <div
                className="
                relative

                w-20 h-20

                rounded-full

                p-[2px]

                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                shadow-[0_0_25px_rgba(34,211,238,0.35)]

                transition-all
                duration-300

                group-hover:scale-105
                "
              >

                <div
                  className="
                  w-full h-full

                  rounded-full

                  bg-[#0b1020]

                  flex items-center justify-center
                  "
                >

                  <GraduationCap
                    size={30}
                    className="text-cyan-400"
                  />

                </div>

              </div>

              <p
                className="
                mt-3

                text-sm

                font-medium
                "
              >

                Exams

              </p>

            </Link>

            {/* COLLEGES */}

            <Link
              href="/explore/colleges"
              className="
              flex-shrink-0

              text-center

              group
              "
            >

              <div
                className="
                relative

                w-20 h-20

                rounded-full

                p-[2px]

                bg-gradient-to-r
                from-orange-500
                to-pink-500

                shadow-[0_0_25px_rgba(249,115,22,0.35)]

                transition-all
                duration-300

                group-hover:scale-105
                "
              >

                <div
                  className="
                  w-full h-full

                  rounded-full

                  bg-[#0b1020]

                  flex items-center justify-center

                  text-3xl
                  "
                >

                  🏫

                </div>

              </div>

              <p
                className="
                mt-3

                text-sm

                font-medium
                "
              >

                Colleges

              </p>

            </Link>

            {/* SKILLS */}

            <Link
              href="/explore/skills"
              className="
              flex-shrink-0

              text-center

              group
              "
            >

              <div
                className="
                relative

                w-20 h-20

                rounded-full

                p-[2px]

                bg-gradient-to-r
                from-yellow-400
                to-fuchsia-500

                shadow-[0_0_25px_rgba(234,179,8,0.35)]

                transition-all
                duration-300

                group-hover:scale-105
                "
              >

                <div
                  className="
                  w-full h-full

                  rounded-full

                  bg-[#0b1020]

                  flex items-center justify-center

                  text-3xl
                  "
                >

                  💡

                </div>

              </div>

              <p
                className="
                mt-3

                text-sm

                font-medium
                "
              >

                Skills

              </p>

            </Link>

          </div>

        </div>

        {/* CAREER ROWS */}

        <section
          className="
          relative
          z-20

          px-4
          md:px-8

          md:-mt-[120px]

          pb-32
          md:pb-24

          space-y-5
          "
        >

          <CareerRow
            category="Technology & AI"
            careers={technologyCareers}
          />

          <CareerRow
            category="Engineering & Robotics"
            careers={engineeringCareers}
          />

          <CareerRow
            category="Design & Creative"
            careers={designCareers}
          />

          <CareerRow
            category="Space & Research"
            careers={spaceCareers}
          />

          <CareerRow
            category="Business & Management"
            careers={businessCareers}
          />

          <CareerRow
            category="Health & Biotech"
            careers={biotechCareers}
          />

        </section>

      </main>

      {/* MOBILE NAV */}

      <MobileBottomNav />

    </>

  );

}