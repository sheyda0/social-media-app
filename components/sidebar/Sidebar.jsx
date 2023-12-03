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
import Title from "../Title";
import Logo from "./Logo";

const items = [
  {
    label: "Home",
    path: "/home",
    targetSegment: "home",
    icon: HomeIcon,
    activeIcon: HomeActiveIcon,
  },
  {
    label: "Explore",
    path: "/explore",
    targetSegment: "explore",
    icon: ExploreIcon,
    activeIcon: ExploreActiveIcon,
  },
  {
    label: "People",
    path: "/people",
    targetSegment: "people",
    icon: PeopleIcon,
    activeIcon: PeopleActiveIcon,
  },
  {
    label: "Saved",
    path: "/saved",
    targetSegment: "saved",
    icon: SavedIcon,
    activeIcon: SavedActiveIcon,
  },
];

const Sidebar = () => {
  return (
    <div className="h-[10rem] w-full md:h-[100vh] md:w-[22%] bg-light dark:bg-[#242531] px-[3.125rem]">
      {/* <Logo /> */}
      <div className="hidden md:block">
        <SidebarUserProfile />
      </div>
      <div>
        <Title cln="hidden md:block">menu</Title>
        <div className="flex md:block w-full justify-between">
          {items.map((item) => (
            <SidebarItem item={item} key={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
