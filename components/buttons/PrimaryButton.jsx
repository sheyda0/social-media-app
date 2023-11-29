const PrimaryButton = ({ children }) => {
  return (
    <button class="custom-btn btn-15 px-[0.875rem] py-[0.2rem] rounded-md font-semibold text-[0.75rem] text-milky">
      {children}
    </button>
  );
};

export default PrimaryButton;
