import BackgroundWrapper from "october-site/components/BackgroundWrapper"
import bannerBg from "../../public/announcements/images/banner.png"

export default function Announcements() {
  return (
    <>
      <Header/>
      <h2 className="text-4xl text-center p-20">尚未完成，敬請期待~</h2>
    </>
  )
}

function Header() {
  return (
    <BackgroundWrapper className="h-[30rem] w-ful bg-cover bg-center" image={bannerBg}>
      <div className="h-full w-full bg-black bg-opacity-5 grid place-content-center">
        <div className="flex flex-col">
          <h1 className="text-white inline text-center px-3 text-[3.8rem]">伺服器公告</h1>
        </div>
      </div>
    </BackgroundWrapper>
  )
}
