import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitChangelog — Stakeholder-Friendly Changelogs from Git Commits",
  description: "Analyze git commits and generate business-friendly changelogs categorized by impact for users, investors, and support teams."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4b98d33c-74be-49ff-b2a5-5c0141d885a6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
