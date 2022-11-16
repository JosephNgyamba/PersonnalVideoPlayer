import React from "react";
import { Link } from "react-router-dom";
import { gapi, loadAuth2} from "gapi-script";
import { useNavigate } from "react-router-dom";
import "./sidebar.css";


export default function SideBar(){

   
    const client =
    "71694010182-v9dh8npv6bkonh2a0au9n0kseo2duhjq.apps.googleusercontent.com";
  
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

    return(
        <>
            <div className="sidebar">
             <Link to={"/home"}> <h2>J-VideoPlayer</h2></Link> 
                <div className="sidebar-menu">
            <Link to={"/home"}><h4>Accueil</h4></Link>
           <Link to={"/Abonnement"}><h4>Mes Abonnements</h4></Link>
            <button className="btn-disconect" onClick={logOut } >Deconnexion</button>
            </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}