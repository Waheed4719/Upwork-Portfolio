import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const [sectionIndex, setSectionIndex] = useState(0);
  const { scrollY } = useScroll();
  const sectionOffsets = [0, 1, 2].map((i) => i * window.innerHeight);

  useEffect(() => {
    const unsubscribeY = scrollY.onChange((y) => {
      const currentIndex = sectionOffsets.findIndex(
        (offset) => y >= offset && y < offset + window.innerHeight
      );
      if (currentIndex !== sectionIndex) {
        setSectionIndex(currentIndex);
      }
    });
    return () => {
      unsubscribeY();
    };
  }, [scrollY, sectionIndex, sectionOffsets]);

  const handleSectionChange = (index) => {
    setSectionIndex(index);
  };

  return (
    <div style={{ height: "300vh" }}>
      {sectionOffsets.map((offset, i) => (
        <Section
          key={i}
          offset={offset}
          index={i}
          sectionIndex={sectionIndex}
          onSectionChange={handleSectionChange}
        />
      ))}
    </div>
  );
}

function Section({ offset, index, sectionIndex, onSectionChange }) {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, (value) => value - offset);

  const handleClick = () => {
    onSectionChange(index);
  };

  return (
    <motion.div
      style={{
        height: "100vh",
        background: index % 2 === 0 ? "white" : "gray",
      }}
      animate={{ y: -sectionIndex * window.innerHeight }}
      transition={{ type: "spring", damping: 200, stiffness: 500 }}
      onClick={handleClick}
    >
      <motion.div
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          translateY,
        }}
      >
        {/* Your section content goes here */}
      </motion.div>
    </motion.div>
  );
}

export default App;
