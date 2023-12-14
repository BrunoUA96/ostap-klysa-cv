"use client";
import { useMousePosition } from "@/lib/mouse-position";
import React from "react";

export const MouseBg = () => {
  const { x, y } = useMousePosition();

  return (
    <span
      style={{ left: x, top: y }}
      className="fixed -z-20 h-80 w-80 -translate-y-1/2 -translate-x-1/2 bg-sky-200 rounded-full blur-3xl dark:from-sky-900 dark:via-[#0141ff] dark:opacity-40"
    />
  );
};
