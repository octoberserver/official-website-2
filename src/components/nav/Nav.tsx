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
      <Link href={Pages.HOME} className="logo flex p-0 m-0 justify-center content-center select-none gap-5">
          <Logo/>
          <div className="grid place-content-center">
            <h2 className="p-0 m-0 text-center text-[1.8rem] text-white select-text">十月模組伺服器</h2>
          </div>
      </Link>
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
        <NavLink pathname={pathname} href="/tutorials">
          教學
        </NavLink>
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
