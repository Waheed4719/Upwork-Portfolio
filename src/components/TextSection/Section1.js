import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const texts = ["a full stack software engineer", "a DIY enthusiast"];
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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      let next = index + 1;
      if (next === texts.length) {
        next = 0;
      }
      setIndex(next);
    }, 3 * 1000);
  }, [index, setIndex]);

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
        <AnimatePresence>
          <motion.span
            style={{ position: "absolute" }}
            variants={variants}
            key={index}
            initial="enter"
            animate="center"
            exit="exit"
            className="text-2xl mt-4 text-white"
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {texts[index]}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Section1;
