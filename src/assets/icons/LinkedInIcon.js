import React from "react";
import { motion } from "framer-motion";

const LinkedInIcon = ({ strokeColor }) => {
  return (
    <motion.svg
      style={{ width: "80%", height: "80%", stroke: strokeColor ?? "#fff" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 128 128"
      className="pointer-events-auto customSvg"
    >
      <motion.path
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1,
        }}
        strokeWidth={4}
        strokeDasharray="0 1"
        fill="none"
        d="M116 3H12a8.91 8.91 0 0 0-9 8.8v104.42a8.91 8.91 0 0 0 9 8.78h104a8.93 8.93 0 0 0 9-8.81V11.77A8.93 8.93 0 0 0 116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1 1 10.49-10.5 10.5 10.5 0 0 1-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z"
      />
    </motion.svg>
  );
};

export default LinkedInIcon;
