export default function ExploreFooter() {
  return (
    <footer
  className="
  mt-24

  border-t border-white/5

  bg-gradient-to-b
  from-transparent
  via-[#040014]
  to-black/40
  "
>

    <div
  className="
  max-w-7xl
  mx-auto

  px-8
  pt-16
  pb-10
  "
>
  <div
    className="
    h-px

    bg-gradient-to-r
    from-transparent
    via-fuchsia-500/40
    to-transparent

    mb-12
    "
  />

  <h2
    className="
    text-4xl
    font-black

    mb-4
    "
  >
    StudentPath
  </h2>

  <p
    className="
    text-zinc-400

    max-w-xl

    leading-relaxed
    "
  >
    Discover careers, exams, colleges and
    skills with AI-powered guidance built
    for students.
  </p>
</div>
      <div
        className="
        max-w-7xl
        mx-auto

        px-8
        py-16

        grid
        grid-cols-2
        md:grid-cols-4

        gap-12
        "
      >
        {/* COMPANY */}

        <div>
          <h3 className="font-bold text-lg mb-5">
            Company
          </h3>

          <p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  About Us
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Careers
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Contact Us
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Privacy Policy
</p>
        </div>

        {/* <div
  className="
  max-w-7xl
  mx-auto

  px-8

  grid
  grid-cols-2
  md:grid-cols-4

  gap-4

  mb-14
  "
>
  {[
    "50K+ Students",
    "500+ Careers",
    "100+ Exams",
    "AI Powered",
  ].map((item) => (
    <div
      key={item}
      className="
      rounded-2xl

      bg-white/5

      border border-white/5

      px-6
      py-5

      text-center

      backdrop-blur-xl
      "
    >
      {item}
    </div>
  ))}
</div> */}

        {/* EXPLORE */}

        <div>
          <h3 className="font-bold text-lg mb-5">
            Explore
          </h3>

          <p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Careers
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Exams
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Colleges
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Skills
</p>
        </div>

        {/* RESOURCES */}

        <div>
          <h3 className="font-bold text-lg mb-5">
            Resources
          </h3>

          <p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  AI Mentor
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Guide Path
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Blog
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Success Stories
</p>
        </div>

        {/* COMMUNITY */}

        <div>
          <h3 className="font-bold text-lg mb-5">
            Community
          </h3>

          <p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Instagram
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  LinkedIn
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  Discord
</p>

<p className="text-zinc-400 hover:text-fuchsia-400 transition-all duration-300 cursor-pointer">
  YouTube
</p>
        </div>
      </div>

      {/* BOTTOM */}

      <div
  className="
  border-t border-white/5

  py-8

  px-8

  text-center
  md:text-left

  flex
  flex-col
  md:flex-row

  items-center
  justify-between

  gap-4
  "
>
  <p className="text-zinc-500">
    © 2026 StudentPath
  </p>

  <p className="text-zinc-500">
    Built for students 
  </p>
</div>
    </footer>
  );
}