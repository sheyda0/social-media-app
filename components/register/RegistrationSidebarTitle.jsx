const RegistrationSidebarTitle = ({ title, sub, cln }) => {
  return (
    <div
      class={`${cln} img__text md:flex items-center justify-center w-full text-milky absolute left-0 top-[15rem] z-10 hidden`}
    >
      <div>
        <h2 className="text-[2.5rem] text-milky font-semibold mb-[0.5rem]">
          {title}
        </h2>
        <p className="font-semibold text-[1.125rem]">{sub}</p>
      </div>
    </div>
  );
};

export default RegistrationSidebarTitle;
