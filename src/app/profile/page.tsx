"use client";

import DashboardNavbar from "@/components/DashboardNavbar";

export default function ProfilePage() {

  return (

    <main
      className="
      min-h-screen
      bg-[#030014]
      text-white
      overflow-x-hidden
      "
    >

      {/* NAVBAR */}

      <DashboardNavbar />

      {/* BACKGROUND */}

      <div
        className="
        fixed inset-0

        pointer-events-none

        bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.14),transparent_30%)]
        "
      />

      <div
        className="
        fixed

        top-[-250px]
        right-[-150px]

        w-[600px]
        h-[600px]

        rounded-full

        bg-fuchsia-500/10

        blur-[140px]
        "
      />

      <div
        className="
        fixed

        bottom-[-300px]
        left-[-180px]

        w-[650px]
        h-[650px]

        rounded-full

        bg-cyan-500/10

        blur-[160px]
        "
      />

      {/* PAGE */}

      <section
        className="
        relative
        z-10

        px-4
        md:px-8
        xl:px-12

        pt-8
        pb-32
        "
      >

        {/* HERO COMMAND CENTER */}

        <section
          className="
          relative

          overflow-hidden

          rounded-[40px]

          border border-white/10

          bg-white/[0.04]

          backdrop-blur-2xl

          p-6
          md:p-10
          xl:p-14
          "
        >

          {/* GRID */}

          <div
            className="
            grid

            grid-cols-1
            xl:grid-cols-[320px_1fr_280px]

            gap-10
            items-center
            "
          >

            {/* LEFT */}

            <div className="flex justify-center">

              <div
                className="
                relative

                w-52
                h-52

                rounded-full

                bg-gradient-to-r
                from-fuchsia-600
                via-purple-600
                to-cyan-500

                p-[3px]
                "
              >

                <div
                  className="
                  w-full
                  h-full

                  rounded-full

                  bg-[#050816]

                  flex
                  items-center
                  justify-center

                  text-7xl
                  font-black
                  "
                >

                  G

                </div>

                {/* ORBIT */}

                <div
                  className="
                  absolute inset-[-18px]

                  rounded-full

                  border border-white/10
                  "
                />

              </div>

            </div>

            {/* CENTER */}

            <div>

              <p
                className="
                uppercase

                tracking-[0.45em]

                text-fuchsia-400

                text-xs

                mb-5
                "
              >

                Future Identity System

              </p>

              <h1
                className="
                text-5xl
                md:text-7xl

                font-black

                leading-[0.9]

                tracking-[-0.06em]
                "
              >

                GOVINDA

              </h1>

              <p
                className="
                mt-5

                text-xl
                md:text-2xl

                text-zinc-300
                "
              >

                Future Systems Architect

              </p>

              <div
                className="
                flex
                flex-wrap

                gap-4

                mt-8
                "
              >

                <div
                  className="
                  px-5 py-3

                  rounded-full

                  border border-fuchsia-500/20

                  bg-fuchsia-500/10

                  text-fuchsia-300

                  text-sm
                  "
                >

                  LEVEL 12

                </div>

                <div
                  className="
                  px-5 py-3

                  rounded-full

                  border border-cyan-500/20

                  bg-cyan-500/10

                  text-cyan-300

                  text-sm
                  "
                >

                  AI SYNC ACTIVE

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div
              className="
              grid

              grid-cols-2
              xl:grid-cols-1

              gap-5
              "
            >

              {[
                ["82%", "Future Readiness"],
                ["14", "Active Missions"],
                ["247", "Signals Processed"],
                ["9", "Saved Futures"],
              ].map(([value, label]) => (

                <div
                  key={label}
                  className="
                  rounded-[28px]

                  border border-white/10

                  bg-white/[0.03]

                  p-5
                  "
                >

                  <h3
                    className="
                    text-3xl

                    font-black
                    "
                  >

                    {value}

                  </h3>

                  <p
                    className="
                    mt-2

                    text-sm

                    text-zinc-400
                    "
                  >

                    {label}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* MAIN GRID */}

        <section
          className="
          grid

          grid-cols-1
          xl:grid-cols-[1.1fr_0.9fr]

          gap-8

          mt-8
          "
        >

          {/* LEFT SIDE */}

          <div className="space-y-8">

            {/* AI CORE */}

            <section
              className="
              rounded-[36px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-8
              "
            >

              <p
                className="
                uppercase

                tracking-[0.35em]

                text-fuchsia-400

                text-xs

                mb-6
                "
              >

                AI Core Analysis

              </p>

              <div className="space-y-5">

                {[
                  "Strongest alignment toward AI + Robotics",
                  "Visual analytical learning behavior detected",
                  "High future adaptability score",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    p-5

                    text-zinc-300
                    "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </section>

            {/* MISSION TRACKER */}

            <section
              className="
              rounded-[36px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-8
              "
            >

              <p
                className="
                uppercase

                tracking-[0.35em]

                text-cyan-400

                text-xs

                mb-6
                "
              >

                Mission Tracker

              </p>

              <div className="space-y-5">

                {[
                  ["Advanced React System", "72%"],
                  ["Machine Learning Core", "41%"],
                  ["AI Portfolio Building", "18%"],
                ].map(([title, progress]) => (

                  <div
                    key={title}
                    className="
                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    p-5
                    "
                  >

                    <div className="flex justify-between">

                      <h3 className="font-semibold">
                        {title}
                      </h3>

                      <p className="text-zinc-400">
                        {progress}
                      </p>

                    </div>

                    <div
                      className="
                      h-2

                      rounded-full

                      bg-white/10

                      overflow-hidden

                      mt-4
                      "
                    >

                      <div
                        className="
                        h-full

                        rounded-full

                        bg-gradient-to-r
                        from-fuchsia-500
                        to-cyan-500
                        "
                        style={{
                          width: progress,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </section>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            {/* SAVED FUTURES */}

            <section
              className="
              rounded-[36px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-8
              "
            >

              <p
                className="
                uppercase

                tracking-[0.35em]

                text-fuchsia-400

                text-xs

                mb-6
                "
              >

                Saved Futures

              </p>

              <div className="space-y-5">

                {[
                  "AI Engineer",
                  "XR Developer",
                  "Space Systems Engineer",
                ].map((career) => (

                  <div
                    key={career}
                    className="
                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    p-5

                    flex
                    items-center
                    justify-between
                    "
                  >

                    <div>

                      <h3 className="font-semibold">
                        {career}
                      </h3>

                      <p
                        className="
                        text-zinc-400

                        text-sm

                        mt-1
                        "
                      >

                        Future Career Path

                      </p>

                    </div>

                    <div
                      className="
                      w-3 h-3

                      rounded-full

                      bg-fuchsia-400
                      "
                    />

                  </div>

                ))}

              </div>

            </section>

            {/* RECENT SIGNALS */}

            <section
              className="
              rounded-[36px]

              border border-white/10

              bg-white/[0.04]

              backdrop-blur-2xl

              p-8
              "
            >

              <p
                className="
                uppercase

                tracking-[0.35em]

                text-cyan-400

                text-xs

                mb-6
                "
              >

                Recent Signals

              </p>

              <div className="space-y-5">

                {[
                  "Viewed Neural Interface Designer",
                  "AI Mentor suggested Cybersecurity",
                  "Explored Robotics Engineering",
                ].map((signal) => (

                  <div
                    key={signal}
                    className="
                    rounded-2xl

                    border border-white/10

                    bg-white/[0.03]

                    p-5

                    text-zinc-300
                    "
                  >

                    {signal}

                  </div>

                ))}

              </div>

            </section>

          </div>

        </section>

      </section>

    </main>

  );

}