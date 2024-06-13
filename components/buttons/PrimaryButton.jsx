const PrimaryButton = ({ children, cln, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${cln} rounded-md font-semibold text-milky border-[2px] border-[var(--light-blue)]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
