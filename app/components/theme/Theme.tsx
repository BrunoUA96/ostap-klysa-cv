"use client";

import { ThemeProvider } from "next-themes";

export const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};
