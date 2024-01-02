"use client";
import { FaAngular, FaReact, FaSass } from "react-icons/fa";
import { SiMysql, SiOctobercms, SiRedux } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrapFill } from "react-icons/bs";
import { DiPhp } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaSquareGit } from "react-icons/fa6";
import { motion } from "framer-motion";

export const Skills = () => {
  const randomTransitionNumber = () => Math.ceil(Math.random());

  return (
    <div className="text-5xl flex flex-wrap gap-14 my-auto">
      <motion.div
        className="text-yellow-400"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 1 * 0.02 }}>
        <IoLogoJavascript />
      </motion.div>
      <motion.div
        className="text-sky-600"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 2 * 0.02 }}>
        <BiLogoTypescript />
      </motion.div>
      <motion.div
        className="text-sky-400"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 3 * 0.02 }}>
        <FaReact />
      </motion.div>
      <motion.div
        className="text-purple-600"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 4 * 0.02 }}>
        <SiRedux />
      </motion.div>
      <motion.div
        className="text-red-600"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 5 * 0.02 }}>
        <FaAngular />
      </motion.div>

      <motion.div
        className="text-rose-400"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 6 * 0.02 }}>
        <FaSass />
      </motion.div>
      <motion.div
        className="text-violet-700"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 7 * 0.02 }}>
        <BsBootstrapFill />
      </motion.div>
      <motion.div
        className="text-amber-600"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 8 * 0.02 }}>
        <SiOctobercms />
      </motion.div>
      <motion.div
        className="text-blue-900"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 9 * 0.02 }}>
        <DiPhp />
      </motion.div>
      <motion.div
        className="text-blue-600"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 10 * 0.02 }}>
        <SiMysql />
      </motion.div>
      <motion.div
        className="text-red-500"
        initial={{ opacity: 0, y: -200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: randomTransitionNumber() * 11 * 0.02 }}>
        <FaSquareGit />
      </motion.div>
    </div>
  );
};
