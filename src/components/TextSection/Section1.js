import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const variants = {
  enter: (direction) => {
    return {
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      opacity: 0,
    };
  },
};

const Section1 = () => {
  return (
    <div className="h-screen flex items-center justify-start">
      <motion.div className=" px-[20px]">
        <TypeAnimation
          sequence={["whoami?", 1000]}
          speed={50}
          className="text-[#217017] text-3xl  mb-2"
          repeat={Infinity}
        />
        <h1 className="text-5xl text-white mt-4">Melanie Rodrigues</h1>
        <span
          style={{ position: "absolute" }}
          className="text-2xl mt-4 text-white"
        >
          a full stack software engineer
        </span>
      </motion.div>
    </div>
  );
};

export default Section1;
