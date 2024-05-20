"use client";

import SmallProfileImage from "../../SmallProfileImage";
import ProfileImage from "../../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/features/modal/modalSlice";
import BlurContainer from "../../containers/BlurContainer";
import AddPostModal from "./AddPostModal";
import { useState } from "react";

const AddPost = () => {
  const [showEditor, setShowEditor] = useState(false);

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
    setShowEditor(false);
  };

  const handleShowEditor = () => {
    setShowEditor(true);
  };

  const handleHideEditor = () => {
    setShowEditor(false);
  };

  return (
    <>
      <BlurContainer
        cln="w-full min-h-[10rem] mt-[2rem] round p-[2.2rem] raise add-post-container transition-all hover:translate-y-[-0.5rem] hover: "
        onClick={handleOpenModal}
        wave={
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#172A5C"
              fillOpacity="1"
              d="M0,128L17.1,122.7C34.3,117,69,107,103,122.7C137.1,139,171,181,206,181.3C240,181,274,139,309,101.3C342.9,64,377,32,411,32C445.7,32,480,64,514,80C548.6,96,583,96,617,80C651.4,64,686,32,720,37.3C754.3,43,789,85,823,117.3C857.1,149,891,171,926,192C960,213,994,235,1029,234.7C1062.9,235,1097,213,1131,213.3C1165.7,213,1200,235,1234,218.7C1268.6,203,1303,149,1337,144C1371.4,139,1406,181,1423,202.7L1440,224L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
            ></path>
          </svg>
        }
      >
        <button className="w-full h-full round">
          <div className="!w-full !h-full pl-[1rem] pr-[2rem] flex items-center justify-between text-gray font-semibold round">
            <div className="flex items-center gap-[1rem]">
              <SmallProfileImage img={ProfileImage} />
              <span className="text-[1.125rem]">Start a post</span>
            </div>
          </div>
        </button>
      </BlurContainer>
      <AddPostModal
        handleShowEditor={handleShowEditor}
        handleHideEditor={handleHideEditor}
        showEditor={showEditor}
      />
    </>
  );
};

export default AddPost;
