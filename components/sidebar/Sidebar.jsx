"use client";
import { useSelectedLayoutSegment } from "next/navigation";
import SidebarItem from "./SidebarItem";
import SidebarUserProfile from "./SidebarUserProfile";

const items = [
  { label: "Home", path: "/", targetSegment: null },
  { label: "Explore", path: "/explore", targetSegment: "explore" },
  { label: "People", path: "/people", targetSegment: "people" },
  { label: "Saved", path: "/saved", targetSegment: "saved" },
];

const Sidebar = () => {
  return (
    <div className="h-[100vh] w-[22%] bg-light dark:bg-[#242531] px-[50px]">
      <SidebarUserProfile />
      <div>
        <h3 className="mb-[18px] sidebar-menu-title text-gray dark:text-[#d6d6d6]">
          MENU
        </h3>
        {items.map((item) => (
          <SidebarItem item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
