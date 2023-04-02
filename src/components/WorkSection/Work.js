import { useRef } from "react";
import { ReactSVG } from "react-svg";
import Section from "../Section";
import { getIcons } from "../../utils/getIcons";
import { TypeAnimation } from "react-type-animation";
import Responsibilities from "./Responsibilities";
import { useWindowSize } from "../../hooks";

const Work = ({
  title,
  descriptions,
  responsibilities,
  icons,
  position,
  index,
  startYear,
  endYear,
}) => {
  const ref = useRef(null);
  const { width } = useWindowSize();
  const newDescriptions =
    descriptions?.reduce((acc, curr) => {
      acc.push(curr);
      acc.push(1000);
      return acc;
    }, []) ?? [];

  return (
    <Section id={"work" + index}>
      <div ref={ref} className="w-full h-full px-[20px]">
        <div className="relative w-fit">
          <h1 className="mb-[10px] mt-0 text-left text-2xl text-white">
            {title}
          </h1>
          {width > 768 && (
            <h1 className="absolute translate-x-[-178%] top-0 text-2xl text-white">
              {startYear.split("/")[1]}
            </h1>
          )}
        </div>
        <TypeAnimation
          sequence={newDescriptions}
          speed={50}
          className="h-[3em] text-white text-[1.2rem]"
          repeat={Infinity}
        />
        <div className="mt-[20px] mb-4 text-white">{position}</div>
        <div className="mt-[10px] mb-4 text-white">
          {startYear} - {endYear}
        </div>
        <div className="flex flex-col">
          {icons.length > 0 && (
            <div className="grid grid-flow-col-dense grid-rows-1 max-h-56 sm:grid-rows-2 place-self-start justify-start gap-2 sm:gap-4 my-6">
              {icons.map((icon, index) => (
                <ReactSVG
                  key={icon}
                  wrapper="span"
                  style={{ height: "100%" }}
                  src={getIcons(icon)}
                  className="w-full max-w-full max-h-full transition-all duration-200"
                />
              ))}
            </div>
          )}

          <Responsibilities data={responsibilities} />
        </div>
      </div>
    </Section>
  );
};

export default Work;
