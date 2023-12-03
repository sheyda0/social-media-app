const RegisterFormTitle = ({ title, sub }) => {
  return (
    <div className="flex flex-col mb-[3rem]">
      <h2 className="text-[2.5rem] text-milky font-semibold">{title}</h2>
      <span className="text-[1rem] text-gray">{sub}</span>
    </div>
  );
};

export default RegisterFormTitle;
