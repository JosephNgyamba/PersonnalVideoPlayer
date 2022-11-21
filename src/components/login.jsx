import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router";
import "./Styles/main.css"
import "./Styles/login.css"

export default function Login(){

    const clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";
    const Navigate=useNavigate();
    const onSuccess=(res)=>{
            console.log(res);
            localStorage.setItem("token",res.accessToken)
            localStorage.setItem("profil", res.profileObj.imageUrl)
            localStorage.setItem("username",res.profileObj.name)
            Navigate('/home')
    }
    
    const onFailure=()=>{
        console.log('connexion échouée');
    }

    return(
        <>
         <GoogleLogin
          clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com"
          onSuccess={onSuccess}
          onFailure={onFailure}
           isSignedIn = { false }
          cookiePolicy = { 'single_host_origin' } 
          buttonText={"CONNEXION"}
         />
        </>
    )
}