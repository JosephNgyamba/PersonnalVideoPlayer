import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router";

export default function Login(){
  const Navigate=useNavigate();
    const clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";

     const onSuccess=(res)=>{
        console.log(res.profileObj.imageUrl);
        console.log("login succes",res);
        localStorage.setItem('token',res.accessToken) 
        localStorage.setItem("profil",res.profileObj.imageUrl) 
        localStorage.setItem("username",res.profileObj.givenName) 
        Navigate('/home')

     }

     const onFailure=(res)=>{
        console.log(res);
     }
     return (
    <>
    <div className="login-button">
        <GoogleLogin
            client_id={clientId}
            onSuccess={onSuccess}
            button-text=" se connecter"
            onFailure={onFailure}
        />  
      </div>
    </>
  );
}