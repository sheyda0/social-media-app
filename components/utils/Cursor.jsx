"use client";

import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    const cursorinner = document.querySelector(".cursor2");
    const a = document.querySelectorAll("a");

    const handleMouseMove = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorinner.style.left = x + "px";
      cursorinner.style.top = y + "px";
    };

    const handleMouseDown = () => {
      cursor.classList.add("click");
      cursorinner.classList.add("cursorinnerhover");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("click");
      cursorinner.classList.remove("cursorinnerhover");
    };

    const handleMouseOver = () => {
      cursor.classList.add("hover");
    };

    const handleMouseLeave = () => {
      cursor.classList.remove("hover");
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    a.forEach((item) => {
      item.addEventListener("mouseover", handleMouseOver);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      a.forEach((item) => {
        item.removeEventListener("mouseover", handleMouseOver);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return null; // or return <></> if you need a wrapper
};

export default Cursor;
