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
      className="
      sticky
      top-0
      z-50
      w-full

      bg-[#050816]/95

      backdrop-blur-2xl
      "
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
        border-white/10
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
        pt-3
        pb-3
        "
      >

        {/* TOP SECTION */}

        <div
          className="
          flex
          items-start
          justify-between

          mb-4
          "
        >

          {/* LEFT */}

          <div
            className="
            flex
            items-center
            gap-3
            "
          >

            {/* PROFILE IMAGE */}

            <Link
  href="/profile"
  className="
  w-14 h-14
  rounded-full
  overflow-hidden
  border
  border-fuchsia-500/30
  block
  "
>
  </Link>

            {/* TEXT */}

            <div className="pt-1">

              <p
                className="
                text-zinc-400
                text-[16px]
                mb-1
                "
              >
                Hi Govinda
              </p>

              <h1
                className="
                text-[1.5rem]

                leading-[0.8]

                font-bold

                tracking-[-0.09em]
                "
              >
                Good Morning
              </h1>

            </div>

          </div>

          {/* SAVE */}

          <div
            className="
            flex
            flex-col
            items-center

            pt-1
            "
          >

            <button
              className="
              w-10
              h-10

              rounded-2xl

              border
              border-white/10

              bg-[#0d1324]

              flex
              items-center
              justify-center

              mb-2
              "
            >

              <Bookmark
                size={22}
                className="text-white"
              />

            </button>

            <span
              className="
              text-[13px]
              text-zinc-400
              "
            >
              Save
            </span>

          </div>

        </div>

        {/* SEARCH ROW */}

        <div
          className="
          flex
          gap-2
          "
        >

          {/* SEARCH */}

          <div
            className="
            flex-1

            h-[54px]

            rounded-[25px]
            mx-1

            border
            border-white/10

            bg-[#0d1324]
            px-4

            flex
            items-center

            text-zinc-500
            "
          >

            <Search
              size={30}
              className="
              mr-4
              shrink-0
              "
            />

            <span className="text-[1.15rem]">
              Discover a career
            </span>

          </div>

          {/* FILTER */}

          <button
            className="
            w-[54px]
            h-[54px]

            rounded-[30px]

            bg-gradient-to-br
            from-fuchsia-600
            to-purple-600

            flex
            items-center
            justify-center

            shadow-[0_0_45px_rgba(217,70,239,0.35)]
            "
          >

            <SlidersHorizontal
              size={30}
            />

          </button>

        </div>

      </div>

    </header>

  );

}