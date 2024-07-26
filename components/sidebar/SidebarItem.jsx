import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import { isMobile } from "react-device-detect";
import Image from "next/image";

const SidebarItem = ({ path, icon, activeIcon, label }) => {
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link
      href={path}
      className={`px-[1.25rem] medium-height flex items-center ${
        isActive
          ? "blue-gradient-bg text-milky font-semibold rounded-[10rem]"
          : "text-gray"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full h-full ${
          !isActive && !isMobile && "borderb-gray"
        }`}
      >
        <div className="flex items-center gap-[0.625rem]">
          {isActive && icon ? (
            <Image src={activeIcon} width={22} height={22} alt="" />
          ) : !isActive && icon ? (
            <Image src={icon} width={22} height={22} alt="" />
          ) : (
            <div></div>
          )}
          <span className="hidden md:inline-block">{label}</span>
        </div>
        <GoChevronRight size={20} color="#639FFF" className="hidden md:block" />
      </div>
    </Link>
  );
};

export default SidebarItem;
