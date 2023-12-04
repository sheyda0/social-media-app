const MainContainer = ({ children, cln }) => {
  return (
    <div className={`${cln} px-[5rem] h-full overflow-y-scroll mt-[3rem]`}>
      {children}
    </div>
  );
};

export default MainContainer;
