import "./maski-button.css";

const MaskiButton = ({ children }) => {
  return (
    <>
      <div className="button-container-1">
        <span className="mas">{children}</span>
        <button id="work" type="button" name="Hover">
          {children}
        </button>
      </div>
    </>
  );
};

export default MaskiButton;
