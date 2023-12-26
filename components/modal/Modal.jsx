"use client";

import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/modalSlice";

export default function Modal({ children, cln }) {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
    console.log("hii");
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 bg-zinc-700 opacity-60 w-full h-full z-50"
        onClick={handleCloseModal}
      ></div>
      <div
        className={`${
          cln ? cln : ""
        } z-[60] inset-0 bg-opacity-50 absolute shadow-lg round bg-light-white dark:bg-[#141520] top-[20%] left-[1.7rem] md:left-[27%] w-[89vw] md:w-[60rem] h-[65vh] md:h-[60vh]`}
      >
        {children}
      </div>
    </>
  );
}
