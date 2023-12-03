const PrimaryButton = ({ children, cln }) => {
  return (
    <button className={`${cln} rounded-md font-semibold text-milky bg-purple`}>
      {children}
    </button>
  );
};

export default PrimaryButton;
