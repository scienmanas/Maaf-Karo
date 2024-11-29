// Import necessary modules from Next.js
import Link from "next/link";
import { Metadata } from "next";

// Generate metadata for the 404 error page
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `404 - Maaf Karo`, // Page title with site name
    description:
      "Error, the specified URL cannot be found, please check the url and try again", // Meta description for search engines
    openGraph: {
      title: `404 - Maaf Karo`, // Open Graph title for social media previews
      description:
        "Error, the specified URL cannot be found, please check the url and try again", // Open Graph description
    },
    twitter: {
      title: `404 - Maaf Karo`, // Twitter card title
      description:
        "Error, the specified URL cannot be found, please check the url and try again", // Twitter card description
    },
  };
}

// Component to display a 404 error page when a route is not found
export default function NotFound(): JSX.Element {
  return (
    <div className="w-dvw h-dvh flex items-center justify-center">
      <div className="content-wrapper w-fit h-fit flex flex-col items-center max-w-[448px] text-wrap gap-4 p-4">
        {/* Display the 404 error code */}
        <div className="error-code w-fit h-fit text-center text-wrap font-extrabold text-6xl sm:text-8xl text-purple-700 animate-pulse">
          404
        </div>
        <div className="regrets-and-console-text w-fit h-fit flex flex-col items-center justify-center gap-2">
          {/* Regret message for the missing page */}
          <div className="regret-text w-fit h-fit text-center text-wrap font-bold text-neutral-800 text-2xl">
            Sorry 😔, I couldn't find this page.
          </div>
          {/* Suggestion to visit the homepage */}
          <div className="console-person w-fit h-fit text-center text-wrap text-neutral-600 ">
            But don't worry, you can find plenty of other things on my homepage.
          </div>
        </div>
        {/* Button to navigate back to the homepage */}
        <Link href={"/"} className="w-fit h-fit mt-4">
          <button className="return-to-home w-fit h-fit px-5 py-4 rounded-[30px] bg-transparent dark:bg-transparent text-neutral-700 border border-[#9ea5b0] hover:bg-neutral-200 hover:border-neutral-600 hover:text-neutral-800 duration-300">
            Back to Homepage
          </button>
        </Link>
      </div>
    </div>
  );
}
