
import { Navbar } from "@/app/ui/Navbar";
import { Troller} from "@/app/ui/Troller";
import { Footer } from "@/app/ui/Footer";

export default function Home() {
  return (
    <div className="app w-full h-full flex items-center justify-center">
      <div className="wrapper w-full h-fit max-w-screen-xl flex flex-col items-center justify-center gap-8">
        <Navbar />
        <Troller />
        <Footer />
      </div>
    </div>
  );
}
