import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "../components/nav/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <head>
      </head>
      <body>
        <Nav/>
        <div className={inter.className}>{children}</div>
      </body>
    </html>
  );
}
