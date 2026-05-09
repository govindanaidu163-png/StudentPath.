import { redirect } from "next/navigation";

import { supabaseAuth }
from "@/lib/auth";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import LandingHero
from "@/sections/LandingHero";

import CareerUniverse
from "@/sections/CareerUniverse";

import PossibilitySection
from "@/sections/PossibilitySection";

import AIMentorReveal
from "@/sections/AIMentorReveal";

import FinalLeap
from "@/sections/FinalLeap";

import UniverseAtmosphere
from "@/sections/UniverseAtmosphere";

import SmoothScroll
from "@/components/SmoothScroll";

import HiddenFutures
from "@/sections/HiddenFutures";

export default async function Home() {

  const {
    data: { session },
  } =
    await supabaseAuth.auth
      .getSession();

  if (session) {

    redirect("/explore");

  }

  return (

    <main
      className="
      bg-black
      text-white
      min-h-screen
      overflow-hidden
      "
    >

      <Navbar />

      <LandingHero />

      <CareerUniverse />

      <PossibilitySection />

      <AIMentorReveal />

      <FinalLeap />

      <UniverseAtmosphere />

      <SmoothScroll />

      <HiddenFutures />

      <Footer />

    </main>

  );

}