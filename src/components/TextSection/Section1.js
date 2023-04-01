import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

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
