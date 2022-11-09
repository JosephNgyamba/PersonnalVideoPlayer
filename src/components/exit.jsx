import React from "react";
import { GoogleLogout } from "react-google-login";
import { useNavigate } from "react-router";

export default function logout(){
    const Navigate = useNavigate();
    const onSuccess=()=>{
        console.log('exit');
        localStorage.removeItem('token') 
        localStorage.removeItem("profil") 
        localStorage.removeItem("username") 
        Navigate("/")
    }

    return (
        <>
            <GoogleLogout
            buttonText="logout"
            onLogoutSuccess={onSuccess}
            />
        </>
    )
}