import Input from "../inputs/Input";
import RegisterFormTitle from "./RegisterFormTitle";
import GalaxyButton from "../buttons/galaxy-button/GalaxyButton";
import { signup } from "@/utils/supabase/authActions";

const SignUp = () => {
  return (
    <div className="form sign-up flex flex-col justify-center items-center w-[85.5vw] md:w-[70vw]">
      <form className="flex flex-col w-[75vw] md:w-[30rem]">
        <RegisterFormTitle title="Get started" sub="Create a new account" />
        <Input
          placeholder="Email"
          cln="mb-[1.5rem] w-full"
          required={true}
          name="email"
          type="email"
        />
        <Input
          placeholder="Password"
          name="password"
          type="password"
          cln="mb-[1.5rem] w-full"
          required={true}
        />
        <GalaxyButton formAction={signup}>Sign Up</GalaxyButton>
      </form>
    </div>
  );
};

export default SignUp;
