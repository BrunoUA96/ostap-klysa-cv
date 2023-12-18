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

const QUERY = gql`
  {
    projects {
      id
      title
      subtitle
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

const Modal = ({
  setCardInfo,
  cardInfo,
}: {
  setCardInfo: (info: Project | null) => void;
  cardInfo: Project | null;
}) => {
  const MotionImage = motion(Image);

  const MotionSwiper = motion(Swiper);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 p-9 flex">
      <motion.div
        className="rounded-2xl w-full shrink-0 max-h-full z-10 bg-slate-300/50 shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] drop-shadow-lg backdrop-blur-md overflow-hidden p-20"
        layoutId={`${cardInfo?.id}-card`}>
        <AnimatePresence>
          {cardInfo?.images.length && (
            <MotionSwiper
              slidesPerView={1}
              height={400}
              modules={[Navigation, A11y]}
              navigation>
              {cardInfo?.images.map((image, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center">
                      <MotionImage
                        src={image.url}
                        layoutId={`${index === 0 ? cardInfo?.id : index}-image`}
                        alt={cardInfo?.title || ""}
                        width={600}
                        height={400}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </MotionSwiper>
          )}
        </AnimatePresence>

        <motion.h2
          className="my-12 text-3xl text-center font-semibold"
          layoutId={`${cardInfo?.id}-title`}>
          {cardInfo?.title}
        </motion.h2>
        <motion.p layoutId={`${cardInfo?.id}-content`}>
          {cardInfo?.content.text}
        </motion.p>

        <motion.div
          className="absolute top-2 right-2 flex items-center gap-3 bg-white text-md transition-all p-2 rounded-lg scale-90 hover:scale-100 cursor-pointer"
          onClick={() => setCardInfo(null)}>
          <span className="text-sm">Esc</span> / <BsFullscreenExit />
        </motion.div>
      </motion.div>
    </div>
  );
};

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
        <ol className="group/list">
          {data.map((project) => (
            <motion.div
              className="relative"
              onMouseEnter={() => {
                setHoverCard(project.id), console.log("teste");
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
