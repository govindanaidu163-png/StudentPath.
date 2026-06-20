"use client";

import { useState } from "react";

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

      whyExists:career.career_why_exists || [],

      scenes: career.career_scenes || [],

      pathSteps: career.career_path_steps || [],

      future_roles: career.career_future_roles || [],
      
      

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

function addWhyBlock() {

  setFormData({
    ...formData,

    whyExists: [
      ...formData.whyExists,

      {
        heading: "",
        content: "",
        display_order:
          formData.whyExists.length + 1,
      },
    ],
  });

}

function removeWhyBlock(index: number) {

  const updatedBlocks =
    formData.whyExists.filter(
      (_: any, i: number) =>
        i !== index
    );

  setFormData({
    ...formData,
    whyExists: updatedBlocks,
  });

}
function updateWhyBlock(
  index: number,
  key: string,
  value: string
) {

  const updatedBlocks =
    [...formData.whyExists];

  updatedBlocks[index] = {
    ...updatedBlocks[index],
    [key]: value,
  };

  setFormData({
    ...formData,
    whyExists: updatedBlocks,
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

  function addScene() {

  setFormData({

    ...formData,

    scenes: [

      ...formData.scenes,

      {

        title: "",

        description: "",

        image_url: "",

        display_order:
          formData.scenes.length + 1,

      },

    ],

  });

}

function removeScene(
  index: number
) {

  const updatedScenes =
    formData.scenes.filter(
      (_: any, i: number) =>
        i !== index
    );

  setFormData({

    ...formData,

    scenes: updatedScenes,

  });

}

function updateScene(
  index: number,

  key: string,

  value: string
) {

  const updatedScenes = [
    ...formData.scenes,
  ];

  updatedScenes[index] = {

    ...updatedScenes[index],

    [key]: value,

  };

  setFormData({

    ...formData,

    scenes: updatedScenes,

  });

}

function addPathStep() {

  setFormData({

    ...formData,

    pathSteps: [

      ...formData.pathSteps,

      {

        heading: "",

        percentage: 0,

        short_description: "",

        display_order:
          formData.pathSteps.length + 1,

      },

    ],

  });

}

function removePathStep(
  index: number
) {

  const updatedSteps =
    formData.pathSteps.filter(
      (_: any, i: number) =>
        i !== index
    );

  setFormData({

    ...formData,

    pathSteps: updatedSteps,

  });

}

function updatePathStep(
  index: number,
  key: string,
  value: any
) {

  const updatedSteps = [
    ...formData.pathSteps,
  ];

  updatedSteps[index] = {

    ...updatedSteps[index],

    [key]: value,

  };

  setFormData({

    ...formData,

    pathSteps: updatedSteps,

  });

}

function addFutureRole() {

  setFormData({

    ...formData,

    future_roles: [

      ...formData.future_roles,

      {

        role_name: "",

        short_description: "",

        image_url: "",

      },

    ],

  });

}

function removeFutureRole(
  index: number
) {

  const updatedRoles =
    formData.future_roles.filter(
      (_: any, i: number) =>
        i !== index
    );

  setFormData({

    ...formData,

    future_roles: updatedRoles,

  });

}

function updateFutureRole(
  index: number,

  key: string,

  value: string
) {

  const updatedRoles = [
    ...formData.future_roles,
  ];

  updatedRoles[index] = {

    ...updatedRoles[index],

    [key]: value,

  };

  setFormData({

    ...formData,

    future_roles: updatedRoles,

  });

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

<input
  type="hidden"
  name="whyExists"
  value={JSON.stringify(formData.whyExists)}
/>

<input
  type="hidden"
  name="scenes"
  value={JSON.stringify(formData.scenes)}
/>


<input
  type="hidden"
  name="pathSteps"
  value={JSON.stringify(formData.pathSteps)}
/>

<input
  type="hidden"
  name="future_roles"
  value={JSON.stringify(formData.future_roles)}
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

{/* WHY THIS CAREER EXISTS */}

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
      title="Why This Career Exists"
      desc="Manage the educational content explaining the origin and purpose of this career."
    />

    <div className="space-y-8">

      {formData.whyExists?.map(
        (block: any, index: number) => (

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
                Section {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeWhyBlock(index)
                }
                className="
                px-4
                py-2
                rounded-xl
                bg-red-500/20
                text-red-300
                "
              >
                Delete
              </button>

            </div>

            <div>

              <label
                className="
                block
                mb-3
                text-zinc-400
                "
              >
                Heading
              </label>

              <input
                value={block.heading || ""}
                onChange={(e) =>
                  updateWhyBlock(
                    index,
                    "heading",
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
                Content
              </label>

              <textarea
                value={block.content || ""}
                onChange={(e) =>
                  updateWhyBlock(
                    index,
                    "content",
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
                "
              />

            </div>

          </div>

        )
      )}

      <button
        type="button"
        onClick={addWhyBlock}
        className="
        w-full
        py-5
        rounded-[28px]
        border
        border-dashed
        border-fuchsia-500/40
        bg-fuchsia-500/10
        "
      >
        + Add Section
      </button>

    </div>

  </div>

</section>

{/* CAREER SCENES */}

<p className="text-red-500">
  Total Scenes: {formData.scenes.length}
</p>

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
      title="Career Scenes"
      desc="Manage the real-world moments students experience inside this career."
    />

    <div className="space-y-8">

      {formData.scenes?.map(
        (scene: any, index: number) => (

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
              justify-between
              items-center
              mb-6
              "
            >

              <h3 className="text-2xl font-black">
                Scene {index + 1}
              </h3>

              <button
                type="button"
                onClick={() =>
                  removeScene(index)
                }
                className="
                px-4
                py-2
                rounded-xl
                bg-red-500/20
                text-red-300
                "
              >
                Delete
              </button>

            </div>

            <div className="space-y-6">

              <input
                value={scene.title || ""}
                onChange={(e) =>
                  updateScene(
                    index,
                    "title",
                    e.target.value
                  )
                }
                placeholder="Scene Title"
                className="
                w-full
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                px-5
                py-4
                "
              />

              <textarea
                value={scene.description || ""}
                onChange={(e) =>
                  updateScene(
                    index,
                    "description",
                    e.target.value
                  )
                }
                placeholder="Scene Description"
                rows={4}
                className="
                w-full
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                px-5
                py-4
                "
              />

             <input
  type="hidden"
  value={scene.image_url || ""}
/>

<ImageUpload
  value={scene.image_url || ""}
  type="image"
  onUpload={(url) =>
    updateScene(
      index,
      "image_url",
      url
    )
  }
/>

            </div>

          </div>

        )
      )}

      <button
        type="button"
        onClick={addScene}
        className="
        w-full
        py-5
        rounded-[28px]
        border
        border-dashed
        border-fuchsia-500/40
        bg-fuchsia-500/10
        "
      >
        + Add Scene
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

      {/* career journey roadmap */}

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

<SectionTitle
title="Career Journey Roadmap"
desc="Define the journey students follow to become this professional."
/>

<div className="space-y-6">

{formData.pathSteps?.map(
(step:any,index:number)=>(

<div
key={index}
className="
rounded-[24px]
border
border-white/10
bg-black/30
p-6
"
>

<div className="
flex
justify-between
items-center
mb-6
">

<h3 className="text-2xl font-black">
Step {index + 1}
</h3>

<button
type="button"
onClick={() =>
removePathStep(index)
}
className="
px-4
py-2
rounded-xl
bg-red-500/20
text-red-300
"
>
Delete
</button>

</div>

<div className="space-y-4">

<input
placeholder="Heading"
value={step.heading || ""}
onChange={(e)=>
updatePathStep(
index,
"heading",
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
"
/>

<input
type="number"
placeholder="Percentage"
value={step.percentage || 0}
onChange={(e)=>
updatePathStep(
index,
"percentage",
Number(e.target.value)
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
"
/>

<textarea
placeholder="Short Description"
value={
step.short_description || ""
}
onChange={(e)=>
updatePathStep(
index,
"short_description",
e.target.value
)
}
rows={4}
className="
w-full
rounded-2xl
bg-white/[0.04]
border
border-white/10
px-5
py-4
"
/>

</div>

</div>

))
}

<button
type="button"
onClick={addPathStep}
className="
w-full
py-5
rounded-[28px]
border
border-dashed
border-fuchsia-500/40
bg-fuchsia-500/10
"
>
+ Add Step
</button>

</div>

</section>

<section>

<SectionTitle
title="Future Career Opportunities"
desc="Show students where this career can take them in the future."
/>

<div className="space-y-6">

{formData.future_roles?.map(
(role:any,index:number)=>(

<div
key={index}
className="
rounded-[24px]
border
border-white/10
bg-black/30
p-6
"
>

<div className="
flex
justify-between
items-center
mb-6
">

<h3 className="text-2xl font-black">
Role {index + 1}
</h3>

<button
type="button"
onClick={() =>
removeFutureRole(index)
}
className="
px-4
py-2
rounded-xl
bg-red-500/20
text-red-300
"
>
Delete
</button>

</div>

<div className="space-y-4">

<input
placeholder="Job Name"
value={role.role_name || ""}
onChange={(e)=>
updateFutureRole(
index,
"role_name",
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
"
/>

<ImageUpload
  value={role.image_url || ""}
  type="image"
  onUpload={(url) =>
    updateFutureRole(
      index,
      "image_url",
      url
    )
  }
/>

<textarea
placeholder="Short Description"
value={
role.short_description || ""
}
onChange={(e)=>
updateFutureRole(
index,
"short_description",
e.target.value
)
}
rows={4}
className="
w-full
rounded-2xl
bg-white/[0.04]
border
border-white/10
px-5
py-4
"
/>

</div>

</div>

))
}

<button
type="button"
onClick={addFutureRole}
className="
w-full
py-5
rounded-[28px]
border
border-dashed
border-fuchsia-500/40
bg-fuchsia-500/10
"
>
+ Add Future Role
</button>

</div>

</section>

      

    </div>

  );

}