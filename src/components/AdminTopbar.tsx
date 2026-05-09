"use client";

import {
  Search,
  Bell,
  Plus,
} from "lucide-react";

type Props = {
  title: string;
  subtitle?: string;
};

export default function AdminTopbar({
  title,
  subtitle,
}: Props) {

  return (

    <header
      className="
      sticky
      top-0
      z-50
      backdrop-blur-2xl
      bg-black/50
      border-b
      border-white/10
      "
    >

      <div
        className="
        px-8
        py-5
        flex
        items-center
        justify-between
        gap-6
        "
      >

        {/* LEFT */}

        <div>

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-fuchsia-400
            text-xs
            mb-2
            "
          >
            StudentPath Control Center
          </p>

          <h1
            className="
            text-3xl
            font-black
            tracking-[-0.04em]
            "
          >
            {title}
          </h1>

          {subtitle && (

            <p
              className="
              text-zinc-400
              mt-2
              "
            >
              {subtitle}
            </p>

          )}

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
            lg:flex
            items-center
            gap-3
            h-[54px]
            w-[320px]
            px-5
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            "
          >

            <Search
              size={18}
              className="text-zinc-500"
            />

            <input
              placeholder="Search systems..."
              className="
              bg-transparent
              outline-none
              w-full
              text-sm
              placeholder:text-zinc-500
              "
            />

          </div>

          {/* CREATE */}

          <button
            className="
            h-[54px]
            px-6
            rounded-2xl
            bg-fuchsia-600
            hover:bg-fuchsia-500
            transition-all
            duration-300
            font-semibold
            flex
            items-center
            gap-3
            shadow-[0_0_40px_rgba(217,70,239,0.35)]
            "
          >

            <Plus size={18} />

            Create

          </button>

          {/* NOTIFICATIONS */}

          <button
            className="
            relative
            w-[54px]
            h-[54px]
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            flex
            items-center
            justify-center
            "
          >

            <Bell size={20} />

            <div
              className="
              absolute
              top-3
              right-3
              w-2
              h-2
              rounded-full
              bg-fuchsia-500
              "
            />

          </button>

          {/* PROFILE */}

          <div
            className="
            relative
            w-[54px]
            h-[54px]
            rounded-2xl
            overflow-hidden
            border
            border-white/10
            "
          >

            <div
              className="
              absolute
              inset-0
              bg-gradient-to-br
              from-fuchsia-500
              to-cyan-400
              "
            />

          </div>

        </div>

      </div>

    </header>

  );

}