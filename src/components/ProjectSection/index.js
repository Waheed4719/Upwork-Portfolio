import React from "react";
import Section from "../Section";
import { useWindowScroll } from "../../hooks";
import { useRef } from "react";
import { myProjects } from "../../assets/json/data";

const ProjectSection = () => {
  const ref = useRef(null);
  const scrollY = useWindowScroll();
  console.log(ref.current);
  return (
    <div className="w-full h-full px-[20px]" ref={ref}>
      <div className={`sticky top-0 mb-[4rem]`}>
        <h1 className="text-white text-5xl leading-[4rem]">
          Some of my <br /> <span className="text-[#217017]">Projects</span>
        </h1>
      </div>
      {myProjects.map((project, index) => (
        <div className="flex flex-col items-center h-screen">
          {project.image && (
            <div className="w-full xl:w-[60%] relative mb-4">
              <img
                src={project.image}
                className={"h-full w-full object-cover"}
                alt={project.title}
              />
            </div>
          )}
          <h1 className="text-white">{project.title}</h1>
          <p className="text-white text-[1rem] xl:text-[1.4rem] my-4 text-center">
            {project.description}
          </p>
          <p className="text-white text-[1rem] text-center xl:text-[1.4rem] my-4">
            You can find info, the source code, and a demonstration of the tool
            in its{" "}
            <a href={project.github} className="text-[#217017]">
              github repository
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectSection;
