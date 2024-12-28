"use client"

import { useState } from "react";
import logoBlink from "../../../public/common/images/icons/logo-blink-2.gif"
import logo from "../../../public/common/images/icons/logo.png"
import Image from "next/image"
import Link from "next/link";
import { Pages } from "october-site/util/types";

export function Logo() {
  const [blinking, setBlinking] = useState(false);
  const mouseEnter = () => setBlinking(true);
  const mouseLeave = () => setBlinking(false);
  return (
    <Link onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} href={Pages.HOME} className="logo flex p-0 m-0 justify-center content-center select-none gap-5">
      <div className="flex h-12 w-12">
        <Image src={blinking ? logoBlink : logo} alt="十月頭 Logo" width={64} height={64}/>
      </div>
      <div className="grid place-content-center">
        <h2 className="p-0 m-0 text-center text-[1.8rem] text-white select-text">十月模組伺服器</h2>
      </div>
    </Link>
  );
}
