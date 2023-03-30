import React from "react";
import { motion } from "framer-motion";

const Section = ({ children, style }) => {
  return (
    <motion.div
      style={{ ...style }}
      className={`h-screen flex items-center justify-center bg-transparent relative pt-[60px] z-[11]`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Section;
