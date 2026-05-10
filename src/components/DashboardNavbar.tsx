"use client";

import Link from "next/link";
import ProfilePanel from "@/components/ProfilePanel";

import {
  Search,
  Bell,
  Sparkles,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";

import { supabaseAuth } from "@/lib/auth";

export default function DashboardNavbar() {

  const [openProfile,
    setOpenProfile] =
    useState(false);

  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {

    async function getUser() {

      const {
        data: { user },
      } =
        await supabaseAuth.auth
          .getUser();

      setUser(user);

    }

    getUser();

  }, []);

  return (

    <header
      className="
      sticky
      top-0

      z-50

      w-full

      border-b
      border-white/10

      bg-[#050816]/80

      backdrop-blur-xl
      "
    >

      <div
        className="
        flex

        items-center
        justify-between

        px-4
        md:px-8

        py-4
        md:py-5
        "
      >

        {/* LEFT */}

        <div
          className="
          flex

          items-center

          gap-6
          md:gap-12
          "
        >

          {/* LOGO */}

          <Link
            href="/"
            className="
            text-2xl
            md:text-3xl

            font-black

            tracking-tight
            "
          >

            StudentPath

            <span className="text-fuchsia-500">
              ✦
            </span>

          </Link>

          {/* NAVIGATION */}

          <nav
            className="
            hidden

            lg:flex

            items-center

            gap-8

            text-sm

            font-medium

            text-zinc-300
            "
          >

            <Link
              href="/explore"
              className="
              hover:text-white

              transition
              "
            >
              CAREERS
            </Link>

            <Link
              href="/explore/exams"
              className="
              hover:text-white

              transition
              "
            >
              EXAMS
            </Link>

            <Link
              href="/explore/guide-path"
              className="
              hover:text-white

              transition
              "
            >
              GUIDE PATH
            </Link>

            <Link
              href="/explore/mentor"
              className="
              hover:text-white

              transition

              flex
              items-center

              gap-2
              "
            >

              <Sparkles size={16} />

              AI MENTOR

            </Link>

          </nav>

        </div>

        {/* RIGHT */}

        <div
          className="
          flex

          items-center

          gap-3
          md:gap-4
          "
        >

          {/* SEARCH */}

          <div
            className="
            hidden

            md:flex

            items-center

            gap-3

            px-4
            py-2

            rounded-full

            border
            border-white/10

            bg-white/[0.04]
            "
          >

            <Search
              size={18}
              className="text-zinc-400"
            />

            <input
              type="text"
              placeholder="Search careers..."
              className="
              bg-transparent

              outline-none

              text-sm

              placeholder:text-zinc-500
              "
            />

          </div>

          {/* NOTIFICATION */}

          <button
            className="
            w-11
            h-11

            rounded-full

            border
            border-white/10

            bg-white/[0.04]

            flex

            items-center
            justify-center

            hover:bg-white/[0.08]

            transition
            "
          >

            <Bell size={18} />

          </button>

          {/* PROFILE */}

          <div className="relative">

            <button
              onClick={() =>
                setOpenProfile(
                  !openProfile
                )
              }
              className="
              w-12
              h-12

              rounded-full

              bg-gradient-to-r

              from-fuchsia-600
              to-purple-600

              flex

              items-center
              justify-center

              font-bold

              hover:scale-110

              transition

              shadow-[0_0_25px_rgba(217,70,239,0.6)]
              "
            >

              {user?.email
                ?.charAt(0)
                ?.toUpperCase() || "G"}

            </button>

            {/* PROFILE PANEL */}

            <ProfilePanel
              open={openProfile}
              onClose={() =>
                setOpenProfile(false)
              }
            />

          </div>

        </div>

      </div>

    </header>

  );

}