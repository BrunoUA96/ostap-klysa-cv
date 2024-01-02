"use client";
import { motion } from "framer-motion";
import React from "react";

export const Greeting = () => (
  <motion.div
    initial={{ filter: "blur(40px)", y: -40 }}
    animate={{
      filter: "blur(0px)",
      y: 0,
      transition: { ease: "easeIn", duration: 0.22 },
    }}>
    <h2 className="text-6xl font-bold">
      Hi, <br /> I`m Ostap
    </h2>
    <h4 className="text-lg text-sky-800 dark:text-cyan-400 font-medium my-6">
      Front-End Developer
    </h4>

    <h6 className="mb-5 font-light text-base">
      Creative frontend developer crafting visually stunning and intuitive web
      experiences.
    </h6>
  </motion.div>
);
