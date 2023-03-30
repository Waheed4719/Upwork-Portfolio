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
import TextSections from "./components/TextSection";

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -500px",
  });

  return (
    <div className="bg-[gray]">
      <Header />
      <BackgroundWrapper isInView={isInView} />
      <VerticalTimeline entered={isInView} />
      <div className="relative z-[200]">
        <TextSections />
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
