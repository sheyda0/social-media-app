import Input from "../inputs/Input";
import RegisterFormTitle from "./RegisterFormTitle";
import GalaxyButton from "../buttons/galaxy-button/GalaxyButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PasswordEyeButton from "./PasswordEyeButton";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    router.push("/home");
  };

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
          value="test@test.com"
        />
        <div className="relative">
          <Input
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            cln="mb-[1.5rem] w-full"
            required={true}
            value="test"
          />

          <PasswordEyeButton show={showPassword} onClick={handleShowPassword} />
        </div>
        <GalaxyButton onClick={handleSignup}>Sign Up</GalaxyButton>
      </form>
    </div>
  );
};

export default SignUp;
