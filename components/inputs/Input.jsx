const Input = ({
  type,
  cln,
  placeholder,
  value,
  onChange,
  required,
  noBorder,
  name,
}) => {
  return (
    <input
      type={type}
      className={`${cln} ${
        !noBorder &&
        "border-b border-[#9798ad] focus:border-[#5C8CE2] focus:border-b-[2px]"
      } bg-transparent text-gray px-[1.25rem] medium-height outline-none font-semibold transition-all text-[1.125rem]`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      id={name}
      name={name}
    />
  );
};

export default Input;
