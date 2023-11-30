"use client";
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import Input from "../Input";

const Login = () => {
  return (
    <div class="form sign-in flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h2>Welcome back,</h2>
        <Input placeholder="username" type="text" cln="mb-[1.5rem]" />
        <Input placeholder="password" type="password" cln="mb-[1.5rem]" />

        <PrimaryButton>Login</PrimaryButton>
      </div>
    </div>
  );
};

export default Login;

{
  /* <div class="form sign-in flex flex-col justify-center items-center">
      <div className="flex flex-col">
        <h2>Welcome back,</h2>
        <Input placeholder="username" type="text" cln="mb-[1.5rem]" />
        <Input placeholder="password" type="password" cln="mb-[1.5rem]" />

        <PrimaryButton>Login</PrimaryButton>
      </div>
    </div> */
}
