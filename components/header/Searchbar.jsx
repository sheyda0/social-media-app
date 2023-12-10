"use client";

import Image from "next/image";
import ExploreActiveIcon from "../../assets/icons/search-svgrepo-com (2).svg";
import Input from "../Input";

const Searchbar = () => {
  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search Here..."
        cln="w-[17rem] md:w-[30rem] "
      />
      <Image
        src={ExploreActiveIcon}
        width={18}
        height={18}
        className="absolute top-[1.2rem] right-[1.25rem]"
        alt=""
      />
    </div>
  );
};

export default Searchbar;
