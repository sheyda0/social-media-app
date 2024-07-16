const SecondaryButton = ({ children, cln, onClick }) => {
  return (
    <button
      className={`${cln} rounded-md font-semibold text-gray dark:text-[#d6d6d6] blue-gradient-bg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
