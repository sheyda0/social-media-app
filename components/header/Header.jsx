import HeaderItem from "./HeaderItem";
import Searchbar from "./Searchbar";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import ToggleDarkModeBtn from "../buttons/ToggleDarkModeBtn";

const Header = () => {
  return (
    <div className="mt-[30px] flex items-center justify-between w-full">
      <div></div>
      <Searchbar />
      <div className="flex gap-[12px]">
        <ToggleDarkModeBtn />
        <HeaderItem
          icon={
            <IoMdNotificationsOutline
              size={24}
              className="text-gray dark:text-[#d6d6d6]"
            />
          }
          notif={true}
          url="/nofications"
        />
        <HeaderItem
          icon={
            <AiOutlineMessage
              size={24}
              className="text-gray dark:text-[#d6d6d6]"
            />
          }
          url="/messages"
        />
        <div class="buttons">
          <button className="raise">Raise</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
