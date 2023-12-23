import React from "react";
import Image from "next/image";

import { BsFullscreenExit } from "react-icons/bs";

import { AnimatePresence, motion } from "framer-motion";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Project } from "@/lib/api/dto";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export const Modal = ({
  setCardInfo,
  cardInfo,
}: {
  setCardInfo: (info: Project | null) => void;
  cardInfo: Project | null;
}) => {
  const MotionImage = motion(Image);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 p-9 flex">
      <motion.div
        className="rounded-2xl w-full shrink-0 max-h-full z-10 bg-slate-300/50 backdrop-blur-md overflow-hidden overflow-y-auto p-20 relative"
        layoutId={`${cardInfo?.id}-card`}>
        {cardInfo?.images.length && (
          <Swiper
            slidesPerView={1}
            modules={[Navigation, A11y]}
            navigation
            autoHeight
            observer
            resizeObserver
            observeParents>
            <AnimatePresence>
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
            </AnimatePresence>
          </Swiper>
        )}

        <motion.h2
          className="my-12 text-3xl text-center font-semibold"
          layoutId={`${cardInfo?.id}-title`}>
          {cardInfo?.title}
        </motion.h2>
        <motion.p layoutId={`${cardInfo?.id}-content`}>
          {cardInfo?.content.text}
        </motion.p>

        <motion.div
          layoutId={`${cardInfo?.id}-toggle`}
          whileHover={{
            scale: 1,
          }}
          whileTap={{ scale: 1 }}
          initial={{
            scale: 0.8,
            top: "0.5rem",
            right: "0.5rem",
          }}
          className="absolute flex items-center gap-3 bg-white text-xs p-2 rounded-lg cursor-pointer"
          onClick={() => setCardInfo(null)}>
          <span className="text-sm">Esc</span> / <BsFullscreenExit />
        </motion.div>
      </motion.div>
    </div>
  );
};
