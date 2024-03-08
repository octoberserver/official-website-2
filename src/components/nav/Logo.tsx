"use client"

import { useState } from "react";
import logoBlink from "../../../public/common/images/icons/logo-blink-2.gif"
import logo from "../../../public/common/images/icons/logo.png"
import Image from "next/image"

export function Logo() {
  const [blinking, setBlinking] = useState(false);
  const mouseEnter = () => setBlinking(true);
  const mouseLeave = () => setBlinking(false);
  return (
    <div className="flex h-12 w-12" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
      <Image src={blinking ? logoBlink : logo} alt="十月頭 Logo" width={64} height={64}/>
    </div>
  );
}
