import React from "react";
import "./Styles/header.css"
import "./Styles/main.css"
import "typeface-quicksand";
import { useNavigate } from "react-router";
import { gapi, loadAuth2, loadAuth2WithProps } from "gapi-script";
import { useRef } from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import Logout from "./logout";

export default function  Header() {
  

     const profil= localStorage.getItem("profil")
    const {searchingTerm, setSearchingTerm} = useContext(allcontext)
   
  const searchInput=useRef();

   const handleSearch = async (event) => {
      event.preventDefault()
      setSearchingTerm(searchInput.current.value)
      Navigate("/Searchresults");
  }
   const Navigate=useNavigate(); 
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
        <div className="header-items">
        <div className="header-searchbar">
          <form onSubmit={handleSearch}>
            <div>
              <input ref={searchInput} type="text" placeholder="Recherche..." />
          <button type="submit">...</button>
            </div>
          
          </form>
        </div> 
         <button className="btn-disconect" onClick={logOut } >Deconnexion</button>
         <img src={profil} className="header-user-profil"></img>
        </div>
      </div>
    </>
  );
}
