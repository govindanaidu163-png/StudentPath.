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
    (formData.get("insights") as string) || "[]"
  );

  const whyExists = JSON.parse(
    (formData.get("whyExists") as string) || "[]"
  );

  const scenes = JSON.parse(
    (formData.get("scenes") as string) || "[]"
  );

  const pathSteps = JSON.parse(
    (formData.get("pathSteps") as string) || "[]"
  );
  
  const futureRoles = JSON.parse(
    (formData.get("future_roles") as string) || "[]"
  );

  console.log("FUTURE ROLES DATA");
console.log(JSON.stringify(futureRoles,null,2));

console.log("WHY EXISTS DATA");
console.log(whyExists);
  /* UPDATE CAREER */

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

    /* DELETE OLD ROADMAP STEPS */

await supabase
  .from("career_path_steps")
  .delete()
  .eq("career_slug", slug);

  if (pathSteps.length > 0) {

  const formattedSteps =
    pathSteps.map(
      (
        step: any,
        index: number
      ) => ({
        career_slug: slug,

        heading:
          step.heading,

        percentage:
          step.percentage,

        short_description:
          step.short_description,

        display_order:
          index + 1,
      })
    );

  const { error } =
    await supabase

      .from("career_path_steps")

      .insert(
        formattedSteps
      );

  if (error) {

    console.log(
      "ROADMAP ERROR"
    );

    console.log(error);

  }

}

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

          title:
            insight.title,

          short_description:
            insight.short_description,

          deep_details:
            insight.deep_details,

          card_order:
            index + 1,
        })
      );

    const {
      error: insightsError,
    } = await supabase

      .from("career_insights")

      .insert(formattedInsights);

    if (insightsError) {

      console.log(
        insightsError
      );

    }

  }

  /* DELETE OLD WHY EXISTS */

  await supabase
    .from("career_why_exists")
    .delete()
    .eq("career_slug", slug);

  /* INSERT NEW WHY EXISTS */

  if (whyExists.length > 0) {

    const formattedWhyExists =
      whyExists.map(
        (
          block: any,
          index: number
        ) => ({
          career_slug: slug,

          heading:
            block.heading,

          content:
            block.content,

          display_order:
            index + 1,
        })
      );

    const {
      error: whyExistsError,
    } = await supabase

      .from("career_why_exists")

      .insert(
        formattedWhyExists
      );

    if (whyExistsError) {

     console.log("INSERT ERROR");
console.log(whyExistsError);

    }

  }

  /* DELETE OLD SCENES */

await supabase
  .from("career_scenes")
  .delete()
  .eq("career_slug", slug);

/* INSERT NEW SCENES */

if (scenes.length > 0) {

  const formattedScenes =
    scenes.map(
      (
        scene: any,
        index: number
      ) => ({
        career_slug: slug,

        title: scene.title,

        description:
          scene.description,

        image_url:
          scene.image_url,

        display_order:
          index + 1,
      })
    );

  const {
    error: scenesError,
  } = await supabase

    .from("career_scenes")

    .insert(formattedScenes);

  if (scenesError) {

    console.log(
      scenesError
    );

  }

  /* DELETE OLD FUTURE ROLES */

await supabase
  .from("career_future_roles")
  .delete()
  .eq("career_slug", slug);

/* INSERT NEW FUTURE ROLES */

if (futureRoles.length > 0) {

  const formattedRoles =
  futureRoles.map(
    (role: any) => ({
      career_slug: slug,

      role_name:
        role.role_name,

      short_description:
        role.short_description,

      image_url:
        role.image_url,
    })
  );

  const {
    error: rolesError,
  } = await supabase

    .from("career_future_roles")

    .insert(formattedRoles);

  if (rolesError) {

    console.log(
      "FUTURE ROLES ERROR"
    );

    console.log(
      rolesError
    );

  }

}

}

  revalidatePath("/");

  revalidatePath("/explore");

  revalidatePath(
    `/career/${slug}`
  );

  revalidatePath(
    "/admin/careers"
  );

  redirect(
    "/admin/careers"
  );

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