import { useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";
import { ReactSVG } from "react-svg";
import Section from "../Section";
import { getIcons } from "../../utils/getIcons";
import Typist from "react-typist";

const WorkSection = ({
  title,
  descriptions,
  responsibilities,
  icons,
  position,
}) => {
  const ref = useRef(null);
  const { scrollYProgress, scrollY } = useScroll({ target: ref });
  const [activeResponsibility, setActiveResponsibility] = useState(0);
  return (
    <Section>
      <div ref={ref} className="w-full h-full px-[20px]">
        <h1 className="mb-[10px] mt-0 text-left text-2xl">{title}</h1>
        <Typist className="h-[3em]">Animate this text.</Typist>
        <div className="mt-[20px] mb-4">{position}</div>
        <div className="flex flex-col">
          <div className="grid grid-flow-col-dense grid-rows-1 max-h-56 sm:grid-rows-2 place-self-start justify-start gap-2 sm:gap-4">
            {icons.map((icon, index) => (
              <ReactSVG
                wrapper="span"
                style={{ height: "100%" }}
                src={getIcons(icon)}
                className="w-full max-w-full max-h-full transition-all duration-200"
              />
            ))}
          </div>
          <div className="flex flex-wrap">
            {responsibilities.map((responsibility, index) => (
              <div
                className={`mt-[10px] flex-1 flex p-6 border-1 border-white ${
                  index === activeResponsibility ? "basis-[100%]" : ""
                }`}
              >
                {responsibility}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WorkSection;
