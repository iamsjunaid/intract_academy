import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="z-10 sticky top-0 w-full flex items-center justify-between px-8 h-16 backdrop-filter backdrop-blur-lg bg-opacity-30 text-gray-400 border-b border-gray-400">
      <div>
        <Image src="images/logo.svg" alt="logo" width={100} height={100} />
      </div>
      <div className="">
        <Link href="/" className="text-md px-5 font-medium">
          Compass
        </Link>
        <Link href="/" className="text-md px-5 font-medium">
          Explore
        </Link>
        <Link href="/" className="text-md px-5 font-medium">
          Academy
        </Link>
        <Link href="/" className="text-md px-5 font-medium">
          NFTs
        </Link>
        <Link href="/" className="text-md px-5 font-medium">
          For Projects
        </Link>
      </div>
      <div className="w-1/3">
        <button className="flex items-center justify-around  bg-[#181818] pl-4 pr-24 py-2 rounded-full">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <span className="ml-2 text-sm w-full">Search for ecosystems, trending quests etc,.</span>
        </button>
      </div>
      <div className="w-32 flex items-center justify-around">
        <button className="rounded-full p-2 border border-[#ee8221]">
            <Image src='./images/tv-btn.svg' width={16} height={16} alt="icon"></Image>
        </button>
        <button className="bg-white px-2 py-1 text-gray-950 rounded-sm text-sm font-semibold">Sign In</button>
      </div>
    </nav>
  );
}
