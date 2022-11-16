import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";

export default function Logout(){

    const Navigate=useNavigate();
    const out=(res)=>{
        Navigate('/')
            console.log('quitter');
    }
    return (
        <>
            <GoogleLogout
            clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com"
             onLogoutSuccess={out}
            />
        </>
    )
}