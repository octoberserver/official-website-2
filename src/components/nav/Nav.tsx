"use client"

import Link from "next/link"
import { Pages } from "october-site/util/types"
import { Logo } from "./Logo"
import "./Nav.css"
import { MobileNav } from "./MobileNav"
import { usePathname } from "next/navigation"

export function Nav() {

  const pathname = usePathname() || "/";

  return (
    <nav className="fixed min-w-80 w-full box-border flex justify-between items-center py-1.5 px-5 backdrop-blur-sm z-40">
      <Logo/>
      <MobileNav pathname={pathname}/>
      <ul className="hidden md:flex list-none p-0 m-0 justify-center content-center select-none gap-1">
        <NavLink pathname={pathname} href={Pages.HOME}>
          首頁
        </NavLink>
        <NavLink pathname={pathname} href={Pages.RULES}>
          規則
        </NavLink>
        <NavLink pathname={pathname} href={Pages.ANNOUNCEMENTS}>
          公告
        </NavLink>
        <NavLink pathname={pathname} href={Pages.DOWNLOADS}>
          下載
        </NavLink>
        {/* <ExternalNavLink href="https://tutorials.octsrv.org">
          教學
        </ExternalNavLink> */}
      </ul>
    </nav>
  )
}

function NavLink({children, href, pathname}: {children: string | JSX.Element | JSX.Element[], href: string, pathname: string}) {
  const className = "text-white text-[1.4rem] py-[0.3rem] px-[0.6rem] rounded-xl"
  if (pathname === href)
    return (
      <li>
        <Link className={`bg-[#DF0000] ${className}`} href={href}>
          {children}
        </Link>
      </li>
    )
  return (
    <li>
      <Link className={className} href={href}>
        {children}
      </Link>
    </li>
  )
}
function ExternalNavLink({children, href}: {children: string | JSX.Element | JSX.Element[], href: string}) {
  return (
    <li>
      <a className="text-white text-[1.4rem] py-[0.3rem] px-[0.6rem] rounded-xl" href={href}>
        {children}
      </a>
    </li>
  )
}
