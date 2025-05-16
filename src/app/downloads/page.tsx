import Downloads from "october-site/page-components/Downloads"
import { Modpack } from "october-site/util/types"

export default async function DownloadsPage() {
    const res = await fetch("https://api.modpack-manager.octsrv.org/servers/main/modpack")
    const data: Modpack = await res.json()
    return <Downloads data={data} />
};
