"use client";

import HeaderItem from "./HeaderItem";
import Searchbar from "./Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import ToggleDarkModeBtn from "../buttons/ToggleDarkModeBtn";
import Breadcrumb from "../Breadcrumb";
import MobileHeaderProfile from "./MobileHeaderProfile";

const Header = () => {
  return (
    <div className="mt-[1rem] md:mt-[1.875rem] flex items-center justify-between w-full">
      <Breadcrumb />
      <MobileHeaderProfile />
      <Searchbar />
      <div className="flex gap-[1rem] md:gap-[0.75rem] ml-[1rem] md:m-0">
        {/* <ToggleDarkModeBtn /> */}
        <HeaderItem
          cln="hidden md:flex"
          icon={
            <IoMdNotificationsOutline
              size={22}
              className="text-gray dark:text-[#d6d6d6]"
            />
          }
          notif={true}
          url="/notifications"
        />
        <HeaderItem
          icon={
            <AiOutlineMessage
              size={22}
              className="text-gray dark:text-[#d6d6d6]"
            />
          }
          url="/messages"
        />
      </div>
    </div>
  );
};

export default Header;
