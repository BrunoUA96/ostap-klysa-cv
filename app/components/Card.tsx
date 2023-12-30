import { motion } from "framer-motion";
import React from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export const Card = ({
  id,
  isPortfolio = false,
  children,
}: {
  id: string;
  isPortfolio?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <motion.li
      className={isPortfolio ? "pt-12 sm:pt-0" : ""}
      layoutId={`${id}-card`}>
      <div className="group">
        <div className="flex flex-col sm:flex-row lg:hover:!opacity-100 lg:hover:!scale-100 lg:group-hover/list:opacity-20 lg:group-hover/list:scale-95 gap-4 transition-all motion-reduce:transition-none bg-transparent cursor-pointer">
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
              className="absolute -top-0.5 right-0 bg-white text-xl sm:text-xs p-2 rounded-lg cursor-pointer">
              <BsArrowsFullscreen />
            </motion.div>
          )}
        </div>
      </div>
    </motion.li>
  );
};
