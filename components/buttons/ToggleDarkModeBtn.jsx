"use client";

import { useTheme } from "next-themes";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";

const ToggleDarkModeBtn = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  console.log(currentTheme);

  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="w-[4rem] medium-height round raise bg-light dark:bg-[#242531] flex items-center justify-center"
    >
      {currentTheme === "dark" ? (
        <IoMoonOutline size={24} className="text-gray dark:text-[#d6d6d6]" />
      ) : (
        <FiSun size={24} className="text-gray dark:text-[#d6d6d6]" />
      )}
    </button>
  );
};

export default ToggleDarkModeBtn;
