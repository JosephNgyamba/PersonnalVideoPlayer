import React from "react";
import Header from "./header";
import DisplayVideos from "./displayvideos";
import SideBar from "./sidebar";
import "./Styles/main.css"




export default function Home() {
  
 
  return (
    <>
      <SideBar/>
      <Header/>
      <DisplayVideos/>
    </>
  );
}
