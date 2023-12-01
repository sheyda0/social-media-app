const SocialLoginButton = ({ icon, text }) => {
  return (
    <button className="border-gray raise w-full medium-height round flex items-center justify-center gap-[0.65rem]">
      {icon}
      <span className="text-milky font-semibold text-[1.125rem]">{text}</span>
    </button>
  );
};

export default SocialLoginButton;
