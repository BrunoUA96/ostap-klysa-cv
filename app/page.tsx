"use client";
import { MouseBg } from "@/components/MouseBg";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { TestCard } from "@/components/home/TestCard";
import { LayoutGroup, motion } from "framer-motion";

export default function Home() {
  return (
    <div className="">
      <MouseBg />
      <h4 className="tracking-wide">{"</>"}</h4>
      <About />
      <Experience />
    </div>
  );
}
