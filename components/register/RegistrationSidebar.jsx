import PrimaryButton from "../buttons/PrimaryButton";
import LittleUniverse from "../utils/little-universe/LittleUniverse";
import RegistrationSidebarTitle from "./RegistrationSidebarTitle";

const RegistrationSidebar = ({ onClick }) => {
  return (
    <div className="img w-[15vw] md:w-[40vw]">
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
        <div className="img__btn" onClick={onClick}>
          <PrimaryButton cln="m--up register-sidebar-btn !rounded-full">
            Sign Up
          </PrimaryButton>
          {/* <span className="m--up">Sign Up</span> */}
          <PrimaryButton cln="m--in register-sidebar-btn !rounded-full">
            Sign In
          </PrimaryButton>
          {/* <span className="m--in register-sidebar-btn">Sign In</span> */}
        </div>
      </div>

      <div className="flex justify-center mt-[5rem]">
        <LittleUniverse />
      </div>
    </div>
  );
};

export default RegistrationSidebar;
