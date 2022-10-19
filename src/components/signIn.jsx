import { gapi, loadAuth2 } from "gapi-script";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Sing.css";

export default function SignIn() {
  const navigate = useNavigate();
  // let access_token;
  let client =
    "71694010182-unufgf9qovrh55h9nahptqcc90vrj8q3.apps.googleusercontent.com";

  useEffect(() => {
    const setAuth = async () => {
      const auth2 = await loadAuth2(gapi, client);
      if (!auth2.isSignedIn.get()) {
        attachSignIn(
          document.getElementById("btn_connexion"),
          auth2,
          "https://www.googleapis.com/auth/youtube.force-ssl"
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
        localStorage.setItem("token", JSON.stringify(token));
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
          <h1>
            Bienvenue sur notre plate forme!
            <p>Powered By KDA</p>
          </h1>
          <button id="btn_connexion">
            <h2>CONNEXION</h2>
          </button>
        </div>
      </div>
    </>
  );
}
