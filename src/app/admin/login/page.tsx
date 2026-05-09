"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { supabase } from "@/lib/supabase";

export default function AdminLoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleLogin(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      const { error } =
        await supabase.auth.signInWithPassword({

          email,
          password,

        });

      if (error) {

        setError(error.message);

        return;

      }

      router.push("/admin");

    } catch {

      setError("Something went wrong");

    } finally {

      setLoading(false);

    }

  }

  return (

    <main
      className="
      min-h-screen
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
      overflow-hidden
      relative
      "
    >

      {/* BACKGROUND GLOW */}

      <div
        className="
        absolute
        w-[700px]
        h-[700px]
        rounded-full
        bg-fuchsia-500/20
        blur-[180px]
        "
      />

      {/* CARD */}

      <div
        className="
        relative
        z-10
        w-full
        max-w-xl
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-10
        "
      >

        {/* HEADING */}

        <p
          className="
          uppercase
          tracking-[0.4em]
          text-fuchsia-400
          text-sm
          mb-6
          "
        >
          StudentPath Admin
        </p>

        <h1
          className="
          text-5xl
          font-black
          leading-tight
          "
        >
          Secure
          <br />
          Dashboard Login
        </h1>

        <p
          className="
          mt-6
          text-zinc-400
          leading-relaxed
          "
        >
          Access the protected admin dashboard
          and manage career content securely.
        </p>

        {/* ERROR */}

        {error && (

          <div
            className="
            mt-6
            rounded-2xl
            bg-red-500/10
            border
            border-red-500/20
            px-5
            py-4
            text-red-400
            "
          >
            {error}
          </div>

        )}

        {/* FORM */}

        <form
          onSubmit={handleLogin}
          className="
          mt-10
          space-y-6
          "
        >

          {/* EMAIL */}

          <div>

            <label
              className="
              block
              mb-3
              text-zinc-400
              "
            >
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              bg-white/5
              border
              border-white/10
              px-5
              py-4
              outline-none
              focus:border-fuchsia-500
              "
            />

          </div>

          {/* PASSWORD */}

          <div>

            <label
              className="
              block
              mb-3
              text-zinc-400
              "
            >
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="
              w-full
              rounded-2xl
              bg-white/5
              border
              border-white/10
              px-5
              py-4
              outline-none
              focus:border-fuchsia-500
              "
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-4
            rounded-2xl
            bg-fuchsia-600
            hover:bg-fuchsia-500
            transition
            font-semibold
            text-lg
            "
          >

            {loading
              ? "Logging in..."
              : "Enter Dashboard"}

          </button>

        </form>

      </div>

    </main>

  );

}