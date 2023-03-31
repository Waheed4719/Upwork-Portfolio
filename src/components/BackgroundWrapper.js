import React, { useEffect, useState, useRef } from "react";
import Granim from "granim";
import { motion } from "framer-motion";

const BackgroundWrapper = ({ isInView }) => {
  const [currentState, setCurrentState] = useState("default-state");
  const canvasRef = useRef(null);

  useEffect(() => {
    if (isInView) {
      setCurrentState("second-state");
    } else {
      setCurrentState("default-state");
    }
  }, [isInView]);

  useEffect(() => {
    const granimInstance = new Granim({
      element: canvasRef.current,
      direction: "diagonal",
      isPausedWhenNotInView: true,
      stateTransitionSpeed: 1000,
      stateTransitionEasing: "easeInOutQuad",
      states: {
        "default-state": {
          gradients: [["#000", "#000"]],
          loop: true,
          transitionSpeed: 1000,
          transitionEasing: "easeInOutQuad",
        },
        "second-state": {
          gradients: [
            ["#D31027", "#EA384D"],
            ["#4B1248", "#F72585"],
            ["#2C5364", "#0F2027"],
            ["#834D9B", "#D04ED6"],
            ["#1A2980", "#26D0CE"],
            ["#4568DC", "#B06AB3"],
          ],
          loop: true,
          transitionSpeed: 3000,
          transitionEasing: "easeInOutQuad",
        },
      },
    });
    granimInstance.changeState(currentState);
    granimInstance.play();

    return () => granimInstance.destroy();
  }, [currentState]);

  return (
    <div className="fixed bg-transparent flex h-screen w-screen z-[10] pointer-events-auto">
      <canvas
        id="granim-canvas"
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      ></canvas>
      {Array(14)
        .fill(0)
        .map((item, index) => (
          <div className="flex flex-1">
            {index % 2 === 0 ? (
              <motion.svg
                key={index}
                className="bg-item bg-transparent aspect-square anim anim-0 h-8 w-8 bottom-0 absolute"
                animate={{
                  y: ["0vh", "-100vh"],
                  rotate: [0, 720],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 10 - 0.5 * index,
                  ease: "linear",
                  times: [0, 1],
                  repeat: Infinity,
                  repeatDelay: 0,
                }}
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                data-v-0e667c1f=""
                style={{ aspectRatio: "inherit", marginBottom: 0 }}
              >
                <path
                  data-v-0e667c1f=""
                  fill="white"
                  className="transItem"
                  d="M19.99 100 C26.66 100 33.33 100 39.99 100 46.66 100 53.32 100 59.99 100 66.66 100 73.32 100 79.99 100 86.66 100 93.33 100 100 100 100 93.33 100 86.66 100 79.99 100 73.32 100 66.66 100 59.99 100 53.32 100 46.66 100 39.99 100 33.33 100 26.66 100 19.99 100 13.33 100 6.66 100 0 94.44 0 88.88 0 83.33 0 77.77 0 72.21 0 66.66 0 61.1 0 55.55 0 49.99 0 44.44 0 38.88 0 33.33 0 27.77 0 22.22 0 16.66 0 11.11 0 5.55 0 0 0 0 6.66 0 13.33 0 19.99 0 26.66 0 33.33 0 39.99 0 46.66 0 53.32 0 59.99 0 66.66 0 73.32 0 79.99 0 86.66 0 93.33 0 100 6.66 100 13.33 100 19.99 100 "
                  data-original="M100,0 C100,33.33333 100,66.66667 100,100 66.66667,100 33.33333,100 0,100 0,66.66667 0,33.33333 0,0 33.33333,0 66.66667,0 100,0 z"
                ></path>
              </motion.svg>
            ) : index % 3 === 0 ? (
              <motion.svg
                animate={{
                  y: ["0vh", "-100vh"],
                  rotate: [0, 360 * 4],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 15 - 0.5 * index,
                  delay: 0,
                  ease: "linear",
                  times: [0, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="h-9 w-9 bottom-0 absolute"
                width="100%"
                height="100%"
                viewBox="0 0 100 100"
                data-v-0e667c1f=""
                style={{ aspectRatio: "inherit", marginBottom: "0px" }}
              >
                <path
                  data-v-0e667c1f=""
                  fill="white"
                  className="transItem"
                  d="M50 -5 C65.87 4.16 81.75 13.33 97.63 22.5 97.63 40.83 97.63 59.16 97.63 77.5 81.75 86.66 65.87 95.83 50 105 34.12 95.83 18.24 86.66 2.36 77.5 2.36 59.16 2.36 40.83 2.36 22.5 18.24 13.33 34.12 4.16 50 -5 M97.63 22.5 C97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 97.63 22.5 "
                  data-original="M100,0 C100,33.33333 100,66.66667 100,100 66.66667,100 33.33333,100 0,100 0,66.66667 0,33.33333 0,0 33.33333,0 66.66667,0 100,0 z"
                ></path>
              </motion.svg>
            ) : (
              <motion.svg
                animate={{
                  y: ["0vh", "-100vh"],
                  rotate: [0, 360 * 4],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 15 - 0.5 * index,
                  delay: 0,
                  ease: "linear",
                  times: [0, 1],
                  repeat: Infinity,
                  repeatDelay: 0.5,
                }}
                className="h-8 w-8 bottom-0 absolute"
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M75 35.56C75 45.18 75 54.81 75 64.43C75 74.05 75 83.67 75 93.3C62.5 86.08 50 78.86 37.5 71.65C25 64.43 12.5 57.21 0 50C8.33 45.18 16.66 40.37 25 35.56C33.33 30.75 41.66 25.94 50 21.13C58.33 16.32 66.66 11.5 75 6.69C75 16.32 75 25.94 75 35.56Z"
                  fill="white"
                />
              </motion.svg>
            )}
          </div>
        ))}
    </div>
  );
};

export default BackgroundWrapper;
