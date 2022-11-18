import React from "react";
import Login from "./login";
import "./Styles/Sing.css";
import "./Styles/main.css"

export default function SignIn() {

  
  const clientId =
    "71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";
 
  return (
   
    <>
     
    <div className="login-button">
    </div>
      <div className="content">
        <div className="content-element">
          <Login/>
        </div>
      </div>
    </>
  );
}
