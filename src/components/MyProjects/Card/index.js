import { motion } from "framer-motion";

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
    onClick={() => liveSite && window.open(liveSite, "_blank", "noreferrer")}
    className={`bg-[transparent] border border-white flex flex-col  hover:bg-red hover:text-white rounded-md shadow-md text-left group cursor-pointer relative overflow-hidden ${
      !liveSite && "cursor-not-allowed"
    }`}
  >
    <div className="hidden absolute top-[10px] right-[10px] p-2 group-hover:block group-hover:bg-red rounded-md">
      {/* <Icon iconName={`${link ? "visibility" : "visibilityOff"}`} /> */}
    </div>
    <img src={image} alt={`${title}`} />
    <div className="p-4 flex-1 flex flex-col">
      <h4 className="mb-4 text-white font-semibold">{title}</h4>
      <p className="mb-4 text-white text-sm flex-1">{description}</p>
      <div className="flex gap-2 mt-auto align-bottom">
        {technologies?.map((tech) => (
          <span
            className="text-xs text-gray-300 group-hover:text-gray-100"
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
