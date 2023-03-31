import { useState } from "react";
import { motion } from "framer-motion";

const VerticalSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);
  };

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      className="no-scrollbar"
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
        WebkitOverflowScrolling: "touch",
      }}
      onScroll={handleScroll}
      onViewportEnter={() => console.log("enter")}
    >
      <motion.div
        className="bg-red-200"
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        Page 1
      </motion.div>
      <motion.div
        className="bg-blue-200"
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        Page 2
      </motion.div>
      <motion.div
        className="bg-yellow-200"
        style={{
          height: "100vh",
          scrollSnapAlign: "start",
        }}
      >
        Page 3
      </motion.div>
    </motion.div>
  );
};

export default VerticalSlider;
