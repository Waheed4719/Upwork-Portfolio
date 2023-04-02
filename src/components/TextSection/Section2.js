import { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Section2 = ({}) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85vh", "end 40vh"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0, 0.5, 1, 0.4, 0]
  );

  const rotationX = useTransform(scrollYProgress, [0, 0.6], [90, 0]);

  return (
    <div className="h-screen" ref={containerRef}>
      <motion.div className="fixed top-[50%] translate-y-[-50%] px-[20px]">
        <motion.h1
          className="opacity-0 text-white text-4xl md:text-[4.4rem] transition-opacity duration-150 mb-4"
          style={{ opacity, rotateX: rotationX }}
        >
          Curriculam Vitae
        </motion.h1>
        <motion.div className="opacity-0" style={{ opacity }}>
          <span className="italic text-white text-2xl">
            Latin for "course of life"...
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Section2;
