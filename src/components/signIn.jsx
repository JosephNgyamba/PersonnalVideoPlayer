import { gapi, loadAuth2 } from "gapi-script";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Sing.css";

export default function SignIn() {
  const navigate = useNavigate();
  // let access_token;
  let client =
    "71694010182-v9dh8npv6bkonh2a0au9n0kseo2duhjq.apps.googleusercontent.com";

  useEffect(() => {
    const setAuth = async () => {
      //https://www.googleapis.com/auth/youtube
      const auth2 = await loadAuth2(gapi, client);
      if (!auth2.isSignedIn.get()) {
        attachSignIn(
          document.getElementById("btn_connexion"),
          auth2,
          "https://www.googleapis.com/auth/youtube"
        );
      } else {
        auth2.signOut();
        console.log("déjà connecté");
      }
    };
    setAuth();
  }, []);

  const attachSignIn = (element, auth) => {
    auth.attachClickHandler(
      element,
      {},
      (user) => {
        const token = user.xc.access_token;
        localStorage.setItem("token", token);
        navigate("/home");
        //console.log(user);
      },
      (error) => console.log(error)
    );
  };
  return (
    <>
      <div className="content">
        <div className="content-element">
          <h1>Bienvenue sur notre plate forme!</h1>
          <button id="btn_connexion">
            <h2>PLAY</h2>
          </button>
        </div>
      </div>
    </>
  );
}
