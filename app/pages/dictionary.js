import Image from "next/image";
import dictionary from "../../public/images/dictionary.svg";

function Dictionary() {
  return (
    <div className="text-white border-y p-8 flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Crypto Dictionary</h2>
      <p className="text-md text-gray-400">
        Your one-stop to catch up on all crypto terms
      </p>
      <div className="relative w-full text-left">
        <Image
          className="w-11/12 mx-auto rounded-[1.8rem]"
          src={dictionary}
          alt="dictionary"
        />
        <div className="absolute inset-0 top-[22.5rem] left-24 text-white">
          <h2 className="text-2xl">Web3 + Degen Glossary</h2>
          <p className="mt-2">Your own crypto dictionary</p>
        </div>
        <div className="absolute inset-0 top-[22.5rem] left-[70rem] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 border-2 rounded-full p-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Dictionary;
