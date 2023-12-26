import CloseModalBtn from "../modal/CloseModalBtn";
import Modal from "../modal/Modal";
import { AiOutlineCloudUpload } from "react-icons/ai";

const AddPostModal = () => {
  return (
    <Modal cln="p-[2rem]">
      <div className="h-full">
        <CloseModalBtn />

        {/* caption */}
        <textarea
          cols="30"
          rows="10"
          placeholder="What do you want to talk about?"
          className="w-full h-1/2 bg-transparent resize-none outline-none text-[1.5rem] text-gray"
          autoFocus
        ></textarea>

        {/* file */}
        <div className="w-full h-1/2 bg-light dark:bg-[#242531] round">
          <div className="w-full flex flex-col justify-center items-center text-gray text-[1.25rem]">
            <AiOutlineCloudUpload size={50} className="text-gray" />
            <p>Drag & Drop Files to Upload</p>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddPostModal;
