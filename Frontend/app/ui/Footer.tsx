import Link from "next/link";

export function Footer() {
  return <footer className="w-full fixed bottom-0 flex flex-col items-center justify-center py-4 border-t border-neutral-300 bg-neutral-200">
    <div className="author">Made By <span>Manas</span></div>
    <div className="githublink">Github: <Link href={'https://github.com/scienmanas'}><span className="font-semibold text-red-700 duration-200 hover:underline">@scienmanas</span></Link></div>
  </footer>;
}
