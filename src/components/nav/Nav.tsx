import Link from "next/link"
import { Pages } from "october-site/util/types"
import "./nav.css"
import { Logo } from "./Logo"

export function Nav() {
  return (
    <nav className="box-border w-full flex justify-between items-center py-1.5 px-5 fixed backdrop-blur-sm z-40">
      <Link href={Pages.HOME} className="logo flex p-0 m-0 justify-center content-center select-none gap-5">
          <Logo/>
          <div className="grid place-content-center">
            <h2 className="p-0 m-0 text-center text-[1.8rem] text-white select-text">十月模組伺服器</h2>
          </div>
      </Link>
      <ul className="flex list-none p-0 m-0 justify-center content-center select-none gap-1">
          <NavLink selected={true} href={Pages.HOME}>
            首頁
          </NavLink>
          <NavLink href={Pages.RULES}>
            規則
          </NavLink>
          <NavLink href={Pages.ANNOUNCEMENTS}>
            公告
          </NavLink>
          <NavLink href={Pages.DOWNLOADS}>
            下載
          </NavLink>
          <NavLink href="/tutorials">
            教學
          </NavLink>
      </ul>
    </nav>
  )
}

function NavLink({children, href, selected}: {children: string | JSX.Element | JSX.Element[], href: string, selected?: boolean}) {
  const className = "text-white text-[1.4rem] py-[0.3rem] px-[0.6rem] rounded-xl"
  if (selected)
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
