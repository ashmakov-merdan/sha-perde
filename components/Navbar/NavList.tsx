"use client"
import { navigation } from "@/static";
import Link from "next/link";
import { useMemo } from "react";
import { NavProps } from "@/types";
import { ArrowDown } from "@/assets/icons";
import useToggle from "@/hooks/useToggle";

// Navigation List
const NavList = () => {
  const renderNavigation = useMemo(() => {
    return navigation && navigation.map((nav, index) => {
      return <NavItem {...nav} key={index} />
    })
  }, [navigation]);

  return (
    <ul className="nav-list">{renderNavigation}</ul>
  )
};

// Navbar Item
const NavItem = ({ title, path, subs }: NavProps) => {
  const { open, toggle } = useToggle();

  const navStyle = {
    opacity: open ? 1 : 0
  }

  return (
    <li className="nav-item">
      {
        subs ? (
          <>
            <button
              className="nav-link" onClick={() => toggle()}>
              {title} {subs ? <span className={open ? "arrow up" : "arrow"}><ArrowDown /></span> : null}
            </button>
            <ul className="nav-sublist" style={navStyle}>
              {subs.map((sub, index) => {
                return <li key={index} className="nav-subitem">
                  <Link href={sub.path} className="nav-sublink">{sub.title}</Link>
                </li>
              })}
            </ul>
          </>
        ) : (
          <Link
            href={path}
            className="nav-link" onClick={() => toggle()}>
            {title} {subs ? <span className={open ? "arrow up" : "arrow"}><ArrowDown /></span> : null}
          </Link>
        )
      }
    </li>
  )
};

export default NavList;