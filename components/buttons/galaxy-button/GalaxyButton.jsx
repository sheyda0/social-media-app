import "./galaxy-button.css";

const GalaxyButton = ({ children, formAction }) => {
  return (
    <button className="btn third" formAction={formAction}>
      {children}
    </button>
  );
};

export default GalaxyButton;
