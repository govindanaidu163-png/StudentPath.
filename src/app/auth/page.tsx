"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import Link from "next/link";

import { supabaseAuth } from "@/lib/auth";

export default function AuthPage() {

  const router = useRouter();

  const [mode, setMode] =
    useState<"login" | "signup">(
      "login"
    );

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({

      email: "",

      password: "",

    });

  async function handleAuth(
    e: React.FormEvent
  ) {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      /* LOGIN */

      if (mode === "login") {

        const { error } =
          await supabaseAuth.auth
            .signInWithPassword({

              email:
                formData.email,

              password:
                formData.password,

            });

        if (error) {

          setError(error.message);

          return;

        }

        if (
          formData.email ===
          "govindanaidu163@gmail.com"
        ) {

          router.push("/admin");

        } else {

          router.push("/explore");

        }

      }

      /* SIGNUP */

      else {

        const { error } =
          await supabaseAuth.auth
            .signUp({

              email:
                formData.email,

              password:
                formData.password,

              options: {

                emailRedirectTo:
                  `${window.location.origin}/auth/callback`,

              },

            });

        if (error) {

          setError(error.message);

          return;

        }

        setMode("login");

        setError(
          "Account created successfully. Please login."
        );

      }

    } catch (err) {

      setError(
        "Something went wrong."
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <main
      className="
      relative
      min-h-screen
      overflow-hidden
      bg-black
      text-white
      flex
      items-center
      justify-center
      px-6
      "
    >

      {/* BACKGROUND */}

      <div
        className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.22),transparent_40%)]
        "
      />

      <div
        className="
        absolute
        inset-0
        opacity-[0.06]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:80px_80px]
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
        lg:p-14
        shadow-[0_0_80px_rgba(217,70,239,0.15)]
        "
      >

        {/* TOP */}

        <div
          className="
          flex
          items-center
          justify-between
          mb-10
          "
        >

          <div>

            <p
              className="
              uppercase
              tracking-[0.45em]
              text-fuchsia-400
              text-xs
              mb-4
              "
            >
              StudentPath Access
            </p>

            <h1
              className="
              text-5xl
              font-black
              leading-[0.95]
              tracking-[-0.05em]
              "
            >

              {mode === "login"
                ? (
                  <>
                    Welcome
                    <br />
                    Back
                  </>
                )
                : (
                  <>
                    Create
                    <br />
                    Account
                  </>
                )}

            </h1>

          </div>

          <Link
            href="/"
            className="
            text-zinc-500
            hover:text-white
            transition
            "
          >
            Home
          </Link>

        </div>

        <p
          className="
          text-zinc-400
          text-lg
          leading-relaxed
          mb-10
          "
        >

          {mode === "login"
            ? "Continue exploring the future of intelligent careers."
            : "Begin your future journey with intelligent career discovery."}

        </p>

        {/* TOGGLE */}

        <div
          className="
          mb-8
          grid
          grid-cols-2
          rounded-2xl
          bg-white/[0.04]
          border
          border-white/10
          p-2
          "
        >

          <button
            onClick={() =>
              setMode("login")
            }
            className={`
            py-3
            rounded-xl
            transition
            font-medium

            ${
              mode === "login"
                ? "bg-fuchsia-600 text-white"
                : "text-zinc-400"
            }
            `}
          >
            Login
          </button>

          <button
            onClick={() =>
              setMode("signup")
            }
            className={`
            py-3
            rounded-xl
            transition
            font-medium

            ${
              mode === "signup"
                ? "bg-fuchsia-600 text-white"
                : "text-zinc-400"
            }
            `}
          >
            Signup
          </button>

        </div>

        {/* ERROR */}

        {error && (

          <div
            className="
            mb-6
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-4
            text-red-300
            "
          >
            {error}
          </div>

        )}

        {/* FORM */}

        <form
          onSubmit={handleAuth}
          className="space-y-6"
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
              Email Address
            </label>

            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({

                  ...formData,

                  email:
                    e.target.value,

                })
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
              placeholder="you@example.com"
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
              value={formData.password}
              onChange={(e) =>
                setFormData({

                  ...formData,

                  password:
                    e.target.value,

                })
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
              placeholder={
                mode === "login"
                  ? "Enter your password"
                  : "Create secure password"
              }
            />

          </div>

          {/* BUTTON */}

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            py-5
            rounded-2xl
            bg-fuchsia-600
            hover:bg-fuchsia-500
            transition-all
            duration-300
            font-semibold
            text-lg
            shadow-[0_0_40px_rgba(217,70,239,0.35)]
            disabled:opacity-50
            "
          >

            {loading
              ? (
                mode === "login"
                  ? "Signing In..."
                  : "Creating Account..."
              )
              : (
                mode === "login"
                  ? "Login"
                  : "Create Account"
              )}

          </button>

        </form>

      </div>

    </main>

  );

}