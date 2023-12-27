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
    if (cardInfo) {
      document.querySelector("body")?.classList.toggle("overflow-hidden");
    }
  }, [cardInfo]);

  const [hoverCard, setHoverCard] = useState("");

  useLayoutEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setCardInfo(null);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  const onCardHandler = (project: Project) => {
    openModal(project);
    setHoverCard("");
  };

  return (
    <>
      <ol className="group/list" onMouseLeave={() => setHoverCard("")}>
        {projectList.map((project) => (
          <motion.div
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
                  className="absolute inset-0 rounded-md bg-slate-300/40 -m-4 p-4 -z-10"
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
