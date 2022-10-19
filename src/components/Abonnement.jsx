import React from "react";
import Header from "./header";
import Text from "./accroche";
import "./main.css";
import { useEffect,useState } from "react";


export default function Subscriptions(){
    const token = localStorage.getItem("token");
  const [item, setItem] = useState([]);
  // const clé = "AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk";
 
  useEffect(()=>{
    fetch("https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
    {
      method:'GET',
       headers: new Headers({ 'Authorization' : `Bearer ${token}` })
    })
    .then((responce)=>responce.json())
    .then((data)=>setItem(data.items))
    console.log(item);
  
  },[])
    return(
        <>
        <Header />
        <Text /> 
        <div className="video-list">

        </div>
        </>
    )
}