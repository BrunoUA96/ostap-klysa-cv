import Image from "next/image";

import { motion } from "framer-motion";

export const SwiperImage = ({
  imageUrl,
  imgAlt,
  cardId,
}: {
  imageUrl: string;
  imgAlt: string;
  cardId: string;
}) => {
  const MotionImage = motion(Image);

  return (
    <>
      <MotionImage
        src={imageUrl}
        layoutId={cardId}
        alt={imgAlt}
        width={600}
        height={400}
        className="w-full h-auto xl:h-full xl:w-auto xl:max-h-full mx-auto"
      />
    </>
  );
};
