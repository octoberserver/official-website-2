import Image from "next/image";

import bannerBg from "../../public/home/images/minecraft1.png"
import playIcon from "../../public/home/images/icons/Enchanted_Netherite_Pickaxe.gif"

export default function Home() {
  return (
    <>
      <div className="h-[35rem] w-ful grid place-content-center bg-cover bg-center" style={{backgroundImage: `url(${bannerBg.src})`}}>
        <div className="flex flex-col justify-center items-center select-none gap-9">
          <h1 className="page-title px-3 inline text-center text-6xl text-white">歡迎來到十月模組伺服器</h1>
          <button className="px-4 pt-1 pb-1.5 flex justify-center text-white text-center items-center bg-[#DF0000] text-3xl rounded-[1.25rem]">
            <span className="text-center">開始遊玩!</span>
            <Image src={playIcon} className="h-10 w-11 pl-1 no-drag_c" alt="附魔鑽石鎬"></Image>
          </button>
        </div>
      </div>
    </>
  );
}
