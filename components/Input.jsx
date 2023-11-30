const Input = ({ type, cln, placeholder }) => {
  return (
    <input
      type={type}
      className={`${cln} bg-light raise dark:bg-[#242531] w-[30rem] px-[1.25rem] medium-height round border-none outline-none`}
      placeholder={placeholder}
    />
  );
};

export default Input;
