"use client";

import { useState } from "react";

import LivePreviewPanel from "@/components/LivePreviewPanel";
import ImageUpload from "@/components/ImageUpload";

import { updateCareer } from "@/app/admin/actions";

type Props = {
  career: any;
};

export default function AdminCareerForm({
  career,
}: Props) {

  const [formData, setFormData] =
    useState({

      title: career.title || "",

      slug: career.slug || "",

      category: career.category || "",

      salary: career.salary || "",

      demand: career.demand || "",

      difficulty: career.difficulty || "",

      description:
        career.description || "",

      primary_color:
        career.primary_color || "#d946ef",

      secondary_color:
        career.secondary_color || "#9333ea",

      hero_image:
        career.hero_image || "",

      hero_video:
        career.hero_video || "",

      insights:
        career.career_insights || [],

      

    });

  function updateField(
    key: string,
    value: string
  ) {

    setFormData({
      ...formData,
      [key]: value,
    });

  }

  function updateInsight(
  index: number,
  key: string,
  value: string
) {

  const updatedInsights =
    [...formData.insights];

  updatedInsights[index] = {
    ...updatedInsights[index],
    [key]: value,
  };

  setFormData({
    ...formData,
    insights: updatedInsights,
  });

}

function addInsight() {

  setFormData({
    ...formData,

    insights: [
      ...formData.insights,

      {
        small_heading: "",
        title: "",
        short_description: "",
        deep_details: "",
        card_order:
          formData.insights.length + 1,
      },
    ],
  });

}

function removeInsight(index: number) {

  const updatedInsights =
    formData.insights.filter(
      (_: any, i: number) =>
        i !== index
    );

  setFormData({
    ...formData,
    insights: updatedInsights,
  });

}

  function SectionTitle({
    title,
    desc,
  }: {
    title: string;
    desc: string;
  }) {

    return (

      <div className="mb-8">

        <p
          className="
          uppercase
          tracking-[0.35em]
          text-fuchsia-400
          text-xs
          mb-3
          "
        >
          {title}
        </p>

        <p
          className="
          text-zinc-400
          max-w-2xl
          "
        >
          {desc}
        </p>

      </div>

    );

  }

  function Input({
    label,
    name,
    value,
  }: any) {

    return (

      <div>

        <label
          className="
          block
          mb-3
          text-zinc-400
          "
        >
          {label}
        </label>

        <input
          name={name}
          value={value}
          onChange={(e) =>
            updateField(name, e.target.value)
          }
          className="
          w-full
          rounded-2xl
          bg-white/[0.04]
          border
          border-white/10
          px-5
          py-4
          outline-none
          focus:border-fuchsia-500
          transition
          "
        />

      </div>

    );

  }

  return (

    <div
      className="
      grid
      xl:grid-cols-[1fr_620px]
      gap-10
      items-start
      "
    >

      {/* FORM */}

      <form
        action={updateCareer}
        className="
        space-y-10
        "
      >

        {/* HIDDEN INPUTS */}

        <input
          type="hidden"
          name="id"
          value={career.id}
        />

        <input
  type="hidden"
  name="insights"
  value={JSON.stringify(formData.insights)}
/>

        {/* HERO */}

        <section
          className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-8
          lg:p-10
          "
        >

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-br
            from-fuchsia-500/10
            via-transparent
            to-cyan-500/10
            "
          />

          <div className="relative z-10">

            <SectionTitle
              title="Career Identity"
              desc="Core metadata defining the public identity of this career system."
            />

            <div
              className="
              grid
              lg:grid-cols-2
              gap-6
              "
            >

              <Input
                label="Career Title"
                name="title"
                value={formData.title}
              />

              <Input
                label="Slug"
                name="slug"
                value={formData.slug}
              />

              <Input
                label="Category"
                name="category"
                value={formData.category}
              />

              <Input
                label="Salary Range"
                name="salary"
                value={formData.salary}
              />

              <Input
                label="Industry Demand"
                name="demand"
                value={formData.demand}
              />

              <Input
                label="Difficulty"
                name="difficulty"
                value={formData.difficulty}
              />

            </div>

          </div>

        </section>

        {/* VISUAL SYSTEM */}

        <section
          className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-8
          lg:p-10
          "
        >

          <div className="relative z-10">

            <SectionTitle
              title="Visual System"
              desc="Control cinematic visuals, gradients, hero media, and brand atmosphere."
            />

            <div
              className="
              grid
              lg:grid-cols-2
              gap-6
              mb-8
              "
            >

              <Input
                label="Primary Color"
                name="primary_color"
                value={formData.primary_color}
              />

              <Input
                label="Secondary Color"
                name="secondary_color"
                value={formData.secondary_color}
              />

            </div>



            {/* IMAGE */}

{/* HERO IMAGE */}

<div className="mb-10">

  <label
    className="
    block
    mb-4
    text-zinc-400
    text-lg
    "
  >
    Hero Image
  </label>

  <input
    type="hidden"
    name="hero_image"
    value={formData.hero_image}
  />

  <ImageUpload
    value={formData.hero_image}
    onUpload={(url) =>
      setFormData({
        ...formData,
        hero_image: url,
      })
    }
    type="image"
  />

</div>

{/* HERO VIDEO */}

<div>

  <label
    className="
    block
    mb-4
    text-zinc-400
    text-lg
    "
  >
    Hero Video
  </label>

  <input
    type="hidden"
    name="hero_video"
    value={formData.hero_video}
  />

  <ImageUpload
    value={formData.hero_video}
    onUpload={(url) =>
      setFormData({
        ...formData,
        hero_video: url,
      })
    }
    type="video"
  />

</div>

</div>

        </section>

        {/* DESCRIPTION */}

        <section
          className="
          relative
          overflow-hidden
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-2xl
          p-8
          lg:p-10
          "
        >

          <div className="relative z-10">

            <SectionTitle
              title="Narrative & Story"
              desc="Describe the emotional vision, mission, and future potential of this career."
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={(e) =>
                updateField(
                  "description",
                  e.target.value
                )
              }
              rows={8}
              className="
              w-full
              rounded-2xl
              bg-white/[0.04]
              border
              border-white/10
              px-6
              py-5
              outline-none
              focus:border-fuchsia-500
              transition
              leading-relaxed
              "
            />

          </div>

        </section>

        {/* CAREER INSIGHTS */}

<section
  className="
  relative
  overflow-hidden
  rounded-[36px]
  border
  border-white/10
  bg-white/[0.04]
  backdrop-blur-2xl
  p-8
  lg:p-10
  "
>

  <div className="relative z-10">

    <SectionTitle
      title="Career Insights"
      desc="Manage premium insight cards shown inside the public career experience."
    />

    <div className="space-y-8">

      {formData.insights.map(
        (insight: any, index: number) => (

          <div
            key={index}
            className="
            rounded-[28px]
            border
            border-white/10
            bg-black/30
            p-6
            "
          >

            <div
              className="
              flex
              items-center
              justify-between
              mb-6
              "
            >

              <h3
                className="
                text-2xl
                font-black
                "
              >
                Insight {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeInsight(index)
                }
                className="
                px-4
                py-2
                rounded-xl
                bg-red-500/20
                text-red-300
                hover:bg-red-500/30
                transition
                "
              >
                Delete
              </button>

            </div>

            <div
              className="
              grid
              lg:grid-cols-2
              gap-6
              "
            >

              <div>

  <label
    className="
    block
    mb-3
    text-zinc-400
    "
  >
    Small Heading
  </label>

  <input
    value={insight.small_heading || ""}
    onChange={(e) =>
      updateInsight(
        index,
        "small_heading",
        e.target.value
      )
    }
    className="
    w-full
    rounded-2xl
    bg-white/[0.04]
    border
    border-white/10
    px-5
    py-4
    outline-none
    focus:border-fuchsia-500
    transition
    "
  />

</div>

              <div>
  <label
    className="
    block
    mb-3
    text-zinc-400
    "
  >
    Main Title
  </label>

  <input
    value={insight.title || ""}
    onChange={(e) =>
      updateInsight(
        index,
        "title",
        e.target.value
      )
    }
    className="
    w-full
    rounded-2xl
    bg-white/[0.04]
    border
    border-white/10
    px-5
    py-4
    outline-none
    focus:border-fuchsia-500
    transition
    "
  />
</div>


            </div>

            <div className="mt-6">

              <label
                className="
                block
                mb-3
                text-zinc-400
                "
              >
                Short Description
              </label>

              <textarea
                value={
                  insight.short_description
                }
                onChange={(e) =>
                  updateInsight(
                    index,
                    "short_description",
                    e.target.value
                  )
                }
                rows={3}
                className="
                w-full
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                px-5
                py-4
                outline-none
                focus:border-fuchsia-500
                transition
                "
              />

            </div>

            <div className="mt-6">

              <label
                className="
                block
                mb-3
                text-zinc-400
                "
              >
                Deep Details
              </label>

              <textarea
                value={
                  insight.deep_details
                }
                onChange={(e) =>
                  updateInsight(
                    index,
                    "deep_details",
                    e.target.value
                  )
                }
                rows={6}
                className="
                w-full
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                px-5
                py-4
                outline-none
                focus:border-fuchsia-500
                transition
                leading-relaxed
                "
              />

            </div>

          </div>

        )
      )}

      <button
        type="button"
        onClick={addInsight}
        className="
        w-full
        py-5
        rounded-[28px]
        border
        border-dashed
        border-fuchsia-500/40
        bg-fuchsia-500/10
        hover:bg-fuchsia-500/15
        transition-all
        text-lg
        font-semibold
        "
      >
        + Add Insight
      </button>

    </div>

  </div>

</section>

        {/* ACTION BAR */}

        <div
          className="
          sticky
          bottom-6
          z-50
          flex
          justify-end
          "
        >

          <div
            className="
            flex
            items-center
            gap-4
            rounded-[28px]
            border
            border-white/10
            bg-black/60
            backdrop-blur-2xl
            p-4
            shadow-[0_0_50px_rgba(217,70,239,0.25)]
            "
          >

            <button
              type="submit"
              className="
              px-8
              py-4
              rounded-2xl
              bg-fuchsia-600
              hover:bg-fuchsia-500
              transition-all
              duration-300
              font-semibold
              text-lg
              "
            >
              Save Career System
            </button>

          </div>

        </div>

      </form>

      {/* LIVE PREVIEW */}

      <LivePreviewPanel
        data={formData}
      />

    </div>

  );

}