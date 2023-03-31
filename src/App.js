import { useRef } from "react";
import { useInView } from "framer-motion";
import VerticalTimeline from "./components/VerticalTimeline";
import BackgroundWrapper from "./components/BackgroundWrapper";
import Header from "./components/Header";
import WorkSection from "./components/WorkSection";
import Drawer from "./components/Drawer";
import TextSections from "./components/TextSection";
import ContactForm from "./components/ContactForm";
import MyProjects from "./components/MyProjects";

export default function App() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 0px -500px",
  });

  return (
    <div>
      <BackgroundWrapper isInView={isInView} />
      <VerticalTimeline entered={isInView} />
      <div className="relative z-[200]">
        <TextSections />
        <div
          ref={ref}
          id="work"
          className="xl:w-[calc(100vw-200px)] ml-[20px] md:ml-[100px] mr-auto snap-mandatory snap-y scroll-smooth overflow-y  relative"
        >
          <WorkSection />
        </div>
        <div className="xl:w-[calc(100vw-200px)] ml-[20px] md:ml-[100px] mr-auto snap-mandatory snap-y scroll-smooth overflow-y  relative mb-4 pb-[2rem]">
          <MyProjects />
        </div>
        <ContactForm />
        <Drawer />
      </div>
      <Header />
    </div>
  );
}
