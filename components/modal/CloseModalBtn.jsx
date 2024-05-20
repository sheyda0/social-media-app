"use client";

import { IoCloseOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/features/modal/modalSlice";

const CloseModalBtn = ({ cln, onClick }) => {
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <button
      className={cln ? cln : ""}
      onClick={onClick ? onClick : handleCloseModal}
    >
      <IoCloseOutline className="text-gray" size={24} />
    </button>
  );
};

export default CloseModalBtn;
