"use client";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import RegistrationSidebar from "./RegistrationSidebar";
import ScrollSpace from "./ScrollSpace";

const Registration = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <>
      <ScrollSpace />
      <div className="h-[100vh] w-[100vw] overflow-y-hidden">
        <div
          className={`cont ${
            showSignUp && "s--signup"
          } overflow-hidden relative w-[100vw] h-[100vh] bg-[#141520]`}
        >
          <Login />
          <div className="sub-cont left-[85vw] md:left-[60vw] w-[100vw] h-[100vh]">
            <RegistrationSidebar
              onClick={handleShowSignUp}
              showSignUp={showSignUp}
            />
            <SignUp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
