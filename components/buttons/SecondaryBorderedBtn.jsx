const SecondaryBorderedBtn = ({ children, cln }) => {
  return (
    <button
      className={`${cln} rounded-md font-semibold text-gray dark:text-[#d6d6d6] border-gray`}
    >
      {children}
    </button>
  );
};

export default SecondaryBorderedBtn;
