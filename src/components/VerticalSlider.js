import { useState } from "react";
import { motion } from "framer-motion";

const VerticalSlider = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (e) => {
    setScrollY(e.target.scrollTop);
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
