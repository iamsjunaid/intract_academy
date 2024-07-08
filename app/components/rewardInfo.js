const RewardInfo = () => {
  return (
    <div className="text-sm absolute top-[104rem] right-[10rem] bg-secondary border text-gray-400 rounded-lg py-6 px-4 w-72 shadow-lg text-left">
      <div className="flex items-center text-xs mb-4">
        Reward info{" "}
        <span className="ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
        </span>
      </div>
      <div>
        <p className="mb-4 text-white ">
          Free access to paid KOL (crypto earning) communities!
        </p>
        <p className=" mb-2">
          Win access to exclusive earning communities of some of the greatest
          earners in crypto for a month, every 24 hours. Get access to unmatched
          insights, a close-knit community of the best airdrop earners, and
          more.
        </p>
        <p className="text-sm">
          To win: make sure you&apos;ve connected your Twitter and Discord
          accounts - and follow our criteria!
        </p>
      </div>
    </div>
  );
};

export default RewardInfo;
