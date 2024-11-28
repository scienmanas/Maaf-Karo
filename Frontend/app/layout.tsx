import type { Metadata } from "next";
import "./globals.css";
import landingImg from "@/public/metadata/landing.png";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from '@next/third-parties/google'
// Vercel ang google analytics

export const metadata: Metadata = {
  title: "Maaf Karo | Fun Trolling Website",
  description:
    "A fun trolling website! Compare your github profile with some well known github users and see how you fare.",
  keywords: ["trolling", "memes", "humor", "fun", "entertainment", "maaf karo"],
  authors: [{ name: "scienmanas" }],
  openGraph: {
    title: "Maaf Karo | Fun Trolling Website",
    description:
      "A fun trolling website! Compare your github profile with some well known github users and see how you fare.",
    type: "website",
    siteName: "Maaf Karo",
    images: [landingImg.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaf Karo | Fun Trolling Website",
    description:
      "A fun trolling website! Compare your github profile with some well known github users and see how you fare.",
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
      <body className={`m-0`}>
        {children}
        <GoogleAnalytics gaId="G-MDTWV1E7TV" debugMode={false}/>
        <Analytics />
      </body>
    </html>
  );
}
