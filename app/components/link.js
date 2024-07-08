
export default function Link({link}) {
  return (
    <li className="flex flex-col text-gray-400 text-sm gap-1">
        <a href="#">{link.link1}</a>
        <a href="#">{link.link2}</a>
        <a href="#">{link.link3}</a>
        <a href="#">{link.link4}</a>
        <a href="#">{link.link5}</a>
    </li>
  );
}
