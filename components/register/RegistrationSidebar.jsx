import RegistrationSidebarTitle from "./RegistrationSidebarTitle";

const RegistrationSidebar = ({ onClick }) => {
  return (
    <div class="img w-[15vw] md:w-[40vw]">
      <RegistrationSidebarTitle
        title="New here?"
        sub="Sign up and discover great amount of new opportunities!"
        cln="m--up"
      />
      <RegistrationSidebarTitle
        title="One of us?"
        sub="If you already has an account, just sign in. We have missed you!"
        cln="m--in"
      />

      <div className="w-full h-full absolute left-[-1.5rem] top-[50%]">
        <div class="img__btn" onClick={onClick}>
          <span class="m--up">Sign Up</span>
          <span class="m--in">Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
