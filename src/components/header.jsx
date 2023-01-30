import React from "react";
import { useNavigate } from "react-router";
import { gapi, loadAuth2, loadAuth2WithProps } from "gapi-script";
import { useRef ,useState} from "react";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import axios from 'axios';
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

  const saveUsers= async (e)=>{
      e.preventDefault();
      const user={}
      user.name=e.target.nom.value;
      user.mail=e.target.email.value;
      user.prenom=e.target.prenom.value;
      user.Facebook=e.target.Facebook.value;
      user.linkedin=e.target.linkedin.value;
      user.ProfilLink=e.target.profilLink.value;
      
      alert('user saved'+':'+e.target.nom.value +':'+ e.target.email.value)

       const sendComment= await axios.post('http://localhost:3000/users/post',user);
       e.target.email.value=('');
       e.target.nom.value=('');
       e.target.ProfilLink.value=('');
       e.target.Facebook.value=('');
       e.target.linkedin.value=('');
       e.target.prenom.value=('');
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
        <form action="" onSubmit={saveUsers}>
          <input type="text" name="nom"  id="" placeholder="Nom" /> <br />
          <input type="text"  name="prenom" id="" placeholder="Prenom"/> <br />
          <input type="text"  name="email" id="" placeholder="email"/><br />
          <input type="text"  name="Facebook" id= "" placeholder="Facebook" /> <br />
          <input type="text"  name="linkedin" id= "" placeholder="linkedin" /><br />
          <input type="text"  name="profilLink" id= "" placeholder="ProfilLink" /><br />
          <button className="saveUser" type="submit">Enregistrer</button>
        </form>
      </div>)}
         
      </div>
    </>
  );
}
