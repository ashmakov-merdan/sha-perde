import { links } from "@/static";
import Link from "next/link";
import { LinkProps } from "@/types";

const Links = () => {
  return <ul>
    { links.map((link, i) => {
      return <Item {...link} key={i} />
    })}
  </ul>
};

const Item = ({path, icon}: LinkProps) => {
  return (
    <Link href={path}>{icon}</Link>
  )
};

export default Links;