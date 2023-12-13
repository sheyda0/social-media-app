"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const ToggleDarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="md:w-[3.7rem] medium-height round raise md:bg-[#f4f4f7] md:dark:bg-[#242531] flex items-center justify-center"
    >
      {currentTheme === "dark" ? (
        <IoMoonOutline size={22} className="text-gray dark:text-[#d6d6d6]" />
      ) : (
        <FiSun size={22} className="text-gray dark:text-[#d6d6d6]" />
      )}
    </button>
  );
};

export default ToggleDarkModeBtn;
