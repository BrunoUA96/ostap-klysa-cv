"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import React from "react";

export const AnimationWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { theme } = useTheme();
  return (
    <motion.div
      className="h-full flex flex-col"
      key={theme}
      initial={{ filter: "blur(40px)", opacity: 0 }}
      animate={{
        filter: "blur(0px)",
        opacity: 1,
      }}
      exit={{ filter: "blur(40px)", opacity: 0 }}
      transition={{ duration: 0.7 }}>
      {children}
    </motion.div>
  );
};
