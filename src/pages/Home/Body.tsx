import "./Body.css"

export function Body() {
  return (
    <div className="grid place-content-center">
      <div className="mt-12 mb-24 grid grid-cols-1 md:grid-cols-2 gap-20 text-center">
        <InfoText/>
        <ImagesButton/>
        <VideosButton/>
        <Qna/>
      </div>
    </div>
  )
}

function InfoText() {
  return (
    <div className="flex flex-col col-span-1 md:col-span-2 row-span-1">
      <h2 className="text-5xl m-11">伺服器介紹</h2>
      <div className="bg-[#2D2D2D] rounded-3xl">
        <p className="text-center p-6 text-[1.6rem]">
          我們是一個成立五年的伺服器，最特別的是進來玩不用擔心有白名單！
          我們每隔一陣子就會換季(沒有固定時間)，
          換季前會先舉辦投票確定大家都同意之後才會換季，
          換季後也會提供地圖檔讓大家下載喔！
          (我有時候會忘記上傳XD)
        </p>
      </div>
    </div>
  )
}

function Qna() {
  return (
    <div className="flex flex-col col-span-1 md:col-span-2 row-span-1">
      <h2 className="text-5xl m-11">常見問題 Q&A</h2>
      <div className="bg-[#2D2D2D] rounded-3xl p-6 flex gap-16 flex-col text-[1.6rem]">
        <p className="text-left">
            <span className="QNA-Q">Q</span>：加入伺服器需要安裝模組包嗎？<br/>
            <span className="QNA-A">A</span>：需要，但因為安裝模組包的過程太複雜，所以我們把他打包成免安裝啟動器，只要點一下就可以直接開，不需要安裝或設定啟動器可以在
            <a href="downloads#main-pack-launcher" target="_blank" className="underline-offset-4 underline text-indigo-400">這裡下載</a>
        </p>
        <p className="text-left">
            <span className="QNA-Q">Q</span>：什麼是換季？<br/>
            <span className="QNA-A">A</span>：換季就是更換模組包伺服器模組包並重置地圖！
        </p>
        <p className="text-left">
            <span className="QNA-Q">Q</span>：換季的時候我的東西會消失嗎？<br/>
            <span className="QNA-A">A</span>：換季的時候會全部歸零喔！
        </p>
        <p className="text-left">
            <span className="QNA-Q">Q</span>：那為什麼要換季？<br/>
            <span className="QNA-A">A</span>：換季最主要有兩個原因：<br/>
            <span className="pl-11">１. 因為大家玩膩了，或破關了，想換一個模組包來玩</span><br/>
            <span className="pl-11">２. 因為伺服器太卡無法負擔</span>
        </p>
        <p className="text-left">
            <span className="QNA-Q">Q</span>：換季的模組包怎麼決定？<br/>
            <span className="QNA-A">A</span>：換季前會由投票來決定喔！
        </p>
        <p className="text-left">
            <span className="QNA-Q">Q</span>：可以不要換季嗎？<br/>
            <span className="QNA-A">A</span>：我們目前有在研究如何在不會卡的狀況下長期開設模組包，如果研究成功將會開設長期伺服器！
        </p>
      </div>
    </div>
  )
}

function ImagesButton() {
  return (
    <div className="rounded-2xl w-full h-56 bg-center bg-cover col-span-1 row-span-1">
      <a className="rounded-2xl backdrop-brightness-75 h-full w-full grid place-content-center">
        {/* <h2 className="text-6xl select-none">教學影片</h2> */}
        <h2 className="text-6xl select-none">尚未完成</h2>
      </a>
    </div>
  )
}

function VideosButton() {
  return (
    <div className="rounded-2xl w-full h-56 bg-center bg-cover col-span-1 row-span-1">
      <a href="https://www.youtube.com/@user-mc5ov5py8m/videos" target="_blank" className="rounded-2xl backdrop-brightness-75 h-full w-full grid place-content-center">
        {/* <h2 className="text-6xl select-none">教學影片</h2> */}
        <h2 className="text-6xl select-none">影片</h2>
      </a>
    </div>
  )
}
