import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Card from "../Card";
import Modal from "../../common/Modal";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const CardGrid = ({ data, controls, inView }) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState(undefined);
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
      className="grid-cols-1 grid max-w-full mx-auto gap-[4rem] lg:max-w-[1200px]"
    >
      {data.map((item, index) => (
        <Card
          key={item.title}
          index={index}
          liveSite={item.liveSite}
          github={item.github}
          image={item.image}
          title={item.title}
          description={item.description}
          technologies={item.technologies}
          selectItem={selectedItemIndex}
          setSelectItem={setSelectedItemIndex}
        />
      ))}

      {selectedItemIndex !== undefined && (
        <Modal
          open={selectedItemIndex}
          onClose={() => setSelectedItemIndex(undefined)}
        >
          <div className="flex flex-col">
            <img
              src={data[selectedItemIndex].image}
              alt={data[selectedItemIndex].title}
              className="h-[auto] w-full object-contain md:h-screen md:w-screen md:object-cover"
            />
            {/* <div className="fixed top-0 bottom-0 left-0 right-0 w-screen h-screen bg-[rgba(0,0,0,0.3)]"></div> */}
            <div className="w-full md:w-[50%] p-[2rem] bg-black md:absolute top-0 left-0 md:h-screen md:p-[4rem]">
              <h1 className="text-white text-5xl leading-[4rem]">
                {data[selectedItemIndex].title}
              </h1>
              <p className="my-10 text-white text-[1.2rem] heading-5 text-left mx-auto lg:max-w-[1200px]">
                {data[selectedItemIndex].description}
              </p>
              <p className="text-white text-3xl mb-2">Technologies used</p>
              <div className="flex gap-[1rem]">
                {data[selectedItemIndex].technologies.map((item) => (
                  <p className="text-white text-[1.4rem] heading-5">#{item}</p>
                ))}
              </div>
              <div className="flex justify-between mt-[2rem]">
                {data[selectedItemIndex].liveSite && (
                  <a
                    className="border-2 border-[#fff] hover:border-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,0.8)] text-white p-[10px] px-[20px] z-[2]"
                    href={data[selectedItemIndex].liveSite}
                  >
                    Live Url
                  </a>
                )}

                {data[selectedItemIndex].github && (
                  <a
                    className="border-2 border-[#fff] hover:border-[rgba(255,255,255,0.8)] hover:text-[rgba(255,255,255,0.8)] text-white p-[10px] px-[20px] z-[2]"
                    href={data[selectedItemIndex].github}
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </motion.div>
  );
};

export default CardGrid;
