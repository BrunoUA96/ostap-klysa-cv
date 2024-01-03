"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import { SiMysql, SiOctobercms, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { DiPhp } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSquareGit } from "react-icons/fa6";

export const Skills = () => {
  const randomTransitionNumber = () => Math.ceil(Math.random() * 50);

  return (
    <div className="text-2xl md:text-3xl xl:text-5xl flex flex-wrap gap-9 my-auto">
      <SkillItem order={randomTransitionNumber()} color="text-yellow-400">
        <IoLogoJavascript />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-sky-600">
        <BiLogoTypescript />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-sky-400">
        <FaReact />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-purple-600">
        <SiRedux />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-red-600">
        <FaAngular />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-rose-400">
        <FaSass />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-violet-700">
        <BsBootstrapFill />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-amber-600">
        <SiOctobercms />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-blue-900">
        <DiPhp />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-blue-600">
        <SiMysql />
      </SkillItem>

      <SkillItem order={randomTransitionNumber()} color="text-red-500">
        <FaSquareGit />
      </SkillItem>
    </div>
  );
};

const SkillItem = ({
  order,
  color,
  children,
}: {
  order: number;
  color: string;
  children: ReactNode;
}) => {
  return (
    <motion.div
      className={color}
      initial={{ opacity: 0, y: -200 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: order * 1 * 0.02 }}>
      {children}
    </motion.div>
  );
};
