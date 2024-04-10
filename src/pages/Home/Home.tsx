"use client"

import Image from "next/image";

import bannerBg from "../../../public/home/images/minecraft1.png"
import playIcon from "../../../public/home/images/icons/Enchanted_Netherite_Pickaxe.gif"
import { Body } from "./Body";
import { JoinDiscord } from "october-site/components/JoinDiscord";
import { Header } from "october-site/components/Header";
import { useState } from "react";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header background={`url(${bannerBg.src})`} className="h-[35rem]">
        <h1 className="page-title px-3 inline text-center text-6xl text-white">歡迎來到十月模組伺服器</h1>
        <button onClick={() => setModalOpen(true)} className="pt-1 px-4 pb-1.5 flex justify-center text-white text-center items-center bg-[#DF0000] rounded-[1rem] md:rounded-[1.25rem]">
          <span className="text-center text-3xl">開始遊玩!</span>
          <Image src={playIcon} className="h-7 w-8 md:h-10 md:w-11 pl-1" alt="附魔鑽石鎬"/>
        </button>
      </Header>
      {modalOpen && <HowToJoinModal closeModal={() => setModalOpen(false)}/>}
      <h2 className="hidden"> 生存 | 模組 | 模組伺服器 | 領地 | FTB | 模組包 | Forge | 伺服器 | 1.16.5 | 1.12.2 | 1.7.10 | 冒險 | 科技 | FTB伺服器</h2>
      <div className="p-10">
        <Body/>
        <JoinDiscord/>
      </div>
    </>
  );
}

function HowToJoinModal({closeModal}: {closeModal: () => void}) {
  return (
    <button onClick={closeModal} className="fixed top-0 left-0 h-screen w-screen bg-black/30 grid place-content-center z-40">
      <div className="relative p-6 grid gap-5 bg-[#2D2D2D] text-center rounded-3xl text-[1.75rem]">
        <button onClick={closeModal} className="absolute right-2 top-2 grid place-content-center cursor-pointer">
          <svg className="svg-white_c w-7 h-7" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"/>
          </svg>
        </button>
        <h2 className="white select-none text-[2.5rem]">開始遊玩</h2>
        <div className="py-3 px-5 rounded-2xl select-none bg-[#393939]">
          <h3>伺服器位址：</h3>
          <span className="select-text text-2xl mr-1">octoberserver.net:1000</span>
          <span className="text-[1.6rem]">
            (<a className="text-indigo-400" href="javascript:navigator.clipboard.writeText('octoberserver.net:1000');">點我複製</a>)
          </span>
        </div>
        <div className="py-3 px-5 rounded-2xl bg-[#393939]">
          <p>
            我們是模組服<br/>
            <span className="text-2xl">需要使用特殊啟動器才能加入!</span>
          </p>
          <a href="downloads#main-pack-launcher" target="_blank">
            <button className="mt-1 py-1 px-3 rounded-xl bg-[#DF0000] select-none text-2xl">下載啟動器</button>
          </a>
        </div>
      </div>
    </button>
  )
}
