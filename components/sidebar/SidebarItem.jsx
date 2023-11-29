import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";
import Image from "next/image";

const SidebarItem = ({ item }) => {
  const activeSegment = useSelectedLayoutSegment();
  const isActive = activeSegment === item.targetSegment;

  return (
    <Link
      href={item.path}
      className={`px-[20px] block round ${
        isActive ? "bg-purple text-milky font-semibold" : "text-gray"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full h-full py-[20px] ${
          !isActive && "borderb-gray"
        }`}
      >
        <div className="flex items-center gap-[10px]">
          {isActive ? (
            <Image src={item.activeIcon} width={20} height={20} alt="" />
          ) : (
            <Image src={item.icon} width={20} height={20} alt="" />
          )}
          <span>{item.label}</span>
        </div>
        <GoChevronRight size={20} />
      </div>
    </Link>
  );
};

export default SidebarItem;
