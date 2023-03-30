import { useRef } from "react";
import { useInView, useAnimation } from "framer-motion";
import CardGrid from "./CardGrid";
import { myProjects } from "../../assets/json/data";

const MyProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  return (
    <div className="w-full h-full px-[20px]" ref={ref}>
      <div className={`sticky top-0 mb-[4rem]`}>
        <h1 className="text-white text-5xl leading-[4rem]">
          Some of my <br /> <span className="text-[#217017]">Projects</span>
        </h1>
      </div>
      <p className="my-10 text-white text-[1.4rem] heading-5 text-center mx-auto lg:max-w-[1200px]">
        Esse irure consequat qui irure ullamco cupidatat magna do do. Minim
        laborum nulla esse et nulla in minim adipisicing. Minim laborum nulla
        esse et nulla in minim adipisicing.
      </p>
      <CardGrid data={myProjects} controls={controls} inView={isInView} />
    </div>
  );
};

export default MyProjects;
