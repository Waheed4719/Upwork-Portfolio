import { useRef, useState, useEffect } from "react";
import {
  useScroll,
  useSpring,
  useInView,
  motion,
  useTransform,
} from "framer-motion";
import VerticalTimeline from "./components/VerticalTimeline";
import BackgroundWrapper from "./components/BackgroundWrapper";
import { works } from "./assets/json/data";
import Header from "./components/Header";
import WorkSection from "./components/WorkSection";
import Drawer from "./components/Drawer";
import FlipComponent from "./components/FlipComponent";
import ScrollComponent from "./components/ScrollComponent";

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -500px",
  });

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
    <div className="bg-[gray]">
      <Header />
      <BackgroundWrapper />
      <VerticalTimeline entered={isInView} />
      <ScrollComponent />
      <div className="relative z-[200] ml-[20px] md:ml-[100px]">
        <div className="h-screen flex items-center justify-start">
          <motion.div className=" px-[20px]">
            <motion.h1 className="text-[#217017] text-3xl  mb-4">
              whoamI?
            </motion.h1>
            <h1 className="text-5xl text-white">Alex Michailidis</h1>
          </motion.div>
        </div>
        <div className="h-screen" ref={containerRef}>
          <motion.div className="fixed top-[50%] translate-y-[-50%] px-[20px]">
            <motion.h1
              className="opacity-0 text-white text-5xl transition-opacity duration-150 mb-4"
              style={{ opacity, rotateX: rotationX }}
            >
              Curriculam Vitae
            </motion.h1>
            <motion.div className="opacity-0" style={{ opacity }}>
              <span className="italic text-white">
                Latin for "course of life"...
              </span>
            </motion.div>
          </motion.div>
        </div>
        <div
          ref={ref}
          className="xl:w-[calc(100vw-200px)] ml-[20px] md:ml-[100px] mr-auto snap-mandatory snap-y scroll-smooth overflow-y z-[200] relative"
        >
          {works.map((work) => (
            <WorkSection
              title={work.title}
              descriptions={work.descriptions}
              icons={work.icons}
              position={work.position}
              responsibilities={work.responsibilities}
            />
          ))}
        </div>
      </div>

      <Drawer />
    </div>
  );
}
