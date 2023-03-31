import { motion, AnimationControls } from "framer-motion";
import { useEffect } from "react";
import Card from "../Card";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const CardGrid = ({ data, controls, inView }) => {
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      animate={controls}
      variants={container}
      initial="hidden"
      className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid max-w-full mx-auto gap-[4rem] lg:max-w-[1200px]"
    >
      {data.map((item) => (
        <Card
          key={item.title}
          liveSite={item.liveSite}
          github={item.github}
          image={item.image}
          title={item.title}
          description={item.description}
          technologies={item.technologies}
        />
      ))}
    </motion.div>
  );
};

export default CardGrid;
