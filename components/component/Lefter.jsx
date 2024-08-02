"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Lefter = ({children}) => {
  const elementRef = useRef([]);

  useEffect(() => {
    const element = elementRef.current;

    elementRef.current.forEach((element) => {
      gsap.to(element, {
        translateX: 0,
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom 80%",
          scrub: true,
          markers: true, // Remove or set to false when not debugging
        },
      });
    });
  }, []);

  return (
    // <div className="h-[3000px] flex items-center justify-center relative overflow-hidden">
      <div
        ref={(el) => (elementRef.current[0] = el)}
        className="opacity-0 -translate-x-10"
      >
        {children}
      </div>
    // </div>
  );
};

export default Lefter;
