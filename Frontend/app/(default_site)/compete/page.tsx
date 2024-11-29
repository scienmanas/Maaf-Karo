import { BattleRoyale } from "@/app/ui/BattleRoyale";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maaf Karo | Compete",
  description: "Battle your friends on GitHub with github profiles",
  keywords: ["trolling", "memes", "humor", "fun", "entertainment", "maaf karo"],
  authors: [{ name: "scienmanas" }],
  openGraph: {
    title: "Maaf Karo | Compete",
    description: "Battle your friends on GitHub with github profiles.",
    type: "website",
    siteName: "Maaf Karo",
    // images: [landingImg.src],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maaf Karo | Compete",
    description: "Battle your friends on GitHub with github profiles.",
    // images: [landingImg.src],
  },
  robots: "index, follow",
};

export default function Compete() {
  return (
    <div className="app w-full h-full flex items-center justify-center flex-col">
      <div className="wrapper w-full h-fit max-w-screen-xl flex flex-col items-center justify-center relative">
        <BattleRoyale />
      </div>
    </div>
  );
}
