import { useEffect } from "react";
import { useScrollStop } from "../../hooks";
import { useDetectScroll } from "@smakss/react-scroll-direction";
import { useRef } from "react";

const SmoothScrolling = ({ elementId }) => {
  const [scrollDir] = useDetectScroll({});
  const scrollDirRef = useRef(scrollDir);

  useEffect(() => {
    scrollDirRef.current = scrollDir;
  }, [scrollDir]);

  const scrollIntoView = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  const handleScroll = (e) => {
    const scrollDirection = scrollDirRef.current;

    const target = document.getElementById(elementId);
    let children = target.childNodes;
    if (!target) {
      return null;
    }

    let offsets = [];

    for (let i = 0; i < children.length; i++) {
      offsets.push({
        id: children[i].getAttribute("id"),
        offset: children[i].getBoundingClientRect().top,
      });
    }

    let positiveOffset = Infinity;
    let positiveOffsetObj = null;

    for (let i = 0; i < offsets.length; i++) {
      if (
        offsets[i].offset > 0 &&
        positiveOffset &&
        offsets[i].offset < positiveOffset
      ) {
        positiveOffset = offsets[i].offset;
        positiveOffsetObj = offsets[i];
      }
    }

    let negativeOffset = -Infinity;
    let negativeOffsetObj = null;

    for (let i = 0; i < offsets.length; i++) {
      if (
        offsets[i].offset < 0 &&
        negativeOffset &&
        offsets[i].offset > negativeOffset
      ) {
        negativeOffset = offsets[i].offset;
        negativeOffsetObj = offsets[i];
      }
    }
    let filteredOffset = offsets.filter((item) => item.offset === 0)[0];
    if (
      scrollDirection === "down" &&
      positiveOffsetObj &&
      positiveOffset !== 0
    ) {
      if (
        !filteredOffset &&
        (positiveOffsetObj.id !== "work0" ||
          (positiveOffsetObj.id === "work0" && positiveOffsetObj.offset <= 600))
      ) {
        scrollIntoView(positiveOffsetObj.id);
      }
    } else if (
      scrollDirection === "up" &&
      negativeOffsetObj &&
      negativeOffset !== 0
    ) {
      if (!filteredOffset && negativeOffsetObj.id !== "work4") {
        scrollIntoView(negativeOffsetObj.id);
      }
    }
  };
  useScrollStop(handleScroll, 500);

  return <></>;
};

export default SmoothScrolling;
