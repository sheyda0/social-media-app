"use client";

import React, { useCallback, useRef, useState } from "react";
import {
  LoginSocialGoogle,
  LoginSocialAmazon,
  LoginSocialFacebook,
  LoginSocialGithub,
  LoginSocialInstagram,
  LoginSocialLinkedin,
  LoginSocialMicrosoft,
  LoginSocialPinterest,
  LoginSocialTwitter,
} from "reactjs-social-login";

// CUSTOMIZE ANY UI BUTTON
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  AmazonLoginButton,
  InstagramLoginButton,
  LinkedInLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton,
} from "react-social-login-buttons";

const REDIRECT_URI = "http://localhost:3000/account/login";

const SocialLogin = () => {
  const [provider, setProvider] = useState("");
  const [profile, setProfile] = useState();
  const amazonRef = useRef();
  const instagramRef = useRef();
  const googleRef = useRef();
  const facebookRef = useRef();
  const microsoftRef = useRef();
  const linkedinRef = useRef();
  const githubRef = useRef();
  const pinterestRef = useRef();
  const twitterRef = useRef();

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
        <LoginSocialFacebook
          ref={facebookRef}
          appId={"431451242017946"}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
            console.log(data, "data");
            console.log(provider, "provider");
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <FacebookLoginButton />
        </LoginSocialFacebook>

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

        <LoginSocialAmazon
          ref={amazonRef}
          client_id={process.env.REACT_APP_AMAZON_APP_ID || ""}
          redirect_uri={REDIRECT_URI}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
        >
          <AmazonLoginButton />
        </LoginSocialAmazon>

        <LoginSocialInstagram
          ref={instagramRef}
          client_id={process.env.REACT_APP_INSTAGRAM_APP_ID || ""}
          client_secret={process.env.REACT_APP_INSTAGRAM_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <InstagramLoginButton />
        </LoginSocialInstagram>

        <LoginSocialMicrosoft
          ref={microsoftRef}
          client_id={process.env.REACT_APP_MICROSOFT_APP_ID || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <MicrosoftLoginButton />
        </LoginSocialMicrosoft>

        <LoginSocialLinkedin
          ref={linkedinRef}
          client_id={process.env.REACT_APP_LINKEDIN_APP_ID || ""}
          client_secret={process.env.REACT_APP_LINKEDIN_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <LinkedInLoginButton />
        </LoginSocialLinkedin>

        <LoginSocialGithub
          ref={githubRef}
          client_id="dd34c20321d2d86fc3bf"
          client_secret="70abebd7fb38b6a0f56c54ea8090b66b42e242a6"
          redirect_uri="/home"
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GithubLoginButton />
        </LoginSocialGithub>
        <LoginSocialPinterest
          ref={pinterestRef}
          client_id={process.env.REACT_APP_PINTEREST_APP_ID || ""}
          client_secret={process.env.REACT_APP_PINTEREST_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
          className="pinterest-btn"
        >
          <div className="content">
            <div className="icon"></div>
            <span className="txt">Login With Pinterest</span>
          </div>
        </LoginSocialPinterest>

        <LoginSocialTwitter
          ref={twitterRef}
          client_id={process.env.REACT_APP_TWITTER_API_KEY || ""}
          client_secret={process.env.REACT_APP_TWITTER_APP_SECRET || ""}
          redirect_uri={REDIRECT_URI}
          onLoginStart={onLoginStart}
          onLogoutSuccess={onLogoutSuccess}
          onResolve={({ provider, data }) => {
            setProvider(provider);
            setProfile(data);
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <TwitterLoginButton />
        </LoginSocialTwitter>
      </div>
    </>
  );
};

export default SocialLogin;
