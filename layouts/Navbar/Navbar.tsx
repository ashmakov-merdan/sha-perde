import { Languages, NavList } from "@/components";
import Link from "next/link"
import { Logo } from "@/assets/icons";
import "@/styles/navbar.scss";

const Navbar = () => {
  return (
    <nav id="navbar" className="container">
      <Link id="logo" href="/">
          <Logo />
      </Link>
      <NavList />
      <Languages  />
    </nav>
  )
};

export default Navbar;