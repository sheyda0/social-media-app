import SmallProfileImage from "../SmallProfileImage";
import ProfileImage from "../../assets/images/wepik-export-20231128203407BKL1.jpeg";
import { useDispatch } from "react-redux";
import { openModal } from "@/redux/features/modal/modalSlice";

const AddPost = () => {
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  return (
    <div
      className="w-full min-h-[10rem] bg-light dark:bg-[#242531] mt-[2rem] round p-[2.2rem]"
      onClick={handleOpenModal}
    >
      <button className="bg-light-white raise dark:bg-[#141520] w-full h-full round flex items-center justify-between text-gray font-semibold pl-[1rem] pr-[2rem]">
        <div className="flex items-center gap-[1rem]">
          <SmallProfileImage img={ProfileImage} />
          <span className="text-[1.125rem]">Start a post</span>
        </div>
      </button>
    </div>
  );
};

export default AddPost;
