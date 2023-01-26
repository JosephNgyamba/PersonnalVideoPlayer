import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";
import "./Styles/logout.css"
import "./Styles/main.css"

export default function Logout(){

    const Navigate=useNavigate();
    const out=()=>{
        Navigate('/ResignIn')
    }
    return (
        <>
            <GoogleLogout
            className="button-out"
            clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com"
             onLogoutSuccess={out}
             icon={false}
             buttonText={'Deconnexion'}
            />
        </>
    )
}