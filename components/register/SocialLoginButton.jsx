const SocialLoginButton = ({ icon, text, onClick }) => {
  return (
    <button
      className="border border-[var(--gray)] transition-all hover:translate-y-[-0.5rem] w-full medium-height round flex items-center justify-center gap-[0.65rem]"
      onClick={onClick}
    >
      {icon}
      <span className="text-milky font-semibold text-[1.125rem]">{text}</span>
    </button>
  );
};

export default SocialLoginButton;
