import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StudentPath | Explore Careers & Learning Roadmaps",
  description:
    "Discover career roadmaps, future tech careers, skills, and learning paths with StudentPath.",

  keywords: [
    "career roadmap",
    "career guidance",
    "student careers",
    "AI careers",
    "engineering careers",
    "future careers",
    "StudentPath",
  ],

  openGraph: {
    title: "StudentPath",
    description:
      "Explore careers, skills, and learning roadmaps.",
    url: "https://studentpath.in",
    siteName: "StudentPath",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}