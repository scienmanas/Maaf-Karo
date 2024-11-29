import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full h-fit flex items-center justify-center">
      <div className="wrapper w-full max-w-screen-xl flex items-center justify-center px-2">
        <div className="flex flex-col w-full h-fit items-center justify-center py-4 border-t border-neutral-200">
          <div className="author">
            Made By <span>Manas</span>
          </div>
          <div className="githublink">
            Github:{" "}
            <Link href={"https://github.com/scienmanas"}>
              <span className="font-semibold text-red-700 duration-200 hover:underline">
                @scienmanas
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
