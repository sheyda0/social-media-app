"use client";

import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/modalSlice";
import { useSelector } from "react-redux";

export default function ModalContainer({
  children,
  cln,
  backdropCln,
  onModalClick,
  onBackdropClick,
}) {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    onBackdropClick && onBackdropClick();
    dispatch(closeModal());
    console.log("hii");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 bottom-0 bg-[#080F1F] opacity-70 w-full z-[101] transition-all duration-700 ${
          isOpen ? "h-full" : "h-0"
        } ${backdropCln}`}
        onClick={handleCloseModal}
      ></div>
      <div
        onClick={onModalClick}
        className={`${cln ? cln : ""} ${
          isOpen ? "translate-y-0" : "translate-y-[-200%]"
        } transition-all duration-700 inset-0 absolute shadow-lg round bg-[#0B1020] top-[5%] left-[1.7rem] md:left-[27%] w-[89vw] md:w-[60rem] h-[65vh] md:h-[60vh] z-[102]`}
      >
        {children}
      </div>
    </>
  );
}
