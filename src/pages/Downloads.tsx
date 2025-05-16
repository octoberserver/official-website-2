import { Modpack } from "october-site/util/types"
import bannerBg from "../../public/downloads/images/banner.png"

type DownloadSectionData = {
  enabled: true
  link: string
} | {
  enabled: false
}

export default async function Downloads() {
  const data = await (await fetch("https://api.modpack-manager.octsrv.org/servers/main/modpack")).json()

  // const data: DownloadsPageData = {
  //   title: "匠造之傳 (The Legend of Tinker)",
  //   link: "https://www.mcmod.cn/modpack/684.html",
  //   launcherDownload: {
  //     enabled: true,
  //     link: ""
  //   },
  //   curseForgeDownload: {
  //     enabled: true,
  //     link: "https://drive.google.com/file/d/1ki0jfHFOrRPYe11uVoQHLxVsBlfDqWLY/view?usp=sharing"
  //   },
  //   traditionalDownload: {
  //     enabled: false,
  //   }
  // }

  return (
    <>
      <Header/>
      {/* <div className="top-0 left-0 fixed z-30 h-screen w-screen grid place-content-center text-center backdrop-blur-[2px] backdrop-brightness-75">
        <div className="bg-[#2D2D2D] rounded-3xl p-10 flex gap-3 flex-col">
          <h1 className="text-5xl">聯動系統<span className="text-red-600">尚未完成</span></h1>
          <h2 className="text-4xl">
            請以<a href="https://discord.gg/gCuUgGkdHF" className="text-indigo-500 underline">Discord</a>為準
          </h2>
        </div>
      </div> */}
      <div className="grid place-content-center">
        <div className="grid text-center mt-12 mb-24 mx-10 gap-20 max-w-[75rem] text-[1.6rem]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Title title={data.name} link={data.url}/>
            <DownloadSections data={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

function Header() {
  return (
    <div className="h-[30rem] w-ful bg-cover bg-center" style={{backgroundImage: `url(${bannerBg.src})`}}>
      <div className="h-full w-full bg-black bg-opacity-20 grid place-content-center">
        <h1 className="page-title text-white inline text-center px-3 text-[3.8rem]">
          下載
        </h1>
      </div>
    </div>
  )
}

function Title({title, link}: {title: string, link: string}) {
  return (
    <div className="row-span-1 col-span-1 lg:col-span-2">
      <h2 className="text-5xl mt-11" id="main-pack-launcher">主服模組包</h2>
      <h3 className="mt-4 text-[1.6rem]">
        目前模組包：
        <a href={link} target="_blank" className="text-indigo-400 underline underline-offset-4">
          {title}
        </a>
      </h3>
      <p className="text-xl mt-1 mb-10 text-gray-200"><span className="text-2xl">⚠️</span> 如果模組包無法啟動請到Discord向管理員詢問，我們很樂意協助您解決問題！</p>
    </div>
  )
}

function DownloadSections({data}: {data: Modpack}) {
  return (
    <>
      <LauncherDownloadSection data={data}/>
      <TraditionalDownloadSection data={data}/>
      <CurseForgeDownloadSection data={data}/>
    </>
  )
}

function LauncherDownloadSection({data}: {data: Modpack}) {
  return (
    <div className="bg-[#2D2D2D] p-8 rounded-2xl select-none flex flex-col justify-between items-center col-span-1 lg:col-span-2 text-[1.6rem]">
      <div className="flex flex-col items-center">
        <h3 className="text-4xl">免安裝啟動器：</h3>
        <p className="mt-4 mb-6">不用安裝，解壓縮後直接打開 &quot;<span className="font-semibold">模組包啟動器.exe</span>&quot; 即可開始遊玩</p>
      </div>
      <DownloadButton text="下載啟動器 📦" url={data.links.launcher}/>
    </div>
  )
}


function TraditionalDownloadSection({data}: {data: Modpack}) {
  return (
    <div className="bg-[#2D2D2D] p-8 rounded-2xl select-none flex flex-col justify-between items-center text-[1.6rem] col-span-1">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">傳統版模組包：</h3>
        <p className="mt-3 mb-4 text-[1.35rem]">將模組包解壓縮後，把裡面的資料夾全部拖進minecraft資料夾</p>
      </div>
      <DownloadButton text="下載傳統包 📦" url={data.links.trd}/>
    </div>
  )
}

function CurseForgeDownloadSection({data}: {data: Modpack}) {
  return (
    <div className="bg-[#2D2D2D] p-8 rounded-2xl select-none flex flex-col justify-between items-center text-[1.6rem] col-span-1">
      <div className="flex flex-col items-center">
        <h3 className="text-3xl">CurseForge版：</h3>
        <p className="mt-3 mb-4 text-[1.35rem]">使用CurseForge導入模組包</p>
      </div>
      <DownloadButton text="下載模組包 📦" url={data.links.cf}/>
    </div>
  )
}

function DownloadButton({text, url}: {text: string, url: string}) {
  if (url)
    return (
      <a href={url} target="_blank">
        <button className="mt-1 py-2 px-3 bg-[#DF0000] select-none text-2xl rounded-[1.2rem]">{text}</button>
      </a>
    )
  else
    return (
      <button className="mt-1 py-2 px-3 bg-[#646464] select-none text-2xl rounded-[1.2rem]">尚未完成 📦</button>
    )
}
