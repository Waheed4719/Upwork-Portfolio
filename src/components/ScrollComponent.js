import React, { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const ScrollComponent = () => {
  const refSlide1 = useRef(null);
  const refSlide2 = useRef(null);
  const refSlide3 = useRef(null);
  const refSlide4 = useRef(null);
  const refSlide5 = useRef(null);

  useEffect(() => {
    const sections = [
      refSlide1,
      refSlide2,
      refSlide3,
      refSlide4,
      refSlide5,
    ].map((ref) => ref.current);
    sections.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: false,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: 1 / (sections.length - 1),
    });
  }, [refSlide1, refSlide2, refSlide3, refSlide4, refSlide5]);

  return (
    <div>
      <section className="h-screen bg-red-200" ref={refSlide1}>
        <h1>Section 1</h1>
      </section>
      <section className="h-screen" ref={refSlide2}>
        <h1>Section 2</h1>
      </section>
      <section className="h-screen" ref={refSlide3}>
        <h1>Section 3</h1>
      </section>
      <section className="h-screen" ref={refSlide4}>
        <h1>Section 4</h1>
      </section>
      <section className="h-screen" ref={refSlide5}>
        <h1>Section 5</h1>
      </section>
    </div>
  );
};
export default ScrollComponent;
