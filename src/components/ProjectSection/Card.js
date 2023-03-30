import React, { useState } from "react";

const variant = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const overlayVariant = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Card = ({
  image,
  title,
  description,
  technologies,
  github,
  liveSite,
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className="flex flex-col items-center relative group project-card"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {" "}
      {image && (
        <div className="w-full xl:w-full relative">
          <img
            src={image}
            className={"h-full w-full object-cover"}
            alt={title}
          />
        </div>
      )}
      {/* <h1 className="text-white">{title}</h1> */}
      {/* <p className="text-white text-[1rem] xl:text-[1.4rem] my-4 text-center">
      {description}
    </p> */}
      {/* <p className="text-white text-[1rem] text-center xl:text-[1.4rem] my-4">
      You can find info, the source code, and a demonstration of the
      tool in its{" "}
      <a href={github} className="text-[#217017]">
        github repository
      </a>
    </p> */}
      <div className="absolute top-0 left-0 right-0 bottom-0  block z-10 w-full h-full  bg-opacity-50 items-center justify-center opacity-0 group-hover:opacity-100">
        <div className="absolute top-[10px] left-[10px] border-l-2 border-t-2 h-[30px] w-[30px] border-white opacity-0 group-hover:opacity-100 group-hover:translate-x-[20px] group-hover:translate-y-[20px]" />

        <div className="absolute right-[10px] bottom-[10px] border-r-2 border-b-2 h-[30px] w-[30px] border-white" />
      </div>
    </div>
  );
};

export default Card;
