"use client";

import Link from "next/link";

import {
  useState,
  useEffect,
} from "react";

import {
  User,
  LogOut,
  LayoutDashboard,
} from "lucide-react";

import { supabaseAuth }
from "@/lib/auth";

export default function Navbar() {

  const [scrolled, setScrolled] =
    useState(false);

  const [user, setUser] =
    useState<any>(null);

  const [open, setOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(
        window.scrollY > 50
      );

    };

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      }
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

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
      className={`
      fixed
      top-0
      left-0
      w-full
      z-50
      transition-all
      duration-500
      ease-out

      ${
        scrolled
          ? `
          bg-white/[0.06]
          backdrop-blur-2xl
          border-b
          border-white/[0.08]
          shadow-[0_4px_60px_rgba(0,0,0,0.4)]
          `
          : `
          bg-transparent
          border-b
          border-transparent
          `
      }
      `}
    >

      <nav
        className="
        w-full
        px-8
        lg:px-12
        py-5
        flex
        items-center
        justify-between
        "
      >

        {/* LEFT */}

        <div className="flex-1">

          <Link
            href="/"
            className="
            text-3xl
            font-black
            text-white
            tracking-tight
            "
          >

            StudentPath

            <span className="text-fuchsia-500 ml-1">
              ✦
            </span>

          </Link>

        </div>

        {/* CENTER */}

        <div
          className="
          hidden
          lg:flex
          items-center
          gap-10
          "
        >

          <Link
            href="/about"
            className="
            text-zinc-300
            hover:text-white
            transition
            duration-300
            "
          >
            About
          </Link>

          <Link
            href="/explore"
            className="
            text-zinc-300
            hover:text-white
            transition
            duration-300
            "
          >
            Careers
          </Link>

          <Link
            href="/mentor"
            className="
            text-zinc-300
            hover:text-white
            transition
            duration-300
            "
          >
            AI Mentor
          </Link>

          <Link
            href="/future"
            className="
            text-zinc-300
            hover:text-white
            transition
            duration-300
            "
          >
            Future
          </Link>

        </div>

        {/* RIGHT */}

        <div
          className="
          flex-1
          flex
          items-center
          justify-end
          gap-5
          "
        >

          {/* LOGGED OUT */}

          {!user && (

            <Link
              href="/auth"
              className="
              px-6
              py-3
              rounded-full
              bg-gradient-to-r
              from-fuchsia-600
              to-purple-600
              text-white
              font-medium
              hover:scale-105
              transition
              duration-300
              shadow-[0_0_30px_rgba(217,70,239,0.35)]
              "
            >
              Get Started
            </Link>

          )}

          {/* LOGGED IN */}

          {user && (

            <div className="relative">

              {/* AVATAR */}

              <button
                onClick={() =>
                  setOpen(!open)
                }
                className="
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/[0.06]
                backdrop-blur-xl
                flex
                items-center
                justify-center
                hover:bg-white/[0.1]
                transition
                "
              >

                <User size={20} />

              </button>

              {/* DROPDOWN */}

              {open && (

                <div
                  className="
                  absolute
                  right-0
                  mt-4
                  w-[280px]
                  overflow-hidden
                  rounded-[28px]
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
                    p-5
                    border-b
                    border-white/10
                    "
                  >

                    <p
                      className="
                      text-zinc-500
                      text-sm
                      mb-2
                      "
                    >
                      Signed in as
                    </p>

                    <p
                      className="
                      text-white
                      break-all
                      "
                    >
                      {user.email}
                    </p>

                  </div>

                  {/* LINKS */}

                  <div className="p-3">

                    <Link
                      href="/explore"
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

                      <LayoutDashboard
                        size={18}
                      />

                      Explore

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

          )}

        </div>

      </nav>

    </header>

  );

}