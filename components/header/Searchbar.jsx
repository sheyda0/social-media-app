"use client";

import Image from "next/image";
import ExploreActiveIcon from "../../assets/icons/search-svgrepo-com (2).svg";
import { useState } from "react";

const Searchbar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-light raise dark:bg-[#242531] w-[30rem] px-[1.25rem] medium-height round border-none outline-none"
        placeholder="Search Here..."
      />
      <Image
        src={ExploreActiveIcon}
        width={18}
        height={18}
        className="absolute top-[1.4375rem] right-[1.25rem]"
        alt=""
      />
    </div>
  );
};

export default Searchbar;
