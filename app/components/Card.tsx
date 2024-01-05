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
      className={isPortfolio ? "pt-12 sm:pt-0 cursor-pointer" : ""}
      layoutId={`${id}-card`}>
      <div className="group">
        <div className="flex flex-col sm:flex-row lg:hover:!opacity-100 lg:hover:!scale-100 lg:group-hover/list:opacity-20 lg:group-hover/list:scale-95 gap-4 transition-all motion-reduce:transition-none bg-transparent">
          {/* Choldren */}
          {children}

          {isPortfolio && (
            <motion.div
              layoutId={`${id}-toggle`}
              className="absolute sm:-top-1 right-0 bg-white text-xl sm:text-xs lg:group-hover:text-xl dark:text-black lg:group-hover:-top-2 lg:group-hover:-right-2 p-2 rounded-lg cursor-pointer transition-all">
              <BsArrowsFullscreen />
            </motion.div>
          )}
        </div>
      </div>
    </motion.li>
  );
};
