import React from "react";
import Image from "next/image";

import { Project } from "@/types/project";
import { motion } from "framer-motion";

import { BsArrowsFullscreen } from "react-icons/bs";
import { Card } from "../Card";

export const PortfolioCard = ({ ...project }: Project) => {
  const MotionImage = motion(Image);
  return (
    <Card id={project.id}>
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
    </Card>
  );
};
