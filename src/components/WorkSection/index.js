import React from "react";
import { works } from "../../assets/json/data";
import Work from "./Work";

const WorkSection = () => (
  <>
    {works.map((work, index) => (
      <Work
        key={work.title}
        index={index}
        title={work.title}
        descriptions={work.descriptions ?? []}
        icons={work.icons}
        position={work.position}
        responsibilities={work.responsibilities}
      />
    ))}
  </>
);
export default WorkSection;
