export enum Pages {
  HOME = "/",
  RULES = "/rules",
  ANNOUNCEMENTS = "/announcements",
  DOWNLOADS = "/downloads",
}

export type Modpack = {
  id: string
  name: string
  url: string
  mc_version: string
  links: {
    launcher: string
    cf: string
    trd: string
  }
}
