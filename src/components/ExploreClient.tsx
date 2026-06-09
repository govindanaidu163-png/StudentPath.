"use client";
import Link from "next/link";
import { useState , useEffect,useRef} from "react";
import QuickExplore from "@/components/QuickExplore";
import {Search,} from "lucide-react";
import CareerSection from "@/components/sections/CareersSection";
import ExamsSection from "@/components/sections/ExamsSection";

export default function ExploreClient({

  technologyCareers,
  engineeringCareers,
  designCareers,
  spaceCareers,
  businessCareers,
  biotechCareers,

  exams,

}: any) {

  const searchRef = useRef(null);
  useEffect(() => {

  function handleClick(
    event: any
  ) {

    if (
      searchRef.current &&
      !(searchRef.current as any)
        .contains(event.target)
    ) {

      setOpenSearch(false);

    }

  }

  document.addEventListener(
    "mousedown",
    handleClick
  );

  return () =>
    document.removeEventListener(
      "mousedown",
      handleClick
    );

}, []);

const [
  activeSection,
  setActiveSection,
] = useState("careers");

const [search, setSearch] = useState("");
const [openSearch, setOpenSearch] =
  useState(false);

  const allItems = [

  ...technologyCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...engineeringCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...designCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...spaceCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...businessCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...biotechCareers.map((c: any) => ({
    type: "career",
    title: c.title,
    slug: c.slug,
  })),

  ...exams.map((e: any) => ({
    type: "exam",
    title: e.title,
    slug: e.slug,
  })),
];

const filteredResults =
  search.length > 0
    ? allItems.filter((item) =>
        item.title
          .toLowerCase()
          .includes(search.toLowerCase())
      )
    : [];

  return (

    <>
    <div
className="
w-full

max-w-4xl
md:max-w-5xl

mx-auto

relative
"
>

  <div
    ref={searchRef}
    className="
    max-w-2xl

    mx-auto

    relative
    "
  >
    <Search
  size={20}
  className="
  absolute

  left-5
  top-1/2

  -translate-y-1/2

  text-zinc-500
  "
/>

    {/* <input
    
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setOpenSearch(true);
      }}
      placeholder="444"
      className="
      w-full

      h-16
      text-lg

      rounded-3xl

      bg-black/40

      border border-white/10

      backdrop-blur-xl

      pl -16
      pr-6

      text-white

      outline-none
      "
    /> */}

    {openSearch &&
      search.length > 0 && (

        <div
          className="
          absolute

          top-20

          left-0
          right-0

          rounded-2xl

          overflow-hidden

          bg-[#09090f]

          border border-white/10

          shadow-2xl
          "
        >

          {filteredResults
            .slice(0, 5)
            .map((item, index) => (

              <Link
                key={index}
                href={
                  item.type === "career"
                    ? `/career/${item.slug}`
                    : `/exam/${item.slug}`
                }
                className="
                block

                px-5
                py-4

                border-b
                border-white/5

                hover:bg-white/5

                transition
                "
              >

               <div
  className="
  flex
  items-center

  gap-3
  "
>

  <span>

    {item.type === "career"
      ? "💼"
      : "🎓"}

  </span>

  <span className="font-medium">

    {item.title}

  </span>

</div>

                <div
                  className="
                  text-xs

                  text-zinc-500

                  mt-1
                  "
                >
                  {item.type}
                </div>

              </Link>

            ))}
            {
  filteredResults.length === 0 && (

    <div
      className="
      py-8

      text-center

      text-zinc-500
      "
    >

      No results found

    </div>

  )
}

        </div>

      )}

  </div>

</div>

      {/* QUICK EXPLORE */}

      <QuickExplore
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* DYNAMIC CONTENT */}

      <div
        className="
        relative

        z-10
        md:ml-[60px]

        animate-in
        fade-in

        duration-500
        "
      >

        {/* CAREERS */}

        {
          activeSection === "careers" && (

            <CareerSection
              technologyCareers={technologyCareers}
              engineeringCareers={engineeringCareers}
              designCareers={designCareers}
              spaceCareers={spaceCareers}
              businessCareers={businessCareers}
              biotechCareers={biotechCareers}
            />

          )
        }

        {/* EXAMS */}

        {
          activeSection === "exams" && (

            <ExamsSection exams={exams} />

          )
        }

        {/* COLLEGES */}

        {
          activeSection === "colleges" && (

            <div
              className="
              px-6
              md:px-10

              py-20

              text-center
              "
            >

              <h1
                className="
                text-5xl
                md:text-7xl

                font-black

                tracking-[-0.07em]
                "
              >
                Colleges
              </h1>

              <p
                className="
                mt-4

                text-zinc-400

                text-lg
                "
              >
                College section coming soon.
              </p>

            </div>

          )
        }

        {/* SKILLS */}

        {
          activeSection === "skills" && (

            <div
              className="
              px-6
              md:px-10

              py-20

              text-center
              "
            >

              <h1
                className="
                text-5xl
                md:text-7xl

                font-black

                tracking-[-0.07em]
                "
              >
                Skills
              </h1>

              <p
                className="
                mt-4

                text-zinc-400

                text-lg
                "
              >
                Skills section coming soon.
              </p>

            </div>

          )
        }

      </div>

    </>

  );

}