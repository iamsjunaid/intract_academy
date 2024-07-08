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
    <main className="relative h-[600vh] w-full">
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
      <div className="w-full border-red-400 absolute left-24">
        <Image
          src="/images/reward_info_path.png"
          alt="reward_info_path"
          fill
        ></Image>
      </div>
      <RewardInfo />
    </main>
  );
}

// className="p-4 z-10 backdrop-filter backdrop-blur-sm bg-opacity-30 rounded-lg text-white bg-secondary text-md absolute top-[100rem] right-[34rem] flex flex-col gap-4"
