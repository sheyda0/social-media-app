const Username = ({ children, cln }) => {
  return (
    <h3
      className={`${cln} capitalize font-semibold text-[1.125rem] text-dark-gray dark:text-[#d6d6d6]`}
    >
      {children}
    </h3>
  );
};

export default Username;
