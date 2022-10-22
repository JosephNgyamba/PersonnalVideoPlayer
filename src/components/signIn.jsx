import { gapi, loadAuth2 } from "gapi-script";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { GoogleLogin, useGoogleLogin } from '@react-oauth/google';
import axios from "axios";
import "./Sing.css";

export default function SignIn() {

  const Navigate=useNavigate();
   const Login=useGoogleLogin({
    scope : 'https://www.googleapis.com/auth/youtube.force-ssl',
    onSuccess: res => {console.log(res)
    localStorage.setItem('token',res.access_token)  
    Navigate('/home')
    } 
  
   });
 
  return (
    <>
    <div className="login-button">
      {/* <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
  
/> */}
    </div>
      <div className="content">
        <div className="content-element">
          <h1>
            Bienvenue sur J-VideoPlayer
          </h1>
          <button id="btn_connexion" onClick={Login}>
            <p>se connecter avec Google</p>
          </button>
        </div>
      </div>
    </>
  );
}
