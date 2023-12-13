"use client";

import Input from "../inputs/Input";
import Modal from "../Modal";
import { IoCloseOutline } from "react-icons/io5";
import PrimaryButton from "../buttons/PrimaryButton";
import { useState } from "react";
import Profile from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import ProfileTemplate from "../../assets/images/44884218_345707102882519_2446069589734326272_n.jpg";
import FileInput from "../inputs/FileInput";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import { SlCamera } from "react-icons/sl";
import SmallItem from "../SmallItem";
import { MdOutlineEdit } from "react-icons/md";

const EditProfile = ({ closeModal }) => {
  const [profileImage, setProfileImage] = useState(Profile);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");

  const handleRemovePhoto = () => {
    setProfileImage(ProfileTemplate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Modal>
      <div className="w-[60rem] h-[60vh] shadow-lg round bg-light-white dark:bg-[#141520]">
        {/* header */}
        <div className="w-full h-[4rem] borderb-gray flex items-center justify-between px-[2rem] mb-[1.5rem]">
          <h2 className=" font-semibold text-gray dark:text-[#d6d6d6]">
            Edit intro
          </h2>
          <button onClick={closeModal}>
            <IoCloseOutline color="#d6d6d6" size={24} />
          </button>
        </div>
        {/* content */}
        <div className="px-[2rem] h-full pb-[7.8rem]">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col justify-between items-center h-full"
          >
            <div className="flex gap-[2rem]">
              <div className="h-full flex items-center pl-[12px]">
                <Image
                  src={profileImage}
                  width={160}
                  height={160}
                  className="rounded-full"
                  alt=""
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-[1rem]">
                <SmallItem cln="relative">
                  <FileInput
                    label={<MdOutlineEdit size={22} color="#d6d6d6" />}
                    name="changePhoto"
                    setImgSrc={setProfileImage}
                    cln="ml-[-1.71rem] mb-[1.7rem]"
                  />
                </SmallItem>
                <SmallItem onClick={handleRemovePhoto}>
                  <LuTrash2 size={22} color="#CB112D" />
                </SmallItem>
              </div>
            </div>
            <div className="w-full">
              <div className="w-full flex gap-[2rem]">
                <Input
                  placeholder="Name"
                  type="text"
                  cln="mb-[1.5rem] w-full"
                />
                <Input
                  placeholder="Username"
                  type="text"
                  cln="mb-[1.5rem] w-full"
                />
              </div>
              <div className="w-full flex gap-[2rem]">
                <Input placeholder="Bio" type="text" cln="mb-[1.5rem] w-full" />
                <Input
                  placeholder="Email"
                  type="text"
                  cln="mb-[1.5rem] w-full"
                />
              </div>
              <div className="w-full flex justify-end">
                <PrimaryButton cln="round btn-15-round text-[1.125rem] py-[0.5rem] px-[2rem]">
                  Save
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default EditProfile;
