import React from "react";
import "./main.css";
import "typeface-quicksand";
import { useNavigate } from "react-router";
import { gapi, loadAuth2, loadAuth2WithProps } from "gapi-script";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";

export default function  Header() {
  let client =
    "71694010182-v9dh8npv6bkonh2a0au9n0kseo2duhjq.apps.googleusercontent.com";
  
    const Navigate = useNavigate();
    const {searchingTerm, setSearchingTerm} = useContext(allcontext)


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
  const searchInput=useRef();

   const handleSearch = async (event) => {
      event.preventDefault()
      setSearchingTerm(searchInput.current.value)
      Navigate("/Searchresults");
  }
 
  
  return (
    <>
      <div className="header">
        <span>J-videoPlayer</span>
        <div className="search">
          <form onSubmit={handleSearch}>
          <input ref={searchInput} type="text" placeholder="Recherche..." />
          <button type="submit">Chercher</button>
          </form>
        </div>
        <div className="accueil">
          <Link to={"/home"}>Accueil</Link>
          <Link to={"/Abonnement"}>Abonnement </Link>
          <button className="btn-disconect" onClick={logOut}>Deconnexion</button>
        </div>
      </div>
    </>
  );
}
