"use client";

import { useEffect } from "react";
import Header from "../header/Header";

const MiddlePart = ({ children }) => {
  //   useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

  return (
    <div className="px-[1rem] lg:px-[1.875rem] w-full lg:w-[60%] pb-[5rem] lg:pb-0 z-[10]">
      <Header />
      <div className="w-full">{children}</div>
    </div>
  );
};

export default MiddlePart;
