"use client";

import { useEffect, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "../Input";
import SeparatorWithText from "../SeparatorWithText";
import RegisterFormTitle from "./RegisterFormTitle";
import SocialLoginButton from "./SocialLoginButton";
import { FiGithub } from "react-icons/fi";
import { SiGoogle } from "react-icons/si";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features/auth/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setErrorMsg("");
  }, [username, password]);

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ username, password }.unwrap());
      dispatch(setCredentials({ ...userData, user }));
      setUsername("");
      setPassword("");
    } catch (error) {
      if (!err?.originalStatus) {
        setErrorMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrorMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrorMsg("Unauthorized");
      } else {
        setErrorMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div class="form sign-in flex flex-col justify-center items-center w-[85vw] md:w-[70vw]">
      <div className="flex flex-col">
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
        <form action="" className="flex flex-col" onSubmit={handleSubmit}>
          <Input
            placeholder="Email or Username"
            type="text"
            cln="mb-[1.5rem] w-[23rem]"
            value={username}
            onChange={handleUsernameInput}
            required={true}
          />
          <Input
            placeholder="Password"
            type="password"
            cln="mb-[1.5rem] w-[23rem]"
            value={password}
            onChange={handlePasswordInput}
            required={true}
          />

          <PrimaryButton cln="round btn-15-round text-[1.125rem] medium-height">
            Sign In
          </PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default Login;
