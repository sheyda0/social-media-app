"use client";

import Image from "next/image";
import RocketIcon from "../../../assets/images/rocket (3).png";
import { getImgData } from "@/utils/utils";
import { useEffect, useState } from "react";
import CloseModalBtn from "@/components/modal/CloseModalBtn";
import ModalContainer from "@/components/modal/ModalContainer";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { openEditor } from "react-profile";
import "react-profile/themes/dark";
import { useDispatch, useSelector } from "react-redux";
import { setAddPostImage } from "@/redux/features/add_post/addPostSlice";

const ImageEditor = ({ handleHideEditor, showEditor }) => {
  const dispatch = useDispatch();
  //   const { image } = useSelector((state) => state.addPost);

  const handleSetImage = (img) => {
    dispatch(setAddPostImage({ imageUrl: img }));
  };

  const onImageInputChange = async (e) => {
    let selectedImage = await openEditor({
      src: e.target.files[0],
    });

    handleSetImage(selectedImage.editedImage.getDataURL());
    handleHideEditor();
  };

  //   useEffect(() => {
  //     const editImage = async () => {
  //       if (image) {
  //         let selectedImage2 = await openEditor({
  //           src: image,
  //           onDone: () => {
  //             handleHideEditor();
  //             handleSetImage(selectedImage2.editedImage.getDataURL());
  //           },
  //           onCancel: handleHideEditor(),
  //         });
  //       }
  //     };

  //     editImage();
  //   }, [showEditor, image]);

  return (
    <ModalContainer cln="p-[2rem] !h-[80vh] !md:w-[70vw] !md:left-[15%]">
      <div className="h-full relative">
        <div className="flex w-full justify-between items-center">
          <h4 className="text-[1.5rem]">Editor</h4>
          <CloseModalBtn onClick={handleHideEditor} />
        </div>
        <div className="w-full h-full flex flex-col justify-center items-center text-gray text-[2.5rem]">
          <Image src={RocketIcon} width={140} height={140} alt="" />

          <div className="flex flex-col justify-center gap-[0.5rem] items-center">
            <p className="text-[1.5rem] mt-[1rem]">
              Drag & Drop Files to Upload or
            </p>

            <div>
              <input
                type="file"
                accept="image/*"
                className="ml-[6rem] hidden"
                onChange={onImageInputChange}
                id="addPostImageUpload"
              />
              <PrimaryButton cln="mt-[1rem] round h-[2rem] min-[1600px]:relative min-[1600px]:w-[13rem]">
                <label
                  for="addPostImageUpload"
                  className="px-[1rem] py-[0.6rem] text-[1rem] min-[1600px]:absolute min-[1600px]:top-[-9px] left-[5px]"
                >
                  Upload from computer
                </label>
              </PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ImageEditor;
