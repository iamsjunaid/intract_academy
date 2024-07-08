import Image from "next/image";

const CardItem = ({ card }) => {
  return (
    <div
      className={`w-[38rem] p-8 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg flex items-center text-gray-950 bg-secondary text-md ${
        card.id === 1 ? "absolute top-0 left-16" : "absolute top-[45rem] left-[28rem]"
      }`}
    >
      <div className="w-1/3 rounded-lg">
        <Image
          className="border-8 border-secondary rounded-lg"
          objectFit="contain"
          src={card.image}
          alt={card.title}
          width={400}
          height={200}
        />
      </div>
      <div className="w-64 h-36 text-left ml-4 flex flex-col justify-center gap-4">
        <h3 className="text-lg font-semibold text-white">{card.title}</h3>
        <p className="text-gray-400 border-b border-dashed outline-offset-4">
          {card.desc}
          <br />
        </p>
        <div className="font-semibold bg-secondary py-2 text-sm  text-white rounded-full w-1/2 flex justify-around items-center backdrop-blur-lg backdrop-filter">
          <Image src="https://www.intract.io/assets/xp-icon-aacd204a.svg" alt="coin" width={20} height={20}></Image>
          <span className="">{card.price}</span>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
