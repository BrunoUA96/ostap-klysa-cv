import { motion } from "framer-motion";
import React, { ReactNode } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export const Card = ({
  id,
  isPortfolio,
  children,
}: {
  id: string;
  isPortfolio: boolean;
  children: React.ReactNode;
}) => {
  return (
    <motion.li layoutId={`${id}-card`}>
      <div className="group lg:hover:!opacity-100 lg:hover:!scale-100 lg:group-hover/list:opacity-20 lg:group-hover/list:scale-95 transition-all">
        <div className="flex gap-4 transition-all motion-reduce:transition-none bg-transparent cursor-pointer">
          {/* Choldren */}
          {children}

          {isPortfolio && (
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
              whileTap={{ scale: 1.2 }}
              animate={{
                scale: 0.9,
              }}
              layoutId={`${id}-toggle`}
              className="absolute -top-0.5 right-0 bg-white text-xs p-2 rounded-lg cursor-pointer">
              <BsArrowsFullscreen />
            </motion.div>
          )}
        </div>
      </div>
    </motion.li>
  );
};
