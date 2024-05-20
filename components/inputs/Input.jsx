const Input = ({ type, cln, placeholder, value, onChange, required }) => {
  return (
    <input
      type={type}
      className={`${cln} bg-transparent text-gray px-[1.25rem] medium-height border-b border-[#9798ad] outline-none font-semibold focus:border-[#5C8CE2] transition-all`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default Input;
