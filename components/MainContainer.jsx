const MainContainer = ({ children, cln }) => {
  return (
    <div className={`${cln} px-[5rem] h-full hide-scrollbar mt-[3rem]`}>
      {children}
    </div>
  );
};

export default MainContainer;
