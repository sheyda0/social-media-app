"use client";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "../Input";
import SocialLoginButton from "./SocialLoginButton";
import { FiGithub } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";

const Login = () => {
  return (
    <div class="form sign-in flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <div className="flex flex-col mb-[3rem]">
          <h2 className="text-[2.5rem] text-milky font-semibold">
            Welcome back
          </h2>
          <span className="text-[1rem] text-gray">Sign in to your account</span>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <SocialLoginButton
            icon={<FiGithub size={17} />}
            text="Continue with GitHub"
          />
          <SocialLoginButton
            icon={<SiGoogle size={17} />}
            text="Continue with Google"
          />
        </div>
        <div className="my-[2.5rem] relative">
          <div className="border-gray w-full"></div>
          <div className="text-milky absolute top-[-1.5rem] left-[47%] font-semibold bg-darker-gray p-[1rem] rounded-full">
            or
          </div>
        </div>
        <Input
          placeholder="Email or Username"
          type="text"
          cln="mb-[1.5rem] w-[35rem]"
        />
        <Input
          placeholder="Password"
          type="password"
          cln="mb-[1.5rem] w-[35rem]"
        />

        <PrimaryButton cln="h-[4rem] round btn-15-round text-[1.125rem]">
          Sign In
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Login;
