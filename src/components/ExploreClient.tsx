"use client";

import { useState } from "react";

import QuickExplore from "@/components/QuickExplore";

import CareerSection from "@/components/sections/CareersSection";
import ExamsSection from "@/components/sections/ExamsSection";

export default function ExploreClient({

  technologyCareers,
  engineeringCareers,
  designCareers,
  spaceCareers,
  businessCareers,
  biotechCareers,

  exams,

}: any) {

  const [
    activeSection,
    setActiveSection,
  ] = useState("careers");

  return (

    <>

      {/* QUICK EXPLORE */}

      <QuickExplore
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* DYNAMIC CONTENT */}

      <div
        className="
        relative

        z-10

        animate-in
        fade-in

        duration-500
        "
      >

        {/* CAREERS */}

        {
          activeSection === "careers" && (

            <CareerSection
              technologyCareers={technologyCareers}
              engineeringCareers={engineeringCareers}
              designCareers={designCareers}
              spaceCareers={spaceCareers}
              businessCareers={businessCareers}
              biotechCareers={biotechCareers}
            />

          )
        }

        {/* EXAMS */}

        {
          activeSection === "exams" && (

            <ExamsSection exams={exams} />

          )
        }

        {/* COLLEGES */}

        {
          activeSection === "colleges" && (

            <div
              className="
              px-6
              md:px-10

              py-20

              text-center
              "
            >

              <h1
                className="
                text-5xl
                md:text-7xl

                font-black

                tracking-[-0.07em]
                "
              >
                Colleges
              </h1>

              <p
                className="
                mt-4

                text-zinc-400

                text-lg
                "
              >
                College section coming soon.
              </p>

            </div>

          )
        }

        {/* SKILLS */}

        {
          activeSection === "skills" && (

            <div
              className="
              px-6
              md:px-10

              py-20

              text-center
              "
            >

              <h1
                className="
                text-5xl
                md:text-7xl

                font-black

                tracking-[-0.07em]
                "
              >
                Skills
              </h1>

              <p
                className="
                mt-4

                text-zinc-400

                text-lg
                "
              >
                Skills section coming soon.
              </p>

            </div>

          )
        }

      </div>

    </>

  );

}