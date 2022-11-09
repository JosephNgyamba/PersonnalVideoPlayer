import React from "react";
import "./main.css";
import "typeface-quicksand";
import { useNavigate } from "react-router";
import { gapi, loadAuth2} from "gapi-script";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import Logout from "./exit";


export default function  Header() {

    const Navigate = useNavigate();
    const {searchingTerm, setSearchingTerm} = useContext(allcontext)
    let userProfil = localStorage.getItem("profil");
     let username = localStorage.getItem("username");
    
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
          <img src={userProfil} alt="photo-de-profil" /><span>{username}</span>
          <button className="btn-disconect">Deconnexion</button>
        </div>
      </div>
    </>
  );
}
