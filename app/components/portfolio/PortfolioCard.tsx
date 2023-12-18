import React from "react";
import Image from "next/image";

import { Project } from "@/types/project";
import { motion } from "framer-motion";

import { BsArrowsFullscreen } from "react-icons/bs";

export const PortfolioCard = ({ ...project }: Project) => {
  const MotionImage = motion(Image);
  return (
    <>
      <motion.li layoutId={`${project.id}-card`} className="mb-12">
        <motion.div className="group lg:hover:!opacity-100 lg:group-hover/list:opacity-50 relative">
          <motion.div className="flex gap-4 transition-all motion-reduce:transition-none bg-transparent cursor-pointer">
            <motion.div className=" flex-shrink-0">
              <MotionImage
                src={project.previewImage.url}
                alt="Company"
                width={200}
                height={100}
                layoutId={`${project.id}-image`}
              />
            </motion.div>
            <motion.div>
              <motion.h4
                layoutId={`${project.id}-title`}
                className="text-sm font-semibold mb-3">
                {project.title}
              </motion.h4>
              <motion.p
                layoutId={`${project.id}-content`}
                className="mb-3 text-sm line-clamp-3">
                {project.content.text}
              </motion.p>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.2,
            }}
            whileTap={{ scale: 1.2 }}
            animate={{
              scale: 0.9,
            }}
            layoutId={`${project.id}-toggle`}
            className="absolute -top-0.5 right-0 bg-white text-xs p-2 rounded-lg cursor-pointer">
            <BsArrowsFullscreen />
          </motion.div>
        </motion.div>
      </motion.li>
    </>
  );
};
