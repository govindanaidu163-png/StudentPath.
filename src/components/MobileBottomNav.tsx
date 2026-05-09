"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {

  const pathname = usePathname();

  const navItems = [
    {
      name: "Explore",
      icon: "🔍",
      href: "/explore",
    },
    {
      name: "AI Mentor",
      icon: "🤖",
      href: "/mentor",
    },
    {
      name: "Profile",
      icon: "👤",
      href: "/profile",
    },
  ];

  return (

    <div
      className="
      fixed

      bottom-4
      left-4
      right-4

      z-50

      md:hidden
      "
    >

      <div
        className="
        rounded-[30px]

        border border-white/10

        bg-black/70

        backdrop-blur-2xl

        px-2 py-3

        flex items-center justify-around

        shadow-[0_0_60px_rgba(0,0,0,0.5)]
        "
      >

        {navItems.map((item) => {

          const active =
            pathname === item.href;

          return (

            <Link
              key={item.name}
              href={item.href}
              className="
              flex flex-col items-center
              "
            >

              <div
                className={`
                text-2xl

                transition-all
                duration-300

                ${
                  active
                    ? "scale-110"
                    : "opacity-60"
                }
                `}
              >
                {item.icon}
              </div>

              <p
                className={`
                text-xs

                mt-1

                ${
                  active
                    ? "text-fuchsia-400"
                    : "text-zinc-500"
                }
                `}
              >
                {item.name}
              </p>

            </Link>

          );

        })}

      </div>

    </div>

  );

}