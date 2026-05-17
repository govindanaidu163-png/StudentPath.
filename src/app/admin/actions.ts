"use server";

import { supabase } from "@/lib/supabase";

import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export async function updateCareer(
  formData: FormData
) {

  const id =
    formData.get("id") as string;

  const title =
    formData.get("title") as string;

  const slug =
    formData.get("slug") as string;

  const category =
    formData.get("category") as string;

  const salary =
    formData.get("salary") as string;

  const demand =
    formData.get("demand") as string;

  const difficulty =
    formData.get("difficulty") as string;

  const description =
    formData.get("description") as string;

  const hero_image =
    formData.get("hero_image") as string;

  const hero_video =
    formData.get("hero_video") as string;

  const primary_color =
    formData.get("primary_color") as string;

  const secondary_color =
    formData.get("secondary_color") as string;

  const insights = JSON.parse(
  formData.get("insights") as string
);

  const { error } = await supabase
    .from("careers")
    .update({
      title,
      slug,
      category,
      salary,
      demand,
      difficulty,
      description,
      hero_image,
      hero_video,
      primary_color,
      secondary_color,
    })
    .eq("id", id);

  if (error) {

    console.log(error);

    throw new Error(
      "Failed to update career"
    );

  }

  /* DELETE OLD INSIGHTS */

await supabase
  .from("career_insights")
  .delete()
  .eq("career_slug", slug);

/* INSERT NEW INSIGHTS */

if (insights.length > 0) {

  const formattedInsights =
    insights.map(
      (
        insight: any,
        index: number
      ) => ({
        career_slug: slug,

        small_heading:
          insight.small_heading,

        title: insight.title,

        short_description:
          insight.short_description,

        deep_details:
          insight.deep_details,

        card_order: index + 1,
      })
    );

  const {
    error: insightsError,
  } = await supabase

    .from("career_insights")

    .insert(formattedInsights);

  if (insightsError) {

    console.log(insightsError);

  }

}

  revalidatePath("/");

  revalidatePath("/explore");

  revalidatePath(`/career/${slug}`);

  revalidatePath("/admin/careers");

  redirect("/admin/careers");

}


export async function createCareer() {

  const { data, error } =
    await supabase
      .from("careers")
      .insert({
        title: "New Career",
        slug:
          "new-career-" +
          Date.now(),

        category: "Future Careers",

        description:
          "New career description",

        salary: "₹5L - ₹20L",

        demand: "Growing",

        difficulty: "Medium",

        future_scope: "Excellent",

        hero_image:
          "/images/default.jpg",

        hero_video:
          "/videos/default.mp4",

        primary_color: "#d946ef",

        secondary_color: "#9333ea",

        universe_nodes: [],


        paths: [],
      })

      .select()

      .single();

  if (error) {

    console.log(error);

    throw new Error(
      "Failed to create career"
    );

  }

  revalidatePath("/admin/careers");

  redirect(
    `/admin/careers/${data.id}`
  );

}