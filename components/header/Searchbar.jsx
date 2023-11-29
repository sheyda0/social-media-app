"use client";

import Image from "next/image";
import ExploreActiveIcon from "../../assets/icons/search-svgrepo-com (2).svg";
import { useState } from "react";

const Searchbar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        className="bg-[#f0eef4] raise dark:bg-[#242531] w-[500px] px-[20px] h-[64px] round border-none outline-none"
        placeholder="Search Here..."
        onFocus={() => setIsFucosed(true)}
      />
      <Image
        src={ExploreActiveIcon}
        width={18}
        height={18}
        className="absolute top-[20px] right-[20px]"
        alt=""
      />
    </div>
  );
};

export default Searchbar;
