export function JoinDiscord() {
  return (
    <div className="rounded-3xl p-8 flex flex-row gap-8 bg-[#2D2D2D] justify-center items-center flex-shrink-0 flex-wrap">
      <p className="text-4xl text-center">還有什麼疑問嗎？加入Discord跟我們聊聊吧！</p>
      <a href="https://discord.gg/y8tjbRmxdY" target="_blank" className="block w-fit">
        <button className="flex justify-center items-center text-white w-fit py-1.5 px-3 text-center text-nowrap bg-[#DF0000] text-[1.6rem] rounded-[1.2rem]">
          加入Discord
          <img src="common/images/icons/discord-white.png" className="ml-3 h-[2.4rem] w-[2.4rem]"/>
        </button>
      </a>
    </div>
  )
}
