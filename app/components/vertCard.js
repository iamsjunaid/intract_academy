import Image from "next/image";

export default function VertCard({ card }) {
  return (
    <div
      className={`flex flex-col gap-4 justify-center w-48 h-96 text-white text-sm ${
        card.id === 1 ? "absolute right-24 top-72" : "absolute right-[70rem] top-[70rem]"
      }`}
    >
      <div className="text-center w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 border-2 rounded-full p-1 mx-auto"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 12.75 6 6 9-13.5"
          />
        </svg>
      </div>
      <div className="w-full rounded-lg">
        <Image
          className="mx-auto border-8 border-secondary rounded-lg"
          src={card.image}
          alt={card.title}
          width={150}
          height={300}
        ></Image>
      </div>
      <p className="text-left text-sm">{card.title}</p>
      <p className="text-left text-gray-400 text-sm">{card.desc}</p>
      <div className="w-full text-left text-gray-400">
        <button className="px-8 py-2 rounded-md border border-gray-400 bg-secondary">Claim</button>
      </div>
    </div>
  );
}
