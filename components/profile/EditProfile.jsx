import Modal from "../Modal";
import { IoCloseOutline } from "react-icons/io5";

const EditProfile = ({ closeModal }) => {
  return (
    <Modal>
      <div>
        <button onClick={closeModal}>
          <IoCloseOutline />
        </button>
      </div>
    </Modal>
  );
};

export default EditProfile;
