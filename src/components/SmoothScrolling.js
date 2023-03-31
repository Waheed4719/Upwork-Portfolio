import { useEffect } from "react";
import { motion } from "framer-motion";
import { useScrollStop, useWindowScroll } from "../hooks";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import { useRef } from "react";

const SmoothScrolling = () => {
  const [scrollDir] = useDetectScroll({});
  const scrollPosY = useWindowScroll();
  const scrollDirRef = useRef(scrollDir);

  useEffect(() => {
    scrollDirRef.current = scrollDir;
  }, [scrollDir]);

  const handleScroll = (e) => {
    console.log("scroll stopped", scrollDirRef.current);
    const scrollDirection = scrollDirRef.current;
    const scrollPosY = window.scrollY;
    let offsetTop = document
      .getElementById("work0")
      .getBoundingClientRect().top;
    let offsetTop1 = document
      .getElementById("work1")
      .getBoundingClientRect().top;
    let offsetTop2 = document
      .getElementById("work2")
      .getBoundingClientRect().top;
    console.log(offsetTop, scrollPosY, scrollDirection);
    if (
      (scrollDirection === "down" && offsetTop <= 600 && offsetTop > 0) ||
      (scrollDirection === "up" &&
        offsetTop < 0 &&
        offsetTop1 > 0 &&
        offsetTop2 > 0)
    ) {
      document.getElementById("work0").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if (
      (scrollDirection === "down" && offsetTop < 0 && offsetTop1 >= 0) ||
      (scrollDirection === "up" && offsetTop1 < 0 && offsetTop2 > 0)
    ) {
      document.getElementById("work1").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
    if (
      (scrollDirection === "down" && offsetTop1 < 0 && offsetTop2 >= 0) ||
      (scrollDirection === "up" && offsetTop2 < 0)
    ) {
      document.getElementById("work2").scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };
  const debouncedHandleScroll = useScrollStop(handleScroll, 500);

  return <></>;
};

export default SmoothScrolling;
