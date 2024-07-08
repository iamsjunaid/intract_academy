import Image from "next/image";
import horiCardsData from "@/lib/horiCards";
import CardItem from "../components/cardItem";
import SVGS from "../components/svgs";
import vertCardsData from "@/lib/vertCards";
import VertCard from "../components/vertCard";
import CountdownCard from "../components/countdown";
import CommunityCard from "../components/communityCard";
import RewardInfo from "../components/rewardInfo";

export default function CTA() {
  const horiCards = horiCardsData;
  const vertCards = vertCardsData;

  return (
    <main className="relative h-[400vh] w-full border-b-white">
      <div className="absolute inset-0">
        {horiCards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <SVGS />
      </div>
      <div className="absoulte inset-0">
        {vertCards.map((card) => (
          <VertCard key={card.id} card={card} />
        ))}
      </div>
      <CountdownCard />
      <CommunityCard />
      <div className="w-full absolute top-[126rem] left-[38rem] ">
        <Image
          src="/images/reward-info-path.svg"
          alt="reward_info_path"
          width={450}
          height={400}
        ></Image>
      </div>
      <RewardInfo />
    </main>
  );
}

// className="p-4 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg text-white bg-secondary text-md absolute top-[100rem] right-[34rem] flex flex-col gap-4"
