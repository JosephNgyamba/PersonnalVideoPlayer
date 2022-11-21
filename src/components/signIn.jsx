import React from "react";
import Login from "./login";
import "./Styles/Sing.css";
import "./Styles/main.css"

export default function SignIn() {

  
  const clientId =
    "71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";

return(
        <div className="signIn">
          <div className="signIn-content">
          <div className="signIn-text">
            <h1>Bienvenu sur</h1>
            <h2>J-VideoPlayer</h2>
            <p>Powered by <strong>KDA</strong></p>
          </div>
            <div className="signIn-button">
              <Login/>
            </div>
         </div>   
        </div>
)
}