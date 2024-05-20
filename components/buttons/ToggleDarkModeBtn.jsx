"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import BlurContainer from "../containers/BlurContainer";

const ToggleDarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="md:w-[3.7rem] medium-height round raise no-raise"
    >
    <BlurContainer cln="round w-full h-full flex items-center justify-center">
      {currentTheme === "dark" ? (
        <IoMoonOutline size={22} className="text-gray dark:text-[#d6d6d6]" />
      ) : (
        <FiSun size={22} className="text-gray dark:text-[#d6d6d6]" />
      )}
    </BlurContainer>
    </button>
  );
};

export default ToggleDarkModeBtn;
