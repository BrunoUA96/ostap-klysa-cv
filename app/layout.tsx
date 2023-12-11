import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/header/Header";

const fira_code = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          fira_code.className +
          " overflow-hidden m-auto min-h-screen max-w-screen-xl grid grid-cols-3 gap-4 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
        }>
        <Header />
        <main className="col-span-2 pt-16 px-16">{children}</main>
      </body>
    </html>
  );
}
