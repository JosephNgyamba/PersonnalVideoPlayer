import React from "react";
import Header from "./header";
import Text from "./accroche";
import "./main.css";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

export default function Subscriptions(){
  let token = localStorage.getItem("token");
  const [chain, setChain] = useState([]);

  useEffect(()=>{
    const fetchData=()=>{
      fetch(" https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
    {
      method:'GET',
       headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
    })
    .then(res=>res.json())
    .then(data=> {setChain(data.items)}
      )
     
    }
     
    fetchData();
   
  },[]);
   console.log(chain);
    return(
        <>
        <Header />
        <Text /> 
        <div className="video-list">
         {chain.length > 0 && chain.map((channel)=> (
          <Link to={`/Channel/${channel.id}`} className="content-video" key={channel.id}>
          <img src={channel.snippet.thumbnails.default.url}></img>
          <p>{channel.snippet.title}</p>
          </Link>)
         )}
        </div>
        </>
    )
}