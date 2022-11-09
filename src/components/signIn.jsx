import {React, useEffect} from "react";
import { gapi,loadAuth2} from "gapi-script";
import "./Sing.css";
import Login from "./Login";


export default function SignIn() {

  const clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";

  
  useEffect(()=>{
    const start=()=>{
        gapi.auth2.init({
          clientId,
          scope:"https://www.googleapis.com/auth/youtube.force-ssl"
        })
    }
    gapi.load('client:auth2', start)
  },[])
 
 
  return (
    <>
    <Login/>
    </>
  );
}
