import { supabase } from "@/lib/supabase";

import CareerUniverse from "@/components/CareerUniverse";

import CareerHero from "@/components/CareerHero";

import CareerInsights from "@/components/CareerInsights";

import CareerPaths from "@/components/CareerPaths";

import CareerFuture from "@/components/CareerFuture";

import CareerCTA from "@/components/CareerCTA";

import CareerScenes from "@/components/CareerScenes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CareerDetailsPage({
  params,
}: PageProps) {

  const { slug } = await params;

  const { data: career, error } = await supabase
    .from("careers")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !career) {

    return (
      <div
        className="
        min-h-screen
        flex
        items-center
        justify-center
        bg-black
        text-white
        text-2xl
        "
      >
        Career not found.
      </div>
    );

  }

  return (

    <main className="bg-black text-white overflow-hidden">

      {/* HERO */}

      <CareerHero
        title={career.title || "Future Career"}

        tagline={
          career.description ||
          "Explore futuristic opportunities and next-generation career pathways."
        }

        salary={
          career.salary || "₹5L - ₹30L"
        }

        demand={
          career.demand || "Growing"
        }

        difficulty={
          career.difficulty || "Medium"
        }

        futureScope={
          career.future_scope || "Excellent"
        }

        video={
          career.hero_video || "/videos/default.mp4"
        }

        image={
          career.hero_image || "/images/default.jpg"
        }

        primaryColor={
          career.primary_color || "#d946ef"
        }

        secondaryColor={
          career.secondary_color || "#9333ea"
        }
      />

      {/* SCENES */}

      <CareerScenes />

      {/* UNIVERSE */}

      <CareerUniverse
        nodes={career.universe_nodes || []}

        title={
          career.title || "Future Career"
        }
      />

      {/* INSIGHTS */}

      <CareerInsights
        careerSlug={career.slug}
      />

      {/* PATHS */}

      <CareerPaths
        paths={career.paths || []}
      />

      {/* FUTURE */}

      <CareerFuture />

      {/* CTA */}

      <CareerCTA />

    </main>

  );

}