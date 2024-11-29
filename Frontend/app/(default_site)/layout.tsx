import type { Metadata } from "next";
import "@/app/globals.css";
import legendaryRoyaleImg from "@/public/metadata/legendaryRoyale.png";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Navbar } from "@/app/ui/Navbar";
import { Footer } from "@/app/ui/Footer";

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
    images: [legendaryRoyaleImg.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaf Karo | Fun Trolling Website",
    description:
      "A fun trolling website! Compare your github profile with some well known github users and see how you fare.",
    images: [legendaryRoyaleImg.src],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`m-0`}>
        <GoogleAnalytics
          gaId={process.env.G_ANALYTICS_ID as string}
          debugMode={false}
        />
        <div className="wrapper w-full h-fit relative">
          <div className="navbar w-full h-fit z-20 sticky top-0">
            <Navbar />
          </div>
          <div className="content relative w-full h-fit z-10">{children}</div>
          <div className="relative footer w-full h-fit z-20">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
