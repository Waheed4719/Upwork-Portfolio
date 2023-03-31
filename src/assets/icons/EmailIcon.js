import React from "react";
import { motion } from "framer-motion";

const EmailIcon = ({ strokeColor }) => {
  return (
    <motion.svg
      style={{ width: "80%", height: "80%", stroke: strokeColor ?? "#fff" }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
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
        strokeWidth={1}
        strokeDasharray="0 1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </motion.svg>
  );
};

export default EmailIcon;
