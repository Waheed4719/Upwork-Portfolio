import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, style, id }) => {
  return (
    <motion.div
      id={id}
      style={{ ...style }}
      className={`h-screen flex items-center justify-center bg-transparent relative pt-[60px] z-[11] snap-start`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
