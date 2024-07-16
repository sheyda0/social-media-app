"use client";

import Input from "../inputs/Input";
import SeparatorWithText from "../SeparatorWithText";
import RegisterFormTitle from "./RegisterFormTitle";
import SocialLoginButton from "./SocialLoginButton";
import { FiGithub } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import GalaxyButton from "../buttons/galaxy-button/GalaxyButton";

const Login = () => {
  return (
    <div className="form sign-in flex flex-col justify-center items-center w-[85.5vw] md:w-[70vw]">
      <div className="flex flex-col w-[75vw] md:w-[30rem]">
        <RegisterFormTitle title="Welcome back" sub="Sign in to your account" />
        <div className="flex flex-col gap-[1.5rem]">
          <SocialLoginButton
            icon={<FiGithub size={17} color="#d6d6d6" />}
            text="Continue with GitHub"
          />
          <SocialLoginButton
            icon={<SiGoogle size={17} color="#d6d6d6" />}
            text="Continue with Google"
          />
        </div>
        <SeparatorWithText>or</SeparatorWithText>
        <form action="" className="flex flex-col">
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
          <GalaxyButton>Sign In</GalaxyButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
