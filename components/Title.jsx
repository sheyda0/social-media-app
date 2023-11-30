const Title = ({ children, cln }) => {
  return (
    <h3
      className={`${cln} mb-[1.125rem] sidebar-menu-title text-gray dark:text-[#d6d6d6] uppercase`}
    >
      {children}
    </h3>
  );
};

export default Title;
