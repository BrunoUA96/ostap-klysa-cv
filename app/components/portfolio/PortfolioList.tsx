"use client";
import React, { useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { PortfolioCard } from "./PortfolioCard";
import { Modal } from "../Modal";

import { Project } from "@/lib/api/dto";

export function PortfolioList({ projectList }: { projectList: Project[] }) {
  const [cardInfo, setCardInfo] = useState<Project | null>(null);

  const openModal = (cardInfo: Project) => {
    setCardInfo(cardInfo);
  };

  useLayoutEffect(() => {
    const body = document.querySelector("body");

    if (cardInfo) {
      body?.classList.add("overflow-hidden");
    } else {
      body?.classList.remove("overflow-hidden");
    }
  }, [cardInfo]);

  const [hoverCard, setHoverCard] = useState("");

  const onCardHandler = (project: Project) => {
    openModal(project);
    setHoverCard("");
  };

  return (
    <>
      <ol className="group/list" onMouseLeave={() => setHoverCard("")}>
        {projectList.map((project, i) => (
          <motion.div
            initial={{
              opacity: 0,
              x: i % 2 ? -100 : 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ delay: i * 0.2 }}
            className="relative mb-12"
            onMouseEnter={() => {
              setHoverCard(project.id);
            }}
            onClick={() => onCardHandler(project)}
            key={project.id}>
            <PortfolioCard {...project} />

            <AnimatePresence>
              {hoverCard === project.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  layoutId="bubble"
                  className="absolute inset-0 rounded-md bg-slate-400/30 dark:bg-slate-700/30 backdrop-blur-sm -m-4 p-4 -z-10"
                />
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </ol>
      <AnimatePresence>
        {cardInfo && <Modal cardInfo={cardInfo} setCardInfo={setCardInfo} />}
      </AnimatePresence>
    </>
  );
}
