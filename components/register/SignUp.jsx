import { useEffect, useState } from "react";
import Input from "../Input";
import PrimaryButton from "../buttons/PrimaryButton";
import RegisterFormTitle from "./RegisterFormTitle";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "@/redux/features/auth/authApiSlice";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handleEmailInput = (e) => setPassword(e.target.value);
  const handlePasswordInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await signUp({ username, email, password }.unwrap());
      dispatch(setCredentials({ ...userData, user }));
      setUsername("");
      setEmail("");
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
    <div class="form sign-up flex flex-col justify-center items-center w-[85.5vw] md:w-[70vw]">
      <form
        action=""
        className="flex flex-col w-[75vw] md:w-[30rem]"
        onSubmit={handleSubmit}
      >
        <RegisterFormTitle title="Get started" sub="Create a new account" />
        <Input
          placeholder="Username"
          type="text"
          cln="mb-[1.5rem] w-full"
          value={username}
          onChange={handleUsernameInput}
          required={true}
        />
        <Input
          placeholder="Email"
          type="text"
          cln="mb-[1.5rem] w-full"
          value={email}
          onChange={handleEmailInput}
          required={true}
        />
        <Input
          placeholder="Password"
          type="password"
          cln="mb-[1.5rem] w-full"
          value={password}
          onChange={handlePasswordInput}
          required={true}
        />
        <PrimaryButton cln="round btn-15-round text-[1.125rem] medium-height">
          Sign In
        </PrimaryButton>
      </form>
    </div>
  );
};

export default SignUp;
