import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Section1 = () => {
  return (
    <div className="h-screen flex items-center justify-start">
      <motion.div className=" px-[20px]">
        <TypeAnimation
          sequence={["WHOAMI?", 1000]}
          speed={50}
          className="text-[var(--var-accent)] text-3xl  mb-2"
          repeat={Infinity}
        />
        <div className="overflow-hidden h-[60px]">
          <motion.h1
            viewport={{ once: true }}
            initial={{ height: 0, y: 40 }}
            whileInView={{ height: "auto", y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-[4.4rem] text-white mt-4"
          >
            Melanie Rodrigues
          </motion.h1>
        </div>
        <span
          style={{
            position: "absolute",
            textTransform: "uppercase",
            fontFamily: "Ampersand-Regular",
            letterSpacing: "0.1em",
          }}
          className="text-[1.2rem] md:text-2xl mt-4 text-white"
        >
          a full stack software engineer
        </span>
      </motion.div>
    </div>
  );
};

export default Section1;
