import "./like-button.css";

const LikeButton = ({ cln, onClick }) => {
  return (
    <div className="stage z-50" onClick={onClick}>
      <div className={`heart ${cln}`}></div>
    </div>
  );
};

export default LikeButton;
