"use client";

import Link from "next/link";


import {
  Search,
  Sparkles,
  SlidersHorizontal,
  Bookmark,
} from "lucide-react";

import {
  useState,
  useEffect,
} from "react";

import { supabaseAuth } from "@/lib/auth";

export default function DashboardNavbar() {

  const [scrolled, setScrolled] =
  useState(false);
  useEffect(() => {

  const handleScroll = () => {

    setScrolled(
      window.scrollY > 500
    );

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

  const [
    openProfile,
    setOpenProfile,
  ] = useState(false);

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
  className={`
  fixed
  top-0
  left-0
  right-0

  z-[9999]

  transition-all
  duration-500

  bg-transparent

  ${
    scrolled
      ? `
        md:bg-[#030014]/85
        md:backdrop-blur-xl
        md:border-b
        md:border-white/10
      `
      : `
        md:bg-transparent
        md:border-transparent
      `
  }
  `}
>

      {/* DESKTOP NAVBAR */}

      <div
        className="
        hidden
        md:flex

        items-center
        justify-between

        px-8
        py-5

        border-b
        border-white/0
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
              
            </span>

          </Link>

          {/* NAVIGATION */}

          <nav
            className="
            flex
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
              HOME
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
          "
        >

          {/* SEARCH */}

          <div
            className="
            flex
            items-center
            gap-3

            px-5
            py-3

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

          {/* PROFILE */}

          <Link
  href="/profile"
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

</Link>

        </div>

      </div>

      {/* MOBILE NAVBAR */}

<div
  className="
  md:hidden
  px-4
  pt-4
  pb-4
  "
>

  <div
    className="
    flex
    items-center
    gap-3
    "
  >

    {/* PROFILE */}

    <Link
      href="/profile"
      className="
      w-14
      h-14
      rounded-full
      border
      border-fuchsia-500/30
      bg-[#0d1324]
      flex
      items-center
      justify-center
      shrink-0
      "
    >

      <span className="font-bold text-lg">

        {user?.email
          ?.charAt(0)
          ?.toUpperCase() || "G"}

      </span>

    </Link>

    {/* SEARCH */}

    <div
      className="
      flex-1
      h-[56px]
      rounded-full
      border
      border-white/10
      bg-[#0d1324]
      px-5
      flex
      items-center
      text-zinc-500
      "
    >

      <Search
        size={22}
        className="
        mr-3
        shrink-0
        "
      />

      <span className="text-base">
        Discover a career
      </span>

    </div>

    {/* SAVE */}

    <button
      className="
      w-14
      h-14
      rounded-full
      border
      border-white/10
      bg-[#0d1324]
      flex
      items-center
      justify-center
      shrink-0
      "
    >

      <Bookmark
        size={22}
        className="text-white"
      />

    </button>

  </div>


      </div>

    </header>

  );

}