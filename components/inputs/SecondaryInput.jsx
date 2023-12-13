const SecondaryInput = ({
  type,
  cln,
  placeholder,
  value,
  onChange,
  required,
}) => {
  return (
    <input
      type={type}
      className={`${cln} text-gray w-full bg-transparent border-gray px-[1.25rem] medium-height round border-none outline-none font-semibold`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default SecondaryInput;
