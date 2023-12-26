"use client";

const SmallItem = ({ children, cln, onClick }) => {
  return (
    <div
      className={`${cln} cursor-pointer md:w-[3.7rem] raise no-raise medium-height relative round md:bg-[#f4f4f7] md:dark:bg-[#242531] flex items-center justify-center text-gray dark:text-[#d6d6d6]`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default SmallItem;
