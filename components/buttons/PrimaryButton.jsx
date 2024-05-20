const PrimaryButton = ({ children, cln }) => {
  return (
    <button
      className={`${cln} rounded-md font-semibold text-milky border-[2px] border-[#5C8CE2]`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
