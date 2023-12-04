const SecondaryButton = ({ children, cln }) => {
  return (
    <button
      className={`${cln} rounded-md font-semibold text-gray dark:text-[#d6d6d6] bg-light dark:bg-[#242531]`}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
