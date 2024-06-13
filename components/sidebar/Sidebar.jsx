"use client";

import SidebarItem from "./SidebarItem";
import SidebarUserProfile from "./SidebarUserProfile";
import HomeIcon from "../../assets/icons/home-angle-svgrepo-com (3).svg";
import HomeActiveIcon from "../../assets/icons/home-angle-svgrepo-com (4).svg";
import ExploreIcon from "../../assets/icons/search-svgrepo-com (3).svg";
import ExploreActiveIcon from "../../assets/icons/search-svgrepo-com (2).svg";
import SavedActiveIcon from "../../assets/icons/saved-svgrepo-com.svg";
import SavedIcon from "../../assets/icons/saved-svgrepo-com (1).svg";
import PeopleActiveIcon from "../../assets/icons/users-svgrepo-com.svg";
import PeopleIcon from "../../assets/icons/users-svgrepo-com (1).svg";
import bellActiveIcon from "../../assets/icons/notification-bell-svgrepo-com.svg";
import bellIcon from "../../assets/icons/notification-bell-svgrepo-com (1).svg";
import Title from "../Title";
import { FaPlus } from "react-icons/fa6";
import { isMobile } from "react-device-detect";

const Sidebar = () => {
  return (
    <div className="h-[5rem] lg:relative rounded-t-[1rem] lg:rounded-none flex items-center justify-between lg:block w-full lg:h-[100vh] lg:w-[22%] px-[2rem] lg:px-[3.125rem] fixed left-0 bottom-0 z-[100]">
      {/* <Logo /> */}
      <div className="hidden lg:block">
        <SidebarUserProfile />
      </div>

      <div className="w-full">
        <Title cln="hidden lg:block">menu</Title>
        <div className="flex lg:block w-full justify-between">
          <SidebarItem
            path="/home"
            icon={HomeIcon}
            activeIcon={HomeActiveIcon}
            label="Home"
          />
          <SidebarItem
            path="/people"
            icon={PeopleIcon}
            activeIcon={PeopleActiveIcon}
            label="People"
          />
          <div className="w-[3rem] bg-dark-gray flex items-center justify-center rounded-full lg:hidden">
            <FaPlus color="#9798ad" size={24} />
          </div>
          {isMobile ? (
            <SidebarItem
              path="/notifications"
              icon={bellIcon}
              activeIcon={bellActiveIcon}
              label="Notifications"
            />
          ) : (
            <SidebarItem
              path="/saved"
              icon={SavedIcon}
              activeIcon={SavedActiveIcon}
              label="Saved"
            />
          )}
          <SidebarItem
            path="/explore"
            icon={ExploreIcon}
            activeIcon={ExploreActiveIcon}
            label="Explore"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
