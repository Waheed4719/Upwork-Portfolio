import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ScrollComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=3500",
      },
    });
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="panel">Panel 1</div>
      <div className="panel">Panel 2</div>
      <div className="panel">Panel 3</div>
    </div>
  );
};

export default ScrollComponent;
