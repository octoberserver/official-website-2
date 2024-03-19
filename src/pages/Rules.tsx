import { Header } from "october-site/components/Header";
import { JoinDiscord } from "october-site/components/JoinDiscord";

export function Rules() {
  return (
    <>
      <Header background="">
        <h1 className="page-title px-3 inline text-center text-6xl text-white">伺服器規則</h1>
      </Header>
      <div className="grid place-content-center w-full">
        <div className="grid place-content-center mt-12 mb-24 gap-20 w-[75rem]">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl m-11">📝 遊玩時請遵守規則</h2>
            <div className="bg-[#2D2D2D] rounded-3xl p-6 flex gap-1 flex-col text-[1.6rem]">
              <Rule num={1}>
                請尊重他人，請使用友善禮貌的態度溝通
              </Rule>
              <Rule num={2}>
                禁止任何惡意言語，人身攻擊或歧視
              </Rule>
              <Rule num={3}>
                請勿在公開頻道討論政治，宗教，色情等敏感議題
              </Rule>
              <Rule num={4}>
                禁止任何騷擾行為(包括宣傳，廣告)
              </Rule>
              <Rule num={5}>
                請尊重管理員及他們的決定(如果管理員濫權請私訊十月，禁止假冒管理員/伺服器官方或使用類似名稱，頭像誤導他人)
              </Rule>
              <Rule num={6}>
                未經許可請勿亂動別人的東西(若有疑問請先找管理員詢問)
              </Rule>
              <Rule num={7}>
                規則不定時會更新，請記得定期來查看
              </Rule>
            </div>
          </div>
          <JoinDiscord/>
        </div>
      </div>
    </>
  )
}

function Rule({num, children}: {num: number, children: string}) {
  return (
    <p className="text-left">
      <span className="font-semibold">{num}.</span>
      {children}
    </p>
  )
}
