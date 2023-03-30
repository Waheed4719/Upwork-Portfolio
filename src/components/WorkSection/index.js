import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ReactSVG } from "react-svg";
import Section from "../Section";
import { getIcons } from "../../utils/getIcons";
import DrawSVG from "react-svg-drawing";
import FlipComponent from "../FlipComponent";
import { TypeAnimation } from "react-type-animation";

const WorkSection = ({
  title,
  descriptions,
  responsibilities,
  icons,
  position,
}) => {
  const ref = useRef(null);
  const [activeResponsibility, setActiveResponsibility] = useState(0);

  //insert a 1000 item after every list item
  const newDescriptions = descriptions.reduce((acc, curr) => {
    acc.push(curr);
    acc.push(1000);
    return acc;
  }, []);

  return (
    <Section>
      <div ref={ref} className="w-full h-full px-[20px]">
        <div className="relative w-fit">
          <h1 className="mb-[10px] mt-0 text-left text-2xl text-white">
            {title}
          </h1>
          <h1 className="absolute translate-x-[-178%] top-0 text-2xl text-white">
            2019
          </h1>
        </div>
        <TypeAnimation
          sequence={newDescriptions}
          speed={50}
          className="h-[3em] text-white text-[1.2rem]"
          repeat={Infinity}
        />
        <div className="mt-[20px] mb-4 text-white">{position}</div>
        <div className="flex flex-col">
          <div className="grid grid-flow-col-dense grid-rows-1 max-h-56 sm:grid-rows-2 place-self-start justify-start gap-2 sm:gap-4 my-6">
            {/* {icons.map((icon, index) => (
              <ReactSVG
                wrapper="span"
                style={{ height: "100%" }}
                src={getIcons(icon)}
                className="w-full max-w-full max-h-full transition-all duration-200"
              />
            ))} */}
            {icons.map((icon, index) => (
              <ReactSVG
                wrapper="span"
                style={{ height: "100%" }}
                src={getIcons(icon)}
                className="w-full max-w-full max-h-full transition-all duration-200"
              />
            ))}
          </div>
          <div className="flex flex-wrap mt-[10px]">
            {responsibilities.map((responsibility, index) => (
              <div
                className={` flex-1 flex p-6 border min-w-[150px] border-white ${
                  index === activeResponsibility ? "basis-[100%]" : ""
                } font-[roboto] text-white`}
                onClick={() => setActiveResponsibility(index)}
              >
                {index === activeResponsibility
                  ? responsibility.description
                  : responsibility.text}
              </div>
            ))}
          </div>
          {/* <FlipComponent items={responsibilities} /> */}
        </div>
      </div>
    </Section>
  );
};

export default WorkSection;
