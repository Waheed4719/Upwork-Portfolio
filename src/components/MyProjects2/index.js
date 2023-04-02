import { useRef } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import CardGrid from "./CardGrid";
import { myProjects } from "../../assets/json/data";

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  return (
    <div className="w-full h-full px-[20px]" ref={ref} id="projects">
      <div
        className={`relative md:sticky top-0 z-10 overflow-hidden min-h-[60px]`}
      >
        <motion.h1
          initial={{ height: 0, y: 40 }}
          whileInView={{ height: "auto", y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-white text-4xl md:text-[4.4rem] leading-[3rem] md:leading-[4rem]"
        >
          Some of my <br />{" "}
          <span className="text-[var(--var-accent)] text-4xl md:text-[4.4rem] font-[Ampersand-Regular]">
            Projects
          </span>
        </motion.h1>
      </div>
      <p className="mt-8 mb-16 text-white text-[1.4rem] heading-5 text-center mx-auto lg:max-w-[1200px]">
        Esse irure consequat qui irure ullamco cupidatat magna do do. Minim
        laborum nulla esse et nulla in minim adipisicing. Minim laborum nulla
        esse et nulla in minim adipisicing.
      </p>
      <CardGrid data={myProjects} controls={controls} inView={isInView} />
    </div>
  );
};

export default MyProjects;
