"use client";

import Input from "../inputs/Input";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState } from "react";
import FileInput from "../inputs/FileInput";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import SmallItem from "../SmallItem";
import { MdOutlineEdit } from "react-icons/md";
import CloseModalBtn from "../modal/CloseModalBtn";
import ModalContainer from "../modal/ModalContainer";

const EditProfile = () => {
  const [profileImage, setProfileImage] = useState(
    "/images/wepik-export-20231128203407BKL1.jpeg"
  );
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const handleRemovePhoto = () => {
    setProfileImage(
      "/images/44884218_345707102882519_2446069589734326272_n.jpg"
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <ModalContainer>
      {/* header */}
      <div className="w-full h-[4rem] borderb-gray flex items-center justify-between mb-[1.5rem] px-[2rem]">
        <h2 className="font-semibold text-gray dark:text-[#d6d6d6]">
          Edit intro
        </h2>
        <CloseModalBtn />
      </div>
      {/* content */}
      <div className="px-[2rem] h-full pb-[7.8rem]">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col justify-between items-center h-full"
        >
          {/* image */}
          <div className="flex gap-[2rem] md:gap-[4rem]">
            <div className="flex items-center pr-[10rem] relative w-full h-full">
              <Image
                src="/images/wepik-export-20231128203407BKL1.jpeg"
                fill
                className="rounded-full object-cover min-w-[10rem] md:min-w-[12.5rem] min-h-[10rem] md:min-h-[12.5rem]"
                alt=""
              />
            </div>
            {/* edit image */}
            <div className="flex flex-col items-center justify-center gap-[1rem] md:mt-[2rem]">
              <SmallItem cln="relative">
                <FileInput
                  label={
                    <MdOutlineEdit
                      size={22}
                      className="text-gray dark:text-[#d6d6d6]"
                    />
                  }
                  name="changePhoto"
                  setImgSrc={setProfileImage}
                  cln="ml-[-1.71rem] md:mb-[1.7rem]"
                />
              </SmallItem>
              <SmallItem onClick={handleRemovePhoto}>
                <LuTrash2 size={22} color="#CB112D" />
              </SmallItem>
            </div>
          </div>

          <div className="w-full mt-[2rem] md:mt-0">
            <div className="w-full flex flex-col md:flex-row gap-[2rem] mb-[0.4rem] md:mb-0">
              <Input
                placeholder="Name"
                type="text"
                cln="md:mb-[1.5rem] w-full"
              />
              <Input
                placeholder="Username"
                type="text"
                cln="mb-[1.5rem] w-full"
              />
            </div>
            <div className="w-full flex flex-col md:flex-row gap-[2rem]">
              <Input
                placeholder="Bio"
                type="text"
                cln="md:mb-[1.5rem] w-full"
              />
              <Input placeholder="Email" type="text" cln="mb-[1.5rem] w-full" />
            </div>
            <div className="w-full flex justify-end">
              <PrimaryButton cln="round btn-15-round text-[1.125rem] py-[0.5rem] px-[2rem]">
                Save
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </ModalContainer>
  );
};

export default EditProfile;
