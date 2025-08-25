import type { Metadata } from "next";
import { Inter, Baloo_2 } from "next/font/google";
import "./globals.css";
import ClientLayoutShell from "@/components/ClientLayoutShell";
import BackgroundGlow from "@/components/BackgroundGlow";

// Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-baloo2",
});

export const metadata: Metadata = {
  title: "Uday Chittala – Full-Stack Ninja Developer 🥷",
  description:
    "By day, I slay bugs and deploy clean code. By night, I master full-stack jutsus, Flutter quests, and AI scrolls. Saving laptops, delighting users, and coding like a ninja! 🍜⚡",
  keywords: [
    "Uday Chittala",
    "ninja developer",
    "full-stack hero",
    "Flutter crusader",
    "React ranger",
    "Angular avenger",
    "AI wizard",
    "web savior",
    "mobile hero",
    "bug slayer",
    "coding ninja",
    "programming jutsu",
    "ramen powered dev",
  ],
  authors: [{ name: "Uday Chittala" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${baloo2.className} antialiased`}>
        <BackgroundGlow />
        {/* Theme toggle moved into RightSidebarNav as a single icon */}
        <ClientLayoutShell>{children}</ClientLayoutShell>
      </body>
    </html>
  );
}
