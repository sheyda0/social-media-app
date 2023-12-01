const PrimaryButton = ({ children, cln }) => {
  return (
    <button
      className={`${cln} custom-btn btn-15 rounded-md font-semibold text-milky`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
