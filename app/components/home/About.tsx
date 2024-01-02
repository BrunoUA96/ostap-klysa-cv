"use client";
import { motion } from "framer-motion";
import React from "react";

export const About = () => (
  <motion.h3
    initial={{ filter: "blur(40px)", x: 40 }}
    animate={{ filter: "blur(0px)", x: 0 }}
    className="text-base mb-8 font-light">
    Passionate developer offering 5+ years of experience,
    <span className="bg-white dark:bg-slate-700 dark:text-white text-black px-2">
      strong
    </span>{" "}
    sense of web design and commitment to the user experience, including the
    accessibility.{" "}
    <span className="bg-white dark:bg-slate-700 dark:text-white text-black px-2">
      Working
    </span>{" "}
    on wide range of project types, from landing pages to large platforms.{" "}
    <span className="bg-white dark:bg-slate-700 dark:text-white text-black px-2">
      Fast
    </span>{" "}
    adaptation to new Technologies, Frameworks and Program Languages.{" "}
    <span className="bg-white dark:bg-slate-700 dark:text-white text-black px-2">
      Comfortable
    </span>{" "}
    with working with code written by others, and development from scratch.
    Excellent communication skills and great collaborator.
  </motion.h3>
);
