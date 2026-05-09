import DashboardNavbar from "@/components/DashboardNavbar";
import MobileBottomNav from "@/components/MobileBottomNav";
import Link from "next/link";
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

        {/* MOBILE CONTAINER */}

        <section
          className="
          px-4
          md:px-8

          pt-4
          md:pt-10
          "
        >

          {/* TOP NAVIGATION */}

          <div
            className="
            flex items-center justify-around

            mb-5

            border-b border-white/10
            "
          >

            {/* CAREER */}

            <Link
              href="/explore"
              className="
              relative

              pb-4

              text-sm
              font-semibold

              text-fuchsia-400
              "
            >
              Career

              <div
                className="
                absolute

                bottom-0
                left-1/2

                -translate-x-1/2

                w-12
                h-[2px]

                rounded-full

                bg-fuchsia-500
                "
              />

            </Link>

            {/* EXAMS */}

            <Link
              href="/exams"
              className="
              pb-4

              text-sm
              font-medium

              text-zinc-500

              hover:text-white

              transition
              "
            >
              Exam
            </Link>

            {/* GUIDE PATH */}

            <Link
              href="/guide-path"
              className="
              pb-4

              text-sm
              font-medium

              text-zinc-500

              hover:text-white

              transition
              "
            >
              Guide Path
            </Link>

          </div>

          {/* SEARCH */}

          <div className="mb-5">

            <div
              className="
              h-14

              rounded-full

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-xl

              px-5

              flex items-center

              text-zinc-500

              shadow-[0_0_40px_rgba(217,70,239,0.08)]
              "
            >
              🔍 Search future careers...
            </div>

          </div>

          {/* TRENDING CARD */}

          <div
            className="
            relative

            h-[230px]
            md:h-[320px]

            rounded-[30px]

            overflow-hidden

            border border-white/10
            "
          >

            {/* IMAGE */}

            <img
              src="/images/trending-ai.jpg"
              alt="Trending Career"
              className="
              absolute inset-0

              w-full h-full

              object-cover
              "
            />

            {/* OVERLAY */}

            <div
              className="
              absolute inset-0

              bg-gradient-to-r

              from-black/85
              via-black/40
              to-transparent
              "
            />

            {/* CONTENT */}

            <div
              className="
              relative z-10

              h-full

              flex flex-col justify-end

              p-6
              md:p-10
              "
            >

              <p
                className="
                text-fuchsia-400

                text-sm

                mb-2
                "
              >
                Trending Career
              </p>

              <h2
                className="
                text-4xl
                md:text-6xl

                font-black

                leading-[0.9]

                tracking-[-0.05em]

                max-w-[240px]
                md:max-w-[500px]
                "
              >
                Data Scientist
              </h2>

              <p
                className="
                text-zinc-300

                mt-3

                text-sm
                md:text-lg
                "
              >
                High Demand • Great Salary
              </p>

              <button
                className="
                mt-5

                w-fit

                px-6 py-3

                rounded-full

                text-sm
                font-semibold

                text-white

                bg-fuchsia-600

                shadow-[0_0_40px_rgba(217,70,239,0.45)]
                "
              >
                Explore Now
              </button>

            </div>

          </div>

          {/* HERO TEXT */}

          <div
            className="
            mt-10
            md:mt-16
            "
          >

            <p
              className="
              uppercase

              tracking-[0.35em]

              text-fuchsia-400

              text-[10px]
              md:text-xs

              mb-4
              "
            >
              Explore Futures
            </p>

            <h1
              className="
              text-4xl
              sm:text-5xl
              md:text-7xl

              font-black

              leading-[0.92]

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
              mt-5

              text-zinc-400

              text-base
              md:text-lg

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

      {/* MOBILE NAV */}

      <MobileBottomNav />

    </>

  );

}