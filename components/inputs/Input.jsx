const Input = ({ type, cln, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      className={`${cln} raise bg-light dark:bg-[#242531] text-gray w-[30rem] px-[1.25rem] medium-height round border-none outline-none font-semibold`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
