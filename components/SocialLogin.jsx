"use client";

import React, { useCallback, useRef, useState } from "react";
import { LoginSocialGoogle } from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import { GoogleLoginButton } from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const SocialLogin = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const googleRef = React.useRef();

  const onLoginStart = useCallback(() => {
    alert("login start");
  }, []);

  const onLogoutFailure = useCallback(() => {
    alert("logout fail");
  }, []);

  const onLogoutSuccess = useCallback(() => {
    setProfile(null);
    setProvider("");
    alert("logout success");
  }, []);

  console.log(profile);

  return (
    <>
      <div className={`App ${provider && profile ? "hide" : ""}`}>
        <h1 className="title">ReactJS Social Login</h1>
        <LoginSocialGoogle
          ref={googleRef}
          client_id="1024616921919-hns9m0q39jb21qrp4kpb57kti2sd5t1n.apps.googleusercontent.com"
          onLogoutFailure={onLogoutFailure}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log("hbhbdhd", err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </>
  );
};

export default SocialLogin;
