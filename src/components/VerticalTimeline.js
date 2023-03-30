import React from "react";
import { motion } from "framer-motion";

const VerticalTimeline = React.forwardRef(({ entered = false }, ref) => {
  return (
    <motion.div
      ref={ref}
      className="fixed top-0 w-[2px] h-screen left-[20px] md:left-[100px] z-[100]"
    >
      <div
        className={`transition-colors duration-200 h-screen bg-white top-0 opacity-[0.5] ${
          entered ? "bg-white" : "bg-[#217017]"
        }`}
      ></div>
      <motion.div
        initial={{
          y: "70%",
        }}
        animate={{
          y: entered ? "70px" : "50%",
        }}
        transition={{
          duration: 1,
          stiffness: 50,
          damping: 30,
          restDelta: 0.001,
          type: "spring",
        }}
        className={`absolute top-0 left-0 w-[2px] min-h-screen  `}
      >
        <div
          className={`transition-colors duration-200  bg-white w-3 h-3 rounded-full left-[50%] translate-x-[-5px] ${
            entered ? "bg-white" : "bg-[#217017]"
          } `}
        ></div>
      </motion.div>
    </motion.div>
  );
});

export default VerticalTimeline;
