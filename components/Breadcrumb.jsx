"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  const newPathSegments = [...pathSegments];
  const activeSegmentIndex = newPathSegments.length - 1;

  return (
    <nav className="hidden md:block w-[12.5rem]">
      <ul className="flex items-center gap-2 text-milky dark:text-[#9798ad] text-[0.875rem]">
        {newPathSegments?.map((segment, index) => {
          const url = newPathSegments.slice(0, index + 1).join("/");
          const isActive = index === activeSegmentIndex;

          return (
            <li
              key={segment}
              className={`flex items-center gap-2 ${
                isActive ? "text-gray dark:text-[#d6d6d6]" : ""
              }`}
            >
              {/* <span className="text-[1.5rem] text-gray dark:text-[#d6d6d6]">
                <GoChevronRight size={18} />
              </span> */}
              <Link href={url} className="capitalize">
                {segment}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
