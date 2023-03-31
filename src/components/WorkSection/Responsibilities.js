import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const Responsibilities = ({ data }) => {
  const [orderedItems, setOrderedItems] = useState(data);
  const itemRefs = useRef([]);

  useEffect(() => {
    itemRefs.current = itemRefs.current.slice(0, orderedItems.length);
  }, [orderedItems]);

  const handleClick = (index) => {
    if (index === 0) return;
    const newOrder = [...orderedItems];
    const temp = newOrder[0];
    newOrder[0] = newOrder[index];
    newOrder[index] = temp;
    setOrderedItems(newOrder);
  };

  return (
    <div className="flex flex-wrap mt-[10px]">
      {orderedItems.map((responsibility, index) => (
        <motion.div
          key={responsibility.text}
          onClick={() => handleClick(index)}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 30,
            duration: 0.5,
          }}
          ref={(el) => (itemRefs.current[index] = el)}
          layout
          className={` flex-1 flex p-6 border min-w-[150px] border-white ${
            index === 0 ? "basis-[100%]" : ""
          } font-[roboto] text-white`}
        >
          {index === 0 ? responsibility.description : responsibility.text}
        </motion.div>
      ))}
    </div>
  );
};

export default Responsibilities;
