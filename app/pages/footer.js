import links from "../../lib/links";
import Link from "../components/link";
import icons from "../../lib/icons";
import Icon from "../components/icon";

function Footer() {
  const linksData = links;
  const iconsData = icons;

  return (
    <footer className="text-white text-left p-8 divide-y divide-white">
      <div className="flex p-4">
        <div className="flex  justify-between items-start">
          <div className="flex flex-col">
            <h4 className="text-3xl font-medium">intract.</h4>
            <p className="text-sm text-gray-400">
              We are your personal guide for exploring web3 projects & earning
              100x rewards
            </p>
          </div>
          <div className="flex p-4 ml-8 gap-8">
            {linksData.map((link) => (
              <div key={link.title} className="flex flex-col w-36 gap-2">
                <h4>{link.title}</h4>
                <ul className="flex flex-col">
                  {link.links.map((item) => (
                    <Link key={item.link1} link={item} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <p className="py-8">
          Disclaimer:{" "}
          <span className="text-sm text-gray-400">
            Crypto Products, Virtual Digital Assets, and NFTs are unregulated
            and can be highly risky. There may be no regulatory recourse for any
            loss from such transactions. We advise the viewer to proceed with
            caution. Nothing in this website or any communication published by
            us amounts to, is intended to be, or should be construed as
            investment or purchase advice of any kind or financial advice or
            promotion under any applicable laws. Any decision made based on the
            content provided on this website or any communication published by
            us shall not be attributable to us.
          </span>
        </p>
      </div>
      <div className="flex justify-between items-center h-16">
        <div>
          <p>
            CREATED BY <span className="underline">INTRACT</span>
          </p>
        </div>
        <div className="flex gap-4">
          {iconsData.map((icon) => (
            <Icon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
