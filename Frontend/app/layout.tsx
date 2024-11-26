import type { Metadata } from "next";
import "./globals.css";
import landingImg from "@/public/metadata/landing.png";
// Vercel ang google analytics

export const metadata: Metadata = {
  title: "Maaf Karo | Fun Trolling Website",
  description:
    "A fun trolling website where memes meet creativity. Enjoy our collection of humorous content and support us if you like what we do!",
  keywords: ["trolling", "memes", "humor", "fun", "entertainment", "maaf karo"],
  authors: [{ name: "scienmanas" }],
  openGraph: {
    title: "Maaf Karo | Fun Trolling Website",
    description: "A fun trolling website where memes meet creativity",
    type: "website",
    siteName: "Maaf Karo",
    images: [landingImg.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaf Karo | Fun Trolling Website",
    description: "A fun trolling website where memes meet creativity",
    images: [landingImg.src],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`m-0`}>{children}</body>
    </html>
  );
}
