import Image from "next/image";

function CommunityCard() {
  return (
    <div className="absolute top-[110rem] right-[34rem] bg-secondary text-white rounded-lg p-4 shadow-lg w-74 text-sm flex flex-col gap-2">
      <Image
        src="/images/community.gif"
        alt="community"
        width={300}
        height={800}
      ></Image>
      <div className="flex justify-between items-between">
        <p className="">Exclusive Community</p>
        <p className="font-semibold">Earndrop</p>
      </div>
      <div className="flex justify-between items-center w-4/5">
        <p className="text-xs ">Complete all Essential quests</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 border-2 rounded-full p-1 -mr-14"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs">Complete at least 1 Alpha Hub quest today</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 border-2 rounded-full p-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      <button>Claim</button>
    </div>
  );
}

export default CommunityCard;
