import RegistrationSidebarTitle from "./RegistrationSidebarTitle";

const RegistrationSidebar = ({ onClick }) => {
  return (
    <div class="img">
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

      <div class="img__btn" onClick={onClick}>
        <span class="m--up">Sign Up</span>
        <span class="m--in">Sign In</span>
      </div>
    </div>
  );
};

export default RegistrationSidebar;
