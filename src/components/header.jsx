import React from "react";
import "./main.css";
import "typeface-quicksand";
import { useNavigate } from "react-router";
import { gapi, loadAuth2 } from "gapi-script";
import { Link } from "react-router-dom";

export default function Header() {
  let client =
    "71694010182-v9dh8npv6bkonh2a0au9n0kseo2duhjq.apps.googleusercontent.com";
  const Navigate = useNavigate();
  const logOut = () => {
    const setAuth2 = async () => {
      const auth2 = await loadAuth2(
        gapi,
        client,
        "https://www.googleapis.com/auth/youtube"
      );
      if (auth2.isSignedIn.get()) {
        auth2.signOut();
      }
    };
    setAuth2().then(() => {
      // switchIsLogin();
      Navigate("/");
    });
  };
  return (
    <>
      <div className="header">
        <img
          src="images/vidlog-removebg-preview.png"
          alt="Mon logo"
          color="white"
        ></img>
        <div className="search">
          <input type="text" placeholder="Recherche..." />
        </div>
        <div className="accueil">
          <Link to={"/home"}>Accueil</Link>
          <a href="#">Mon compte</a>
          <button onClick={logOut}>Deconnexion</button>
        </div>
      </div>
    </>
  );
}
