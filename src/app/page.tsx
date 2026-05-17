import { redirect } from "next/navigation";

import { supabaseAuth } from "@/lib/auth";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import LandingHero from "@/sections/LandingHero";

import SmoothScroll from "@/components/SmoothScroll";

export default async function Home() {

  const {
    data: { session },
  } = await supabaseAuth.auth.getSession();

  if (session) {

    redirect("/explore");

  }

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-x-hidden
      bg-[#f5f7fb]
      text-black
      "
    >

      {/* SMOOTH SCROLL */}

      <SmoothScroll />

      {/* NAVBAR */}

      <Navbar />

      {/* HERO */}

      <LandingHero />

      {/* HERO TRANSITION */}

      <div
        className="
        relative
        w-full
        h-[180px]
        -mt-2
        z-10
        pointer-events-none
        overflow-hidden
        "
      >

        {/* SMOOTH FADE */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#f5f7fb]/60
          to-[#f5f7fb]
          "
        />

        {/* ATMOSPHERIC GLOW */}

        <div
          className="
          absolute
          left-1/2
          top-0
          -translate-x-1/2
          w-[500px]
          h-[250px]
          rounded-full
          bg-fuchsia-300/20
          blur-[120px]
          "
        />

      </div>

      {/* LIGHT WORLD */}

      <section
        className="
        relative
        overflow-hidden
        "
      >

        {/* LUMINOUS ATMOSPHERE */}

        <div
          className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          "
        >

          {/* TOP LEFT LIGHT */}

          <div
            className="
            absolute
            top-[-180px]
            left-[-120px]
            w-[520px]
            h-[520px]
            rounded-full
            bg-fuchsia-300/25
            blur-[160px]
            animate-pulse
            "
          />

          {/* RIGHT CYAN */}

          <div
            className="
            absolute
            top-[18%]
            right-[-180px]
            w-[520px]
            h-[520px]
            rounded-full
            bg-cyan-300/20
            blur-[180px]
            "
          />

          {/* CENTER PURPLE */}

          <div
            className="
            absolute
            top-[45%]
            left-1/2
            -translate-x-1/2
            w-[650px]
            h-[650px]
            rounded-full
            bg-purple-300/15
            blur-[200px]
            "
          />

          {/* SOFT GRID */}

          <div
            className="
            absolute
            inset-0
            opacity-[0.035]
            "
            style={{
              backgroundImage:
                "linear-gradient(to right, black 1px, transparent 1px), linear-gradient(to bottom, black 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        {/* FUTURE STATEMENT */}

        <section
          className="
          relative
          z-10
          px-6
          md:px-12
          lg:px-24
          py-28
          "
        >

          <div
            className="
            max-w-5xl
            "
          >

            {/* LABEL */}

            <p
              className="
              uppercase
              tracking-[0.4em]
              text-fuchsia-500
              text-xs
              mb-8
              "
            >

              Built For The Next Generation

            </p>

            {/* TITLE */}

            <h2
              className="
              text-4xl
              md:text-6xl
              lg:text-7xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              text-black
              "
            >

              Career discovery
              should feel like
              exploring the future.

            </h2>

            {/* SUBTEXT */}

            <p
              className="
              mt-10
              max-w-2xl
              text-lg
              md:text-xl
              text-zinc-600
              leading-relaxed
              "
            >

              StudentPath combines cinematic storytelling,
              AI-guided exploration, and futuristic design
              to help students discover careers beyond
              traditional expectations.

            </p>

          </div>

        </section>

      </section>

      {/* FOOTER */}

      <Footer />

    </main>

  );

}