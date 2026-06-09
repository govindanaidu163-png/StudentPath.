
import MobileBottomNav from "@/components/MobileBottomNav";
import { Sparkles } from "lucide-react";

export default function MentorPage() {
  return (
    <main className="min-h-screen bg-black text-white">


      <div className="px-8 py-8">

        {/* Header */}
        <section className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-[#0b1020] via-[#111827] to-[#1a1040] p-10">

          {/* Glow */}
          <div className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-fuchsia-500/20 blur-[120px]" />

          <div className="absolute bottom-[-100px] left-[-100px] w-[260px] h-[260px] bg-blue-500/20 blur-[120px]" />

          {/* Content */}
          <div className="relative z-10 max-w-4xl">

            <div className="
            inline-flex
            items-center gap-2
            px-5 py-2
            rounded-full
            bg-fuchsia-500/10
            border border-fuchsia-500/20
            text-fuchsia-300
            mb-6
            ">
              <Sparkles size={18} />
              AI Mentor
            </div>

            <h1 className="text-6xl font-black leading-tight">

              Your Personal{" "}
              <span className="
              bg-gradient-to-r
              from-fuchsia-400
              to-purple-500
              bg-clip-text
              text-transparent
              ">
                AI Career Guide
              </span>

            </h1>

            <p className="mt-6 text-zinc-300 text-xl leading-relaxed max-w-3xl">

              Ask questions about careers, exams,
              skills, roadmaps, and future opportunities.
              Let AI guide your journey intelligently.

            </p>

          </div>

        </section>

        {/* AI Input */}
        <section className="mt-10">

          <div className="
          border border-white/10
          rounded-[30px]
          bg-white/[0.03]
          p-6
          ">

            <textarea
              placeholder="Ask AI Mentor anything about your future..."
              className="
              w-full h-[140px]
              bg-transparent
              outline-none
              resize-none
              text-lg
              placeholder:text-zinc-500
              "
            />

            <div className="flex items-center justify-between mt-6">

              <div className="flex gap-3 flex-wrap">

                <button className="
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                text-sm
                ">
                  Career Guidance
                </button>

                <button className="
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                text-sm
                ">
                  Exam Strategy
                </button>

                <button className="
                px-4 py-2
                rounded-full
                bg-white/5
                border border-white/10
                text-sm
                ">
                  Roadmaps
                </button>

              </div>

              <button className="
              px-8 py-4
              rounded-full
              bg-gradient-to-r
              from-fuchsia-600
              to-purple-600
              font-semibold
              hover:scale-105
              transition
              ">
                Generate ✨
              </button>

            </div>

          </div>

        </section>

        {/* AI Suggestions */}
        <section className="mt-12">

          <h2 className="text-3xl font-black mb-6">
            Popular AI Suggestions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {[
              "Best careers for introverts",
              "Roadmap to become AI Engineer",
              "Best exams after 12th",
              "Future scope of Cyber Security",
              "How to become a Space Scientist",
              "Skills needed for Data Science",
            ].map((item, index) => (

              <button
                key={index}
                className="
                text-left
                p-6
                rounded-[28px]
                border border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.05]
                transition
                "
              >
                {item}
              </button>

            ))}

          </div>

        </section>

      </div>

      <MobileBottomNav />

    </main>
  );
}