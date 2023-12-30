import { useEffect, useRef } from "react";

import { BsFullscreenExit } from "react-icons/bs";
import { LuExternalLink } from "react-icons/lu";

import { AnimatePresence, motion } from "framer-motion";

import { A11y, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { SwiperImage } from "./SwiperImage";
import { ResponsabilityList } from "./ResponsabilityList";

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
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setCardInfo(null);
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // Mount function (subscribe)
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        event &&
        !event.composedPath().includes(modalRef.current)
      ) {
        setCardInfo(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    // To unmount function (unsubscribe)
    // When i leave from this page, need to unsubscribe from memory
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [setCardInfo]);

  return (
    <div className="modal fixed top-0 left-0 right-0 bottom-0 p-3 md:p-9 flex justify-center">
      <motion.div
        ref={modalRef}
        className="rounded-2xl w-full max-w-7xl shrink-0 max-h-full z-10 bg-slate-300/90 backdrop-blur-sm overflow-hidden overflow-y-auto p-4 pt-12 md:p-20 relative"
        layoutId={`${cardInfo?.id}-card`}>
        {cardInfo?.images.length && (
          <Swiper
            slidesPerView={1}
            modules={[Navigation, A11y]}
            navigation
            autoHeight
            observer
            resizeObserver
            observeParents
            className="xl:!h-[80%]">
            <AnimatePresence>
              {cardInfo?.images.map((image, index) => {
                return (
                  <SwiperSlide className="xl:!h-full" key={index}>
                    {/* <div className="h-full"> */}
                    <SwiperImage
                      imageUrl={image.url}
                      imgAlt={cardInfo?.title || ""}
                      cardId={`${index === 0 ? cardInfo?.id : index}-image`}
                    />
                    {/* </div> */}
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
        <div className="mt-6 flex flex-col md:flex-row justify-between gap-6">
          <ResponsabilityList responsabilityList={cardInfo?.responsability} />

          <div className="shrink-0">
            <a
              className="flex gap-3 items-center bg-white rounded-lg px-3 py-2 text-sm underline"
              href={cardInfo?.url}
              target="blank">
              {cardInfo?.title} <LuExternalLink />
            </a>
          </div>
        </div>

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
