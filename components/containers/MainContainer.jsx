const MainContainer = ({ children, cln }) => {
  return (
    <div
      className={`${
        cln ? cln : ""
      } h-full w-full container-height flex flex-col items-center overflow-y-scroll mt-[1rem] pt-[1rem] md:mt-[3rem]`}
    >
      {children}
    </div>
  );
};

export default MainContainer;
