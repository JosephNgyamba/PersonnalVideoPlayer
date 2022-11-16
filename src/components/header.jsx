import React from "react";
import "./main.css";
import "./header.css"
import "typeface-quicksand";
import { useNavigate } from "react-router";
import { gapi, loadAuth2, loadAuth2WithProps } from "gapi-script";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import Logout from "./logout";

export default function  Header() {
  
  
    const Navigate = useNavigate();
    const {searchingTerm, setSearchingTerm} = useContext(allcontext)
    const profil= localStorage.getItem("profil")
    const username= localStorage.getItem("username")


  const searchInput=useRef();

   const handleSearch = async (event) => {
      event.preventDefault()
      setSearchingTerm(searchInput.current.value)
      Navigate("/Searchresults");
  }

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
         <img src={profil}  className="header-user-profil"></img>
        </div>
      </div>
    </>
  );
}
