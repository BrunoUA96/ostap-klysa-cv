import { motion } from "framer-motion";

import { Card } from "../Card";
import { Project } from "@/lib/api/dto";

export function PortfolioCard({ ...project }: Project) {
  return (
    <Card id={project.id} isPortfolio>
      <div className="flex-shrink-0">
        <motion.img
          src={project.previewImage.url}
          alt="Company"
          width={200}
          height={100}
          layoutId={`${project.id}-image`}
        />
      </div>
      <div>
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
      </div>
    </Card>
  );
}
