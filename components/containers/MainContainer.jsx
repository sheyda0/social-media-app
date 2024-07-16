"use client";

import React, { useEffect, useRef } from "react";
import Lenis from "lenis";

const MainContainer = ({ children, cln }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const lenis = new Lenis({
        wrapper: containerRef.current, // Specify the target container
        content: containerRef.current.firstChild, // Specify the scrollable content
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${
        cln ? cln : ""
      } w-full flex flex-col items-center overflow-y-auto overflow-x-hidden mt-[1rem]`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
