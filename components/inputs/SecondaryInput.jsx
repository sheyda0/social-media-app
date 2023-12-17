"use client";

const SecondaryInput = ({
  type,
  cln,
  placeholder,
  value,
  onChange,
  required,
  autoFocus,
}) => {
  return (
    <input
      type={type}
      className={`${cln} text-gray w-full bg-transparent border border-[#9798ad] px-[1.25rem] round focus:border-[2px] transition-all outline-none font-semibold`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      autoFocus={autoFocus}
    />
  );
};

export default SecondaryInput;
