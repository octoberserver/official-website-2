import Image from 'next/image'

export function Footer() {
  return (
    <>
      <div className="h-0.5 bg-[#3C3C3C] w-full"></div>
      <div className="mt-8 mb-12 h-16 w-full flex justify-center items-center gap-8">
        <a href="https://discord.gg/y8tjbRmxdY" target="_blank" className="relative h-[3rem] w-[3rem]">
            <Image alt="discord" src="/common/images/icons/footer/discord.png" fill />
        </a>
        <a href="https://github.com/octoberserver" target="_blank" className="relative h-[2.6rem] w-[2.6rem]">
            <Image alt="github" src="/common/images/icons/footer/github.png" fill />
        </a>
        <a href="https://www.youtube.com/channel/UCK9nrECvpyrM9urPFOBT0aQ" target="_blank" className="h-[3rem] w-[3rem] relative">
            <Image alt="youtube" src="/common/images/icons/footer/youtube.png" fill />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100064883016723" target="_blank" className="h-[3.8rem] w-[3.8rem] relative">
            <Image alt="facebook" src="/common/images/icons/footer/facebook.png" fill />
        </a>
        <a href="https://tutorials.octoberserver.net/" target="_blank" className="h-[3rem] w-[3rem] relative">
            <Image alt="tutorial" src="/common/images/icons/footer/tools.png" fill />
        </a>
      </div>
    </>
  )
}
