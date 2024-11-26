import Image from "next/image";
import Link from "next/link";
import solanaImg from "@/public/button/solana-logo.png";

export function Navbar() {
  return (
    <nav className="sticky top-0 w-full border-b border-neutral-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Name Section */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <span>😅</span>
            <span className="text-lg font-medium text-neutral-900">Maaf Karo</span>
          </Link>

          {/* Donation Section */}
          <div className="flex items-center gap-1">
            <Link 
              href="https://www.buymeacoffee.com/scienmanas"
              className="transform hover:scale-105 transition-transform"
              target="_blank"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                width={120}
                height={35}
                className="rounded"
              />
            </Link>
            
            <Link 
              href="https://solscan.io/account/E3FrcftDnb1FXDpRBA96ja7vQmWnQ8mTk85i7m85FmhD" 
              className="transform hover:scale-105 transition-transform bg-neutral-50 p-1.5 rounded-full"
              target="_blank"
            >
              <Image 
                src={solanaImg} 
                alt="solana" 
                width={25} 
                height={25}
                className="rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
