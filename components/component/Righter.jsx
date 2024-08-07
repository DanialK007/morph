"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Righter = ({ children }) => {
  const elementRef = useRef(null); // Use a single ref for the element

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      gsap.to(element, {
        translateX: 0,
        filter: "blur(0px)",
        opacity: 1,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
          trigger: element,
          start: "top bottom",
          end: "bottom 80%",
          scrub: true,
          markers: false, // Remove or set to false when not debugging
          once: true, // Trigger only once
        },
      });
    }

    // Clean up function to ensure ScrollTrigger is killed when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="opacity-0 translate-x-10 blur-[10px]"
    >
      {children}
    </div>
  );
};

export default Righter;
