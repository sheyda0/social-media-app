const SeparatorWithText = ({ children }) => {
  return (
    <div className="my-[2.5rem] relative">
      <div className="border-gray w-full"></div>
      <div className="text-milky absolute top-[-1.7rem] left-[47%] font-semibold bg-darker-gray p-[1rem] rounded-full">
        {children}
      </div>
    </div>
  );
};

export default SeparatorWithText;
