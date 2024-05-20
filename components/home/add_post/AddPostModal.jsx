import AddPostDescription from "./AddPostDescription";
import ImageEditor from "./ImageEditor";

const AddPostModal = ({ handleShowEditor, showEditor, handleHideEditor }) => {
  return showEditor ? (
    <ImageEditor handleHideEditor={handleHideEditor} />
  ) : (
    <AddPostDescription
      handleShowEditor={handleShowEditor}
      showEditor={showEditor}
    />
  );
};

export default AddPostModal;
