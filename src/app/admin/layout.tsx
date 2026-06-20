import AdminSidebar from "@/components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      min-h-screen
      bg-black
      text-white
      "
    >
      {/* SIDEBAR */}

      <AdminSidebar />

      {/* CONTENT */}

      <main
        className="
        md:pl-[84px]

        pb-20
        md:pb-0

        transition-all
        duration-500
        "
      >
        {/* BACKGROUND */}

        <div
          className="
          fixed
          inset-0

          pointer-events-none
          "
        >
          {/* GLOW */}

          <div
            className="
            absolute

            top-[-300px]
            right-[-200px]

            w-[900px]
            h-[900px]

            rounded-full

            bg-fuchsia-500/10

            blur-[180px]
            "
          />

          {/* GRID */}

          <div
            className="
            absolute
            inset-0

            opacity-[0.05]

            bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]

            bg-[size:80px_80px]
            "
          />
        </div>

        {/* PAGE */}

        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}