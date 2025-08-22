import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayoutShell from "@/components/ClientLayoutShell";
import BackgroundGlow from "@/components/BackgroundGlow";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Developer Portfolio",
  description: "Ultra-modern animated portfolio showcasing creative development work",
  keywords: ["developer", "portfolio", "creative", "frontend", "3D", "animation"],
  authors: [{ name: "Creative Developer" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <BackgroundGlow />
        {/* Theme toggle moved into RightSidebarNav as a single icon */}
        <ClientLayoutShell>
          {children}
        </ClientLayoutShell>
      </body>
    </html>
  );
}
