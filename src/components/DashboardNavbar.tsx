"use client";

import Link from "next/link";

import {
  Search,
  Bell,
  Sparkles,
  LogOut,
  User,
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

  async function handleLogout() {

    await supabaseAuth.auth
      .signOut();

    window.location.href = "/";

  }

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
        px-8
        py-5
        "
      >

        {/* LEFT */}

        <div
          className="
          flex
          items-center
          gap-12
          "
        >

          {/* LOGO */}

          <Link
            href="/"
            className="
            text-3xl
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
          gap-4
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

            {/* DROPDOWN */}

            {openProfile && (

              <div
                className="
                absolute
                right-0
                mt-4
                w-[300px]
                overflow-hidden
                rounded-[30px]
                border
                border-white/10
                bg-black/80
                backdrop-blur-2xl
                shadow-[0_0_60px_rgba(0,0,0,0.5)]
                "
              >

                {/* USER */}

                <div
                  className="
                  p-6
                  border-b
                  border-white/10
                  "
                >

                  <div
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      w-14
                      h-14
                      rounded-full
                      bg-gradient-to-r
                      from-fuchsia-600
                      to-purple-600
                      flex
                      items-center
                      justify-center
                      text-xl
                      font-black
                      "
                    >

                      {user?.email
                        ?.charAt(0)
                        ?.toUpperCase()}

                    </div>

                    <div>

                      <p
                        className="
                        text-zinc-500
                        text-sm
                        mb-1
                        "
                      >
                        Logged in as
                      </p>

                      <p
                        className="
                        text-white
                        break-all
                        text-sm
                        "
                      >
                        {user?.email}
                      </p>

                    </div>

                  </div>

                </div>

                {/* MENU */}

                <div className="p-3">

                  <Link
                    href="/profile"
                    className="
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                    rounded-2xl
                    hover:bg-white/[0.06]
                    transition
                    "
                  >

                    <User size={18} />

                    Profile

                  </Link>

                  <button
                    onClick={
                      handleLogout
                    }
                    className="
                    w-full
                    flex
                    items-center
                    gap-3
                    px-4
                    py-4
                    rounded-2xl
                    hover:bg-red-500/10
                    text-red-400
                    transition
                    "
                  >

                    <LogOut
                      size={18}
                    />

                    Logout

                  </button>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

    </header>

  );

}