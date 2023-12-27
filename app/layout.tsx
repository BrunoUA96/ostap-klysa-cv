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
      <body className={fira_code.className}>
        <div className="m-auto min-h-screen max-w-screen-xl lg:grid grid-cols-3 gap-4 px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0 leading-relaxed">
          <Header />
          <main className="col-span-2 pt-16 px-16">{children}</main>
        </div>
      </body>
    </html>
  );
}
