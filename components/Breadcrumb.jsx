"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoChevronRight } from "react-icons/go";

const Breadcrumb = () => {
  const asPath = usePathname();
  const pathSegments = asPath.split("/").filter((segment) => segment !== "");

  return (
    <nav className="hidden md:block w-[12.5rem]">
      <ul className="flex items-center gap-2 text-milky dark:text-[#9798ad] text-[0.875rem]">
        {pathSegments?.map((segment, index) => {
          const isLastSegment = index === pathSegments.length - 1;
          const isFirstSegmement = index === 0;
          const url = `/${pathSegments.slice(0, index + 1).join("/")}`;

          return (
            <li
              key={segment}
              className={`flex items-center gap-2 ${
                isLastSegment ? "text-gray dark:text-[#d6d6d6]" : ""
              }`}
            >
              {!isFirstSegmement && (
                <span className="text-[1.5rem] text-gray dark:text-[#d6d6d6]">
                  <GoChevronRight size={18} />
                </span>
              )}
              <span className="capitalize">
                {isLastSegment ? (
                  <span>{segment}</span>
                ) : (
                  <Link href={url} className="capitalize">
                    {segment}
                  </Link>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
