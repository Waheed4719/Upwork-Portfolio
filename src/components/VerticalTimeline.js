import React from "react";

const VerticalTimeline = ({ entered = true }) => {
  return (
    <div className="fixed top-0 w-[2px] h-screen left-[20px] md:left-[100px] z-[100]">
      <div className="h-screen bg-white top-0 opacity-[0.5]"></div>
      <div
        className={`absolute top-0 left-0 w-[2px] min-h-screen transition-transform duration-300 bg-white ${
          entered ? "translate-y-[70px]" : "translate-y-[50%]"
        }`}
      >
        <div className="bg-white w-3 h-3 rounded-full left-[50%] translate-x-[-5px]"></div>
      </div>
    </div>
  );
};

export default VerticalTimeline;
