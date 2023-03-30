import "./styles.css";
import { useScroll, useSpring } from "framer-motion";
import VerticalTimeline from "./components/VerticalTimeline";
import BackgroundWrapper from "./components/BackgroundWrapper";
import { works } from "./assets/json/data";
import Header from "./components/Header";
import WorkSection from "./components/WorkSection";
import Drawer from "./components/Drawer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 700,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="bg-[gray]">
      <Header />
      <BackgroundWrapper />
      <VerticalTimeline />
      <div className="w-[calc(100vw-200px)]  max-w-[1000px] ml-[20px] md:ml-[100px] mr-auto">
        {works.map((work) => (
          <WorkSection
            title={work.title}
            descriptions={work.descriptions}
            icons={work.icons}
            position={work.position}
            responsibilities={work.responsibilities}
          />
        ))}
        {/* <motion.div className="progress z-[11]" style={{ scaleX }} /> */}
      </div>
      <Drawer />
    </div>
  );
}
