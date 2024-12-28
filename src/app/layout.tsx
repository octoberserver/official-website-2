import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "october-site/components/Nav/Nav";
import { Footer } from "october-site/components/Footer";
import favicon from "../../public/favicon.ico"

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className="text-[10px] sm:text-[14px] md:text-[16px]">
      <head>
        <title>十月模組伺服器 (歷史悠久的 Minecraft 模組伺服器)</title>
        <link rel="icon" href={favicon.src} sizes="any"/>
      </head>
      <body className="min-w-80 w-full">
        <Nav/>
        <div className={inter.className}>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
