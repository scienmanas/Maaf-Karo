import { LegendTroller } from "@/app/ui/LegendTroller";

export default function Home() {
  return (
    <div className="app w-full h-full flex items-center justify-center flex-col">
      <div className="wrapper w-full h-fit max-w-screen-xl flex flex-col items-center justify-center gap-8 relative">
        <LegendTroller />
      </div>
    </div>
  );
}
