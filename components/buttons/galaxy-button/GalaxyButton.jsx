import "./galaxy-button.css";

const GalaxyButton = ({ children, formAction, onClick }) => {
  return (
    <button className="btn third" formAction={formAction} onClick={onClick}>
      {children}
    </button>
  );
};

export default GalaxyButton;
