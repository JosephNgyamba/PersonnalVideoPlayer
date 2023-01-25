import React from "react";
import { useNavigate } from "react-router";
import { gapi, loadAuth2, loadAuth2WithProps } from "gapi-script";
import { useRef ,useState} from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Logout from "./logout";
import "./Styles/header.css"
import "./Styles/main.css"
import "typeface-quicksand";


export default function  Header() {
  
    const client =
    "71694010182-v9dh8npv6bkonh2a0au9n0kseo2duhjq.apps.googleusercontent.com";  
     const profil= localStorage.getItem("profil");

    const {searchingTerm, setSearchingTerm} = useContext(allcontext);
    const [userPop,setUserPop]=useState(false);
   
  const searchInput=useRef();

   const handleSearch = async (event) => {
      event.preventDefault()
      setSearchingTerm(searchInput.current.value);
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
  const customize=(event)=>{
    event.preventDefault();
    setUserPop(!userPop);
  }
  return (
    <>
      <div className="header">
        <div className="header-items">
        <div className="header-searchbar">
          <form className="header-seachbar-form" onSubmit={handleSearch}>
            <div>
              <input ref={searchInput} type="text" placeholder="Recherche..." />
              <button type="submit" className="btn-search"><i id="fa-brands" class="fa-brands fa-sistrix"></i></button>
            </div>
          </form>
        </div> 
        <Logout/>
         {/* <button className="btn-disconect" onClick={logOut } >Deconnexion</button> */}
         <img src={profil} className="header-user-profil" onClick={customize}  title='User-Profil'></img>
        </div>
        {userPop && (<div className="pop-up">
        <h2>Modifier votre profil</h2><span className="exitIcon"><i class="fa-solid fa-circle-xmark" onClick={customize}></i></span>
        <form action="">
          <input type="text"  placeholder="Nom" /> <br />
          <input type="text"  placeholder="Prenom"/> <br />
          <input type="text"  placeholder="Lien du profil"/><br />
          <input type="text" name="" id= "" placeholder="Facebook" /> <br />
          <input type="text" name="" id= "" placeholder="Github" /><br />
          <button className="saveUser" type="submit">Enregistrer</button>
        </form>
      </div>)}
         
      </div>
    </>
  );
}
