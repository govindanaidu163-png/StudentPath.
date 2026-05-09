"use client";

import { useState } from "react";

import {
  Upload,
  Trash2,
  ImageIcon,
  Video,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type Props = {
  value?: string;

  onUpload: (url: string) => void;

  type?: "image" | "video";
};

export default function ImageUpload({
  value,
  onUpload,
  type = "image",
}: Props) {

  const [uploading, setUploading] =
    useState(false);

  const isVideo =
    type === "video";

  async function handleUpload(
    e: React.ChangeEvent<HTMLInputElement>
  ) {

    const file =
      e.target.files?.[0];

    if (!file) return;

    try {

      setUploading(true);

      const fileName =
        `${Date.now()}-${file.name}`;

      const { error } =
        await supabase.storage
          .from("career-media")
          .upload(fileName, file);

      if (error) {

        console.log(error);

        return;
      }

      const { data } =
        supabase.storage
          .from("career-media")
          .getPublicUrl(fileName);

      onUpload(data.publicUrl);

    } catch (err) {

      console.log(err);

    } finally {

      setUploading(false);

    }

  }

  async function handleDelete() {

    if (!value) return;

    try {

      const fileName =
        value.split("/").pop();

      if (!fileName) return;

      const { error } =
        await supabase.storage
          .from("career-media")
          .remove([fileName]);

      if (error) {

        console.log(error);

        return;
      }

      onUpload("");

    } catch (err) {

      console.log(err);

    }

  }

  return (

    <div className="space-y-5">

      {/* PREVIEW */}

      {value && (

        <div
          className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.04]
          "
        >

          {/* IMAGE */}

          {!isVideo && (

            <img
              src={value}
              alt="preview"
              className="
              w-full
              h-[320px]
              object-cover
              "
            />

          )}

          {/* VIDEO */}

          {isVideo && (

            <video
              src={value}
              controls
              className="
              w-full
              h-[320px]
              object-cover
              bg-black
              "
            />

          )}

          {/* DELETE BUTTON */}

          <button
            type="button"
            onClick={handleDelete}
            className="
            absolute
            top-4
            right-4
            w-12
            h-12
            rounded-2xl
            bg-red-500/90
            hover:bg-red-500
            flex
            items-center
            justify-center
            transition-all
            duration-300
            shadow-[0_0_30px_rgba(239,68,68,0.5)]
            "
          >

            <Trash2 size={20} />

          </button>

        </div>

      )}

      {/* UPLOAD AREA */}

      <label
        className="
        group
        relative
        overflow-hidden
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-[220px]
        rounded-[32px]
        border
        border-dashed
        border-white/15
        bg-white/[0.03]
        hover:bg-white/[0.05]
        transition-all
        duration-500
        cursor-pointer
        "
      >

        {/* GLOW */}

        <div
          className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
          bg-gradient-to-br
          from-fuchsia-500/10
          via-transparent
          to-cyan-500/10
          "
        />

        <input
          type="file"
          accept={
            isVideo
              ? "video/*"
              : "image/*"
          }
          className="hidden"
          onChange={handleUpload}
        />

        <div className="relative z-10 text-center">

          <div
            className="
            w-20
            h-20
            rounded-[24px]
            bg-white/10
            border
            border-white/10
            flex
            items-center
            justify-center
            mx-auto
            mb-6
            "
          >

            {isVideo ? (
              <Video size={34} />
            ) : (
              <ImageIcon size={34} />
            )}

          </div>

          <p
            className="
            text-xl
            font-semibold
            mb-2
            "
          >

            {uploading
              ? "Uploading..."
              : isVideo
              ? "Upload cinematic video"
              : "Upload cinematic image"}

          </p>

          <p className="text-zinc-500">

            Drag & drop or click to upload

          </p>

        </div>

      </label>

    </div>

  );

}