const CountdownCard = () => {
  return (
    <div className="absolute top-[100rem] right-[34rem] bg-secondary text-white rounded-lg p-4 shadow-lg w-[18rem] border">
      <div className="flex items-center space-x-2 mb-4">
        <svg
          className="w-5 h-5 text-orange-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a8 8 0 11-7.928 6.287A8.001 8.001 0 0110 2zm0 14.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13zM11 10a1 1 0 01-1 1H7a1 1 0 010-2h2V7a1 1 0 012 0v3z"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-sm font-medium">Reward unlocks in</span>
      </div>
      <div className="bg-black rounded-lg p-4 border border-gray-950">
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-2xl font-mono">00</div>
            <div className="text-xs text-gray-400">Days</div>
          </div>
          <div>
            <div className="text-2xl font-mono">00</div>
            <div className="text-xs text-gray-400">Hrs</div>
          </div>
          <div>
            <div className="text-2xl font-mono">00</div>
            <div className="text-xs text-gray-400">Mins</div>
          </div>
          <div>
            <div className="text-2xl font-mono">00</div>
            <div className="text-xs text-gray-400">Sec</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownCard;
