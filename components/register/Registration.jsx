"use client";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import RegistrationSidebar from "./RegistrationSidebar";

const Registration = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      <div
        class={`cont ${
          showSignUp && "s--signup"
        } overflow-hidden relative w-[100vw] h-[100vh] bg-[#141520]`}
      >
        <Login />
        <div class="sub-cont left-[85vw] md:left-[60vw] w-[100vw] h-[100vh]">
          <RegistrationSidebar onClick={handleShowSignUp} />
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Registration;
