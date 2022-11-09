import React,{ useState,useEffect,useRef } from "react";
import Header from "./header";
import Text from "./accroche";
import DisplayVideos from "./displayvideos";
// import Login from "./Login";
// import logOut from "./Logout";




export default function Home() {
  const clientId="71694010182-a2r6neps9gbp22mojd33agf29egodqhs.apps.googleusercontent.com";
//   let token = localStorage.getItem("token")
//  useEffect(()=>{ 
//   const fecthData=()=>{
//       fetch("https://people.googleapis.com/v1/people/me/key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
//       {
//         method:'GET',
//        headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
//       })
//       .then(res=>res.json())
//       .then(data=>console.log(data))
//     }
//     fecthData();
//   },[token])
useEffect(()=>{
    const start=()=>{
      gapi.client.init({
        client:clientId,
        scope:"https://www.googleapis.com/auth/youtube",
      })
    };
    gapi.load('client',start);
  },[])
  return (
    <>
      <Header/>
      <Text/>
      <DisplayVideos/>
    </>
  );
}
