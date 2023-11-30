"use client";
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const Registration = () => {
  const [showSignUp, setShowSignUp] = useState(false);

  const handleShowSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  return (
    <div className="h-[100vh] w-[100vw]">
      <div class={`cont ${showSignUp && "s--signup"}`}>
        <Login />
        <div class="sub-cont">
          <div class="img">
            <div class="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div class="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. Weve missed you!
              </p>
            </div>
            <div class="img__btn" onClick={handleShowSignUp}>
              <span class="m--up">Sign Up</span>
              <span class="m--in">Sign In</span>
            </div>
          </div>
        </div>
        <SignUp />
      </div>
    </div>
  );
};

export default Registration;
