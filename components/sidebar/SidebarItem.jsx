import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { GoChevronRight } from "react-icons/go";

const SidebarItem = ({ item }) => {
  const activeSegment = useSelectedLayoutSegment();

  return (
    <Link
      href={item.path}
      className={`px-[20px] block font-semibold rounded-[10px] ${
        activeSegment === item.targetSegment
          ? "bg-purple text-milky"
          : "text-gray"
      }`}
    >
      <div
        className={`flex items-center justify-between w-full h-full py-[20px] ${
          activeSegment !== item.targetSegment && "borderb-gray"
        }`}
      >
        {item.label}
        <GoChevronRight size={20} />
      </div>
    </Link>
  );
};

export default SidebarItem;
