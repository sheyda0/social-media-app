"use client";

import { useDispatch, useSelector } from "react-redux";
import CloseModalBtn from "../../modal/CloseModalBtn";
import ModalContainer from "../../modal/ModalContainer";
import EmojiPicker from "emoji-picker-react";
import { useState, useRef } from "react";
import Image from "next/image";
import {
  addNewPost,
  resetImage,
  setAddPostDescription,
} from "@/redux/features/add_post/addPostSlice";
import { IoCloseOutline } from "react-icons/io5";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { closeModal } from "@/redux/features/modal/modalSlice";

const AddPostDescription = ({ handleShowEditor }) => {
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const textareaRef = useRef(null);

  const dispatch = useDispatch();
  const { image, description } = useSelector((state) => state.addPost);

  const handleSetDescription = (e) => {
    dispatch(setAddPostDescription({ description: e.target.value }));
  };

  const handleResetImage = () => {
    dispatch(resetImage());
  };

  const handleTextareaChange = (e) => {
    setCursorPosition(e.target.selectionStart);
  };

  const handleOpenEmojiPicker = () => {
    setOpenEmojiPicker(true);
  };

  const handleCloseEmojiPicker = () => {
    openEmojiPicker && setOpenEmojiPicker(false);
  };

  const handleShowSelectedEmoji = (e) => {
    const { emoji } = e;
    const textBeforeCursor = emoji;
    const newValue =
      description.substring(0, textareaRef.current.selectionStart) +
      textBeforeCursor +
      description.substring(textareaRef.current.selectionEnd);
    dispatch(setAddPostDescription({ description: newValue }));
    // Move cursor position after the inserted emoji
    const newPosition =
      textareaRef.current.selectionStart + textBeforeCursor.length;
    textareaRef.current.selectionStart = newPosition;
    textareaRef.current.selectionEnd = newPosition;
    textareaRef.current.focus();
  };

  const handleAddPost = () => {
    dispatch(addNewPost());
    dispatch(closeModal());
  };

  return (
    <ModalContainer
      cln="p-[2rem] !h-[70vh]"
      backdropCln="add-post-modal"
      onModalClick={handleCloseEmojiPicker}
      onBackdropClick={handleCloseEmojiPicker}
    >
      <div className="h-full">
        <>
          <div className="flex w-full justify-end items-center">
            <CloseModalBtn />
          </div>
          <div className="h-full pb-[1.8rem] flex flex-col justify-between">
            {/* caption */}
            <textarea
              ref={textareaRef}
              cols="30"
              rows="10"
              placeholder="What do you want to talk about?"
              className="w-full h-1/2 bg-transparent resize-none outline-none text-[1.5rem] text-gray"
              autoFocus
              onChange={(e) => {
                handleTextareaChange(e);
                handleSetDescription(e);
              }}
              value={description}
            ></textarea>

            <div className="relative">
              <EmojiPicker
                open={openEmojiPicker}
                onEmojiClick={handleShowSelectedEmoji}
                theme="dark"
                width={300}
                height={400}
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  zIndex: "1000",
                }}
              />

              <button onClick={handleOpenEmojiPicker} className="mb-[1rem]">
                <svg
                  width="28px"
                  height="28px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z"
                      fill="#9798ad"
                    />{" "}
                    <path
                      d="M17 9.5C17 10.3284 16.3284 11 15.5 11C14.6716 11 14 10.3284 14 9.5C14 8.67157 14.6716 8 15.5 8C16.3284 8 17 8.67157 17 9.5Z"
                      fill="#9798ad"
                    />{" "}
                    <path
                      d="M8.88875 13.5414C8.63822 13.0559 8.0431 12.8607 7.55301 13.1058C7.05903 13.3528 6.8588 13.9535 7.10579 14.4474C7.18825 14.6118 7.29326 14.7659 7.40334 14.9127C7.58615 15.1565 7.8621 15.4704 8.25052 15.7811C9.04005 16.4127 10.2573 17.0002 12.0002 17.0002C13.7431 17.0002 14.9604 16.4127 15.7499 15.7811C16.1383 15.4704 16.4143 15.1565 16.5971 14.9127C16.7076 14.7654 16.8081 14.6113 16.8941 14.4485C17.1387 13.961 16.9352 13.3497 16.4474 13.1058C15.9573 12.8607 15.3622 13.0559 15.1117 13.5414C15.0979 13.5663 14.9097 13.892 14.5005 14.2194C14.0401 14.5877 13.2573 15.0002 12.0002 15.0002C10.7431 15.0002 9.96038 14.5877 9.49991 14.2194C9.09071 13.892 8.90255 13.5663 8.88875 13.5414Z"
                      fill="#9798ad"
                    />{" "}
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z"
                      fill="#9798ad"
                    />{" "}
                  </g>
                </svg>
              </button>
            </div>

            {image ? (
              <div className="flex flex-col items-center w-full h-1/3">
                <div className="flex gap-[1rem] items-center mb-[1rem]">
                  <button
                    className="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-white rounded-full"
                    onClick={handleResetImage}
                  >
                    <IoCloseOutline className="text-gray" size={24} />
                  </button>
                  {/* <button
                    className="w-[2.5rem] h-[2.5rem] flex justify-center items-center bg-white rounded-full"
                    onClick={handleShowEditor}
                  >
                    <MdOutlineModeEdit className="text-gray" size={24} />
                  </button> */}
                </div>
                <div className="relative w-full h-full">
                  <Image src={image} fill className="object-contain" alt="" />
                </div>
              </div>
            ) : (
              <div
                className="w-full h-1/3 dark:bg-[#242531] round flex justify-center items-center cursor-pointer"
                onClick={handleShowEditor}
              >
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M14.2647 15.9377L12.5473 14.2346C11.758 13.4519 11.3633 13.0605 10.9089 12.9137C10.5092 12.7845 10.079 12.7845 9.67922 12.9137C9.22485 13.0605 8.83017 13.4519 8.04082 14.2346L4.04193 18.2622M14.2647 15.9377L14.606 15.5991C15.412 14.7999 15.8149 14.4003 16.2773 14.2545C16.6839 14.1262 17.1208 14.1312 17.5244 14.2688C17.9832 14.4253 18.3769 14.834 19.1642 15.6515L20 16.5001M14.2647 15.9377L18.22 19.9628M18.22 19.9628C17.8703 20 17.4213 20 16.8 20H7.2C6.07989 20 5.51984 20 5.09202 19.782C4.7157 19.5903 4.40973 19.2843 4.21799 18.908C4.12583 18.7271 4.07264 18.5226 4.04193 18.2622M18.22 19.9628C18.5007 19.9329 18.7175 19.8791 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V13M11 4H7.2C6.07989 4 5.51984 4 5.09202 4.21799C4.7157 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.0799 4 7.2V16.8C4 17.4466 4 17.9066 4.04193 18.2622M18 9V6M18 6V3M18 6H21M18 6H15"
                      stroke="#3F65C3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </div>
            )}
            <div className="w-full flex justify-end">
              <PrimaryButton cln="w-[8rem] mt-[2rem]" onClick={handleAddPost}>
                Post
              </PrimaryButton>
            </div>
          </div>
        </>
      </div>
    </ModalContainer>
  );
};

export default AddPostDescription;
