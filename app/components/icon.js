import Image from "next/image";

export default function Icon({ icon }) {
    console.log(icon);
  return (
    <div className="w-full">
      <Image className="bg-secondary rounded-md p-2" src={icon.url} alt={icon.name} width={40} height={40}></Image>
    </div>
  );
}
