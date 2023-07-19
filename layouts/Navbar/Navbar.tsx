"use client"
import { Burger, Languages, NavList } from "@/components";
import Link from "next/link"
import { Logo } from "@/assets/icons";
import "@/styles/navbar.scss";
import useToggle from "@/hooks/useToggle";

const Navbar = () => {
  const { open, toggle } = useToggle();

  return (
    <nav id="navbar" className="container">
      <Link id="logo" href="/">
          <Logo />
      </Link>
      <NavList open={open} toggle={toggle} />
      <Languages  />
      <Burger open={open} toggle={toggle} />
    </nav>
  )
};

export default Navbar;