"use client";

import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";
import BlurContainer from "../containers/BlurContainer";
import UserProfileMenu from "./UserProfileMenu";
import { createClient } from "@/utils/supabase/server";
import { useEffect, useState } from "react";
import { userData } from "@/utils/supabase/authActions";

const SidebarUserProfile = () => {
  const [userId, setUserId] = useState("");
  const supabase = createClient();

  // useEffect(() => {
  //   async function fetchData() {
  //     await userData()
  //       .then((data) => {
  //         // setUserId(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.error("Error checking login status:", error);
  //       });
  //   }

  //   fetchData();
  // }, []);

  // console.log(userId);

  return (
    <div className="relative">
      <Link href="/profile">
        <BlurContainer cln="pl-[0.875rem] raise round pr-[1.25rem] text-gray py-[0.875rem] mb-[4.375rem] mt-[1.875rem] flex justify-between items-center">
          <div className="flex gap-[0.75rem]">
            <Image
              src="/images/wepik-export-20231128203407BKL1.jpeg"
              width={55}
              height={55}
              className="round"
              alt=""
            />
            <div className=" flex flex-col justify-center gap-[0.25rem]">
              <span className="text-dark-gray dark:text-[#d6d6d6] font-semibold text-[0.875rem] capitalize">
                jackson britsons
              </span>
              <span className="text-gray font-semibold text-[0.75rem] capitalize">
                creator & editor
              </span>
            </div>
          </div>
          <GoChevronRight size={20} />
        </BlurContainer>
      </Link>

      <UserProfileMenu />
    </div>
  );
};

export default SidebarUserProfile;
