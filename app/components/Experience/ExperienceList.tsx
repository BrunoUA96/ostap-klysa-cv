"use client";

import { Experience } from "@/lib/api/dto";
import { ExperienceCard } from "./ExperienceCard";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const ExperienceList = ({
  experienceList,
}: {
  experienceList: Experience[];
}) => {
  const [hoverCard, setHoverCard] = useState("");

  return (
    <ol className="group/list" onMouseLeave={() => setHoverCard("")}>
      {experienceList.map((exp) => (
        <div
          key={exp.id}
          className="mb-12 last:mb-0 relative"
          onMouseEnter={() => {
            setHoverCard(exp.id);
          }}>
          <ExperienceCard {...exp} />
          <AnimatePresence>
            {hoverCard === exp.id && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                layoutId="bubblee"
                className="absolute inset-0 rounded-md bg-slate-400/30 backdrop-blur-sm -m-4 p-4 -z-10"
              />
            )}
          </AnimatePresence>
        </div>
      ))}
    </ol>
  );
};
