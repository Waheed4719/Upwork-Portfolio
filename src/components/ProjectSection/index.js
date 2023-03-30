import React from "react";
import Section from "../Section";
import { useWindowScroll } from "../../hooks";
import { useRef } from "react";
import { myProjects } from "../../assets/json/data";
import Card from "./Card";

const ProjectSection = () => {
  const ref = useRef(null);
  const scrollY = useWindowScroll();
  console.log(ref.current);
  return (
    <div className="w-full h-full px-[20px]" ref={ref} id="projects">
      <div className={`sticky top-0 mb-[4rem]`}>
        <h1 className="text-white text-5xl leading-[4rem]">
          Some of my <br /> <span className="text-[#217017]">Projects</span>
        </h1>
      </div>
      <p className="my-10 text-white text-[1.4rem] heading-5 text-center mx-auto">
        Esse irure consequat qui irure ullamco cupidatat magna do do. Minim
        laborum nulla esse et nulla in minim adipisicing. Minim laborum nulla
        esse et nulla in minim adipisicing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-8 max-w-full mx-auto xl:max-w-[1200px]">
        {myProjects.map((project) => (
          <Card
            key={project.title}
            liveSite={project.liveSite}
            github={project.github}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
