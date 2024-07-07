import Image from "next/image";

const Home = () => {
  return (
    <main className="">
      <div className="relative h-screen">
        <Image
          className="absolute inset-0"
          src="/images/bg-main.png"
          alt="hero_main"
          fill
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center  gap-4 text-lg">
          <div className="backdrop-filter bg-opacity-30 w-full flex justify-center">
            <Image
              src="/images/academy-animated-logo.gif"
              alt="academy-animated-logo"
              width={300}
              height={150}
              unoptimized={true}
              className=""
            ></Image>
          </div>
          <p className="text-gray-400 my-8">
            <span className="text-white">Intract users</span> have together made
            more than <span className="text-white">$100 million</span> in web3.
            <br />
            Join them and{" "}
            <span className="text-white">learn how to earn crypto!</span>
          </p>
          <button className="bg-tertiary text-white px-12 py-[8px] rounded flex justify-around items-center">
            <span className="text-sm mr-2">Get Started</span>
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
    </main>
  );
};

export default Home;
