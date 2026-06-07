"use client";

import {
  Briefcase,
  GraduationCap,
} from "lucide-react";

export default function QuickExplore({
  activeSection,
  setActiveSection,
}: any) {

  return (

    <>

      {/* MOBILE */}

      <div
        className="
        md:hidden

        px-4

        mt-4
        mb-10

        relative
        z-30
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

          <button
            onClick={() =>
              setActiveSection("careers")
            }
            className="
            flex-shrink-0

            text-center

            group
            "
          >

            <div
              className={`
              relative

              w-20 h-20

              rounded-full

              p-[2px]

              transition-all
              duration-300

              ${
                activeSection === "careers"
                  ? `
                  bg-gradient-to-r
                  from-fuchsia-500
                  to-purple-500

                  shadow-[0_0_30px_rgba(217,70,239,0.45)]
                  `
                  : `
                  bg-white/10
                  `
              }
              `}
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

          </button>

          {/* EXAMS */}

          <button
            onClick={() =>
              setActiveSection("exams")
            }
            className="
            flex-shrink-0

            text-center

            group
            "
          >

            <div
              className={`
              relative

              w-20 h-20

              rounded-full

              p-[2px]

              transition-all
              duration-300

              ${
                activeSection === "exams"
                  ? `
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500

                  shadow-[0_0_30px_rgba(34,211,238,0.45)]
                  `
                  : `
                  bg-white/10
                  `
              }
              `}
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

          </button>

          {/* COLLEGES */}

          <button
            onClick={() =>
              setActiveSection("colleges")
            }
            className="
            flex-shrink-0

            text-center

            group
            "
          >

            <div
              className={`
              relative

              w-20 h-20

              rounded-full

              p-[2px]

              transition-all
              duration-300

              ${
                activeSection === "colleges"
                  ? `
                  bg-gradient-to-r
                  from-orange-500
                  to-pink-500

                  shadow-[0_0_30px_rgba(249,115,22,0.45)]
                  `
                  : `
                  bg-white/10
                  `
              }
              `}
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

          </button>

          {/* SKILLS */}

          <button
            onClick={() =>
              setActiveSection("skills")
            }
            className="
            flex-shrink-0

            text-center

            group
            "
          >

            <div
              className={`
              relative

              w-20 h-20

              rounded-full

              p-[2px]

              transition-all
              duration-300

              ${
                activeSection === "skills"
                  ? `
                  bg-gradient-to-r
                  from-yellow-400
                  to-fuchsia-500

                  shadow-[0_0_30px_rgba(234,179,8,0.45)]
                  `
                  : `
                  bg-white/10
                  `
              }
              `}
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

          </button>

        </div>

      </div>

      {/* DESKTOP */}

      <div
        className="
        hidden md:flex

        relative
        z-20

        items-center
        justify-center

        gap-20

        px-8

        mt-6
        mb-20
        "
      >

        {/* CAREERS */}

        <button
          onClick={() =>
            setActiveSection("careers")
          }
          className="text-center group"
        >

          <div
            className={`
            relative

            w-20 h-20

            rounded-full

            p-[3px]

            transition-all
            duration-300

            ${
              activeSection === "careers"
                ? `
                bg-gradient-to-r
                from-fuchsia-500
                to-purple-500

                shadow-[0_0_35px_rgba(217,70,239,0.45)]
                `
                : `
                bg-white/10
                `
            }
            `}
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
                size={42}
                className="text-fuchsia-400"
              />

            </div>

          </div>

          <p
            className="
            mt-4

            text-lg

            font-semibold
            "
          >
            Careers
          </p>

        </button>

        {/* EXAMS */}

        <button
          onClick={() =>
            setActiveSection("exams")
          }
          className="text-center group"
        >

          <div
            className={`
            relative

            w-20 h-20

            rounded-full

            p-[3px]

            transition-all
            duration-300

            ${
              activeSection === "exams"
                ? `
                bg-gradient-to-r
                from-cyan-500
                to-blue-500

                shadow-[0_0_35px_rgba(34,211,238,0.45)]
                `
                : `
                bg-white/10
                `
            }
            `}
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
                size={42}
                className="text-cyan-400"
              />

            </div>

          </div>

          <p
            className="
            mt-4

            text-lg

            font-semibold
            "
          >
            Exams
          </p>

        </button>

      </div>

    </>

  );

}