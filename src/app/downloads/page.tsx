import Downloads from "october-site/page-components/Downloads"
import { Modpack } from "october-site/util/types"

export const dynamic = "force-dynamic"

export default async function DownloadsPage() {
    const res = await fetch("https://api.modpack-manager.octsrv.org/servers/main/modpack")
    const data: Modpack | undefined = await res.json()
    return <Downloads data={data} />
};
