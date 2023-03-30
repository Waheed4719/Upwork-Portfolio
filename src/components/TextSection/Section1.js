import React from "react";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="h-screen flex items-center justify-start">
      <motion.div className=" px-[20px]">
        <motion.h1 className="text-[#217017] text-3xl  mb-4">whoamI?</motion.h1>
        <h1 className="text-5xl text-white">Alex Michailidis</h1>
      </motion.div>
    </div>
  );
};

export default Section1;
