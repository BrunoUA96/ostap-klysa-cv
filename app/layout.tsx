import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

import { Header } from "@/app/components/header/Header";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Ostap Klysa CV",
  description: "Hi, I`m Ostap. Front-End Developer from Porto :)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${fira_code.className} bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-200`}>
        <div className="m-auto min-h-screen max-w-screen-xl lg:grid grid-cols-3 gap-4 px-6 md:px-12 md:py-20 lg:px-24 lg:py-0 leading-relaxed">
          <Header />
          <main className="col-span-2 pt-5 md:p-8 lg:p-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
