import Image from "next/image";
import RewardInfo from "./rewardInfo";

function CommunityCard() {
  return (
    <div className="z-10 absolute top-[110rem] right-[34rem] bg-secondary text-white rounded-lg px-4 py-8 shadow-lg  w-[18rem] text-sm flex flex-col gap-4 border">
      <Image
        src="/images/community.gif"
        alt="community"
        width={300}
        height={800}
        unoptimized={true}
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
      <div className="flex justify-between items-center w-full">
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
      <div className=" w-full text-center text-gray-400">
        <button className="flex justify-around items-center mx-auto w-60 px-16 py-2 rounded-md border border-gray-400 bg-secondary">
          Claim Now
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
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CommunityCard;
