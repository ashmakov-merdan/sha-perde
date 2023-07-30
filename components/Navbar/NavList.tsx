"use client"
import { navigation } from "@/public/static";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { NavProps, ToggleProps } from "@/types";
import { ArrowDown } from "@/assets/icons";
import useToggle from "@/hooks/useToggle";
import Languages from "../Languages/Languages";

// Navigation List
const NavList = ({open}: ToggleProps) => {
  const renderNavigation = useMemo(() => {
    return navigation && navigation.map((nav, index) => {
      return <NavItem {...nav} key={index} />
    })
  }, [navigation]);

  const navstyle = {
    right: open ? "0%" : "-150%"
  }

  return (
    <ul className="nav-list" style={navstyle}>
      {renderNavigation}
      <Languages/>
    </ul>
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
          <a
            href={path}
            className="nav-link" onClick={() => toggle()}>
            {title} {subs ? <span className={open ? "arrow up" : "arrow"}><ArrowDown /></span> : null}
          </a>
        )
      }
    </li>
  )
};

export default NavList;