import { motion } from "framer-motion";

import { Card } from "../Card";
import { Project } from "@/lib/api/dto";

export function PortfolioCard({ ...project }: Project) {
  const description = { __html: project.content.html };

  return (
    <Card id={project.id} isPortfolio>
      <div className="flex-shrink-0">
        <motion.img
          src={project.previewImage?.url}
          alt="Company"
          width={200}
          height={100}
          className="w-full max-w-full sm:max-w-[200px] mx-auto"
          layoutId={`${project.id}-image`}
        />
      </div>
      <div>
        <motion.h4
          layoutId={`${project.id}-title`}
          className="text-sm font-semibold mb-3">
          {project.title}
        </motion.h4>

        <motion.div
          layoutId={`${project.id}-content`}
          className="mb-3 text-sm line-clamp-3"
          dangerouslySetInnerHTML={description}
        />
      </div>
    </Card>
  );
}
