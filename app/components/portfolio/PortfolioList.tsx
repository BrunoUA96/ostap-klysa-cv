"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

import { Project, ProjectResponse } from "@/types/project";

import Image from "next/image";
import { PortfolioCard } from "./PortfolioCard";

import { BsFullscreenExit } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { A11y, Navigation } from "swiper/modules";
import { Modal } from "../Modal";

const QUERY = gql`
  {
    projects {
      id
      title
      url
      previewImage {
        url
      }
      images {
        url
      }
      content {
        text
      }
    }
  }
`;

async function getProjects() {
  const hygraph = new GraphQLClient(
    "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clpy9x1jckoj501t0boi1b44e/master"
  );

  const { projects } = await hygraph.request<ProjectResponse>(QUERY);

  return [...projects];
}

export const PortfolioList = () => {
  const [data, setData] = useState<Project[]>([]);

  useEffect(() => {
    const get = async () => {
      const res = await getProjects();
      setData(res);
    };

    get();
  }, []);

  const [cardInfo, setCardInfo] = useState<Project | null>(null);

  const openModal = (cardInfo: Project) => {
    setCardInfo(cardInfo);
  };

  useLayoutEffect(() => {
    document.querySelector("body")?.classList.toggle("overflow-hidden");
  }, [cardInfo]);
  const [hoverCard, setHoverCard] = useState("");

  useEffect(() => {
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
      <LayoutGroup>
        <ol className="group/list" onMouseLeave={() => setHoverCard("")}>
          {data.map((project) => (
            <motion.div
              className="relative"
              onMouseEnter={() => {
                setHoverCard(project.id);
              }}
              onClick={() => onCardHandler(project)}
              key={project.id}>
              <PortfolioCard {...project} />

              <AnimatePresence>
                {hoverCard === project.id && (
                  <motion.div
                    layoutId="bubble"
                    className="absolute inset-0 rounded-md bg-slate-300/50 -m-4 p-4 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg -z-10"
                  />
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </ol>
        <AnimatePresence>
          {cardInfo && <Modal cardInfo={cardInfo} setCardInfo={setCardInfo} />}
        </AnimatePresence>
      </LayoutGroup>
    </>
  );
};
