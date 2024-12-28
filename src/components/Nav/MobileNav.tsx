"use client"

import Link from "next/link";
import { Pages } from "october-site/util/types";
import { useState } from "react";

export function MobileNav({pathname}: {pathname: string}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="block md:hidden">
      <button onClick={() => setOpen(true)}>選單</button>
      {open &&
        <button className="fixed w-screen h-screen top-0 left-0 grid place-content-center bg-black/50" onClick={() => setOpen(false)}>
          <ul className="flex flex-col items-center bg-[#242424] rounded-xl">
          <MobileNavLink pathname={pathname} href={Pages.HOME}>
            首頁
          </MobileNavLink>
          <MobileNavLink pathname={pathname} href={Pages.RULES}>
            規則
          </MobileNavLink>
          <MobileNavLink pathname={pathname} href={Pages.ANNOUNCEMENTS}>
            公告
          </MobileNavLink>
          <MobileNavLink pathname={pathname} href={Pages.DOWNLOADS}>
            下載
          </MobileNavLink>
          {/* <MobileNavLink pathname={pathname} href="/tutorials">
            教學
          </MobileNavLink> */}
        </ul>
        </button>
      }
    </div>
  )
}

function MobileNavLink({children, href, pathname}: {children: string | JSX.Element | JSX.Element[], href: string, pathname: string}) {
  const className = "text-white text-[1.4rem] rounded-xl text-center w-full block px-10 py-2"
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
