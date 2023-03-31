import { motion } from "framer-motion";
import { ReactSVG } from "react-svg";
import GithubIcon from "../../../assets/icons/github2.svg";
import LinkIcon from "../../../assets/icons/link.svg";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Card = ({
  image,
  title,
  description,
  technologies,
  liveSite,
  github,
}) => (
  <motion.div
    variants={item}
    // onClick={() => liveSite && window.open(liveSite, "_blank", "noreferrer")}
    className={`bg-[transparent] border border-white flex flex-col  hover:bg-red hover:text-white rounded-md shadow-md text-left group cursor-pointer relative overflow-hidden ${
      !liveSite && "cursor-not-allowed"
    }`}
  >
    <div className="hidden   absolute top-[10px] right-[10px] group-hover:flex group-hover:gap-3  rounded-md">
      {/* <Icon iconName={`${link ? "visibility" : "visibilityOff"}`} /> */}
      <a
        href={github}
        className="p-2 group-hover:bg-[rgba(0,0,0,0.5)] rounded-md"
      >
        <ReactSVG src={GithubIcon} className="h-8 w-8" />
      </a>
      <a
        href={liveSite}
        className="p-2 group-hover:bg-[rgba(0,0,0,0.5)] rounded-md"
      >
        <ReactSVG src={LinkIcon} className="h-8 w-8 customSvg text-white" />
      </a>
    </div>
    <img src={image} alt={`${title}`} />
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="mb-4 text-white text-[1.2rem] font-semibold">{title}</h4>
      <p className="mb-4 text-white text-[1.1rem] flex-1">{description}</p>
      <div className="flex gap-2 mt-auto align-bottom">
        {technologies?.map((tech) => (
          <span
            className="text-[1.1rem] text-gray-300 group-hover:text-gray-100"
            key={tech}
          >
            #{tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

export default Card;
