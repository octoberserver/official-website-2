import { GetServerSideProps, InferGetServerSidePropsType } from "next/types";
import Downloads from "october-site/page-components/Downloads";
import { Modpack } from "october-site/util/types";

export const dynamic = "force-dynamic"

export const getServerSideProps = (async () => {
  const res = await fetch("https://api.modpack-manager.octsrv.org/servers/main/modpack")
  const data: Modpack = await res.json()
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: Modpack }>

export default function DownloadsPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <Downloads data={data}/>
}
