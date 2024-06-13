"use client";

import Input from "../inputs/Input";
import SeparatorWithText from "../SeparatorWithText";
import RegisterFormTitle from "./RegisterFormTitle";
import SocialLoginButton from "./SocialLoginButton";
import { FiGithub } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import GalaxyButton from "../buttons/galaxy-button/GalaxyButton";
import signInWithGoogle, { login } from "@/utils/supabase/authActions";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();

  async function handleSignInWithGoogle(response) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: response.credential,
    });

    if (data) {
      console.log(data);
      router.push("/home");
    } else {
      console.log(error);
    }
  }

  return (
    <div className="form sign-in flex flex-col justify-center items-center w-[85.5vw] md:w-[70vw]">
      <div
        id="g_id_onload"
        data-client_id="63749383748-cs9km8shvrltud2207vab36t7gv3ktb7.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback={handleSignInWithGoogle}
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="true"
      ></div>

      <div
        class="g_id_signin"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>

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
            onClick={signInWithGoogle}
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
          <GalaxyButton formAction={login}>Sign In</GalaxyButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
