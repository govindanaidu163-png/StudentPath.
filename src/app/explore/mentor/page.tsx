"use client";

import {
useState,
useRef,
useEffect,
} from "react";

export default function MentorPage() {

const [message, setMessage] =
useState("");

const [loading, setLoading] =
useState(false);

const [messages, setMessages] =
useState<any[]>([]);

const bottomRef =
useRef<HTMLDivElement>(null);

useEffect(() => {
bottomRef.current?.scrollIntoView({
behavior: "smooth",
});
}, [messages, loading]);

const suggestions = [
"I am in Class 11 and like coding. Suggest careers.",
"Best exams after 12th science?",
"Future scope of AI Engineering?",
"Top colleges for Computer Science?",
];

async function askMentor() {

if (!message.trim()) return;

const userMessage = {
  role: "user",
  content: message,
};

setMessages((prev) => [
  ...prev,
  userMessage,
]);

setLoading(true);

try {

  const res = await fetch(
    "/api/mentor",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        messages: [
          ...messages,
          {
            role: "user",
            content: message,
          },
        ],
      }),
    }
  );

  const data =
    await res.json();

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content: data.reply,
    },
  ]);

  setMessage("");

} catch (error) {

  setMessages((prev) => [
    ...prev,
    {
      role: "assistant",
      content:
        "Sorry, something went wrong.",
    },
  ]);

}

setLoading(false);

}

return (

<main
  className="
  min-h-screen

  bg-[#030014]

  text-white

  relative

  px-4
  md:px-8

  py-8
  "
>

  {/* BACKGROUND GLOWS */}

  <div
    className="
    fixed

    top-[-200px]
    right-[-200px]

    w-[450px]
    h-[450px]

    rounded-full

    bg-fuchsia-500/10

    blur-[140px]

    pointer-events-none
    "
  />

  <div
    className="
    fixed

    bottom-[-200px]
    left-[-200px]

    w-[450px]
    h-[450px]

    rounded-full

    bg-cyan-500/10

    blur-[140px]

    pointer-events-none
    "
  />

  {/* HEADER */}

  <div
    className="
    max-w-5xl

    mx-auto

    mb-10
    "
  >

    <div
      className="
      inline-flex

      items-center

      gap-2

      px-4
      py-2

      rounded-full

      border
      border-fuchsia-500/20

      bg-white/5

      text-sm
      "
    >

      🤖 StudentPath AI Mentor

    </div>

    <h1
      className="
      mt-5

      text-4xl
      md:text-6xl

      font-black
      "
    >

      Ask Anything

    </h1>

    <p
      className="
      mt-3

      text-zinc-400

      max-w-2xl
      "
    >

      Careers, exams, colleges,
      roadmaps, skills and future
      planning.

    </p>

  </div>

  {/* CHAT */}

  <div
    className="
    max-w-5xl

    mx-auto

    min-h-[55vh]

    flex
    flex-col

    gap-4
    "
  >

    {messages.length === 0 && (

      <>

        <div
          className="
          text-center

          py-10
          "
        >

          <div className="text-6xl">
            🤖
          </div>

          <h2
            className="
            mt-4

            text-2xl

            font-bold
            "
          >

            Your Personal AI Mentor

          </h2>

          <p
            className="
            mt-2

            text-zinc-500
            "
          >

            Start with one of these:

          </p>

        </div>

        <div
          className="
          grid

          gap-3
          "
        >

          {suggestions.map(
            (item) => (

              <button
                key={item}

                onClick={() =>
                  setMessage(item)
                }

                className="
                p-4

                rounded-2xl

                bg-white/5

                border
                border-white/10

                text-left

                hover:border-fuchsia-500/50

                transition-all
                "
              >

                {item}

              </button>

            )
          )}

        </div>

      </>

    )}

    {messages.map(
      (msg, index) => (

        <div
          key={index}

          className={`
          max-w-[92%]
          sm:max-w-[85%]
          md:max-w-[70%]

          p-5

          rounded-3xl

          whitespace-pre-wrap

          ${
            msg.role === "user"
              ? `
              ml-auto

              bg-gradient-to-r
              from-fuchsia-600
              to-purple-600
              `
              : `
              bg-white/5

              border
              border-white/10
              `
          }
          `}
        >

          {msg.content}

        </div>

      )
    )}

    {loading && (

      <div
        className="
        w-fit

        bg-white/5

        border
        border-white/10

        rounded-3xl

        p-5
        "
      >

        🤖 Thinking...

      </div>

    )}

    <div ref={bottomRef} />

  </div>

  {/* INPUT */}

  <div
    className="
    max-w-5xl

    mx-auto

    mt-8

    sticky
    bottom-4
    "
  >

    <div
      className="
      bg-white/5

      border
      border-fuchsia-500/30

      backdrop-blur-xl

      rounded-3xl

      p-4
      "
    >

      <textarea
        value={message}

        onChange={(e) =>
          setMessage(
            e.target.value
          )
        }

        onKeyDown={(e) => {

          if (
            e.key === "Enter" &&
            !e.shiftKey
          ) {

            e.preventDefault();

            askMentor();

          }

        }}

        placeholder="Ask about careers, exams, colleges, roadmap..."

        className="
        w-full

        h-24

        resize-none

        bg-transparent

        outline-none

        text-white

        placeholder:text-zinc-500
        "
      />

      <div
        className="
        flex

        justify-end
        "
      >

        <button
          onClick={askMentor}

          disabled={loading}

          className="
          px-6
          py-3

          rounded-2xl

          bg-gradient-to-r
          from-fuchsia-600
          to-purple-600

          font-semibold

          disabled:opacity-50
          "
        >

          Send 🚀

        </button>

      </div>

    </div>

  </div>

</main>

);

}