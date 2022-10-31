import React, { useContext } from "react";
import Header from "./header";
import Text from "./accroche";
import "./main.css";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import SearchResults from "./Searchresults";
import { allcontext } from "./Mycontext";

export default function Subscriptions(){
  let token = localStorage.getItem("token");
  const [chain, setChain] = useState([]);
  const {searchingTerm} = useContext(allcontext)

  console.log('searching term abonnement',searchingTerm)

  useEffect(()=>{
    const fetchData=()=>{
      fetch(" https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=25&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
    {
      method:'GET',
       headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
    })
    .then(res=>res.json())
    .then(data=> setChain(data.items))
     
    }
     
    fetchData();
   
  },[]);
   console.log(chain);
    return(
        <>
        <Header />
        <Text /> 
        <div className="video-list">
         {chain.length > 0 && chain.map((channel,index)=> (
          <Link to={`/Channel/${channel.snippet.resourceId.channelId}`} className="content-video" key={index}>
          <img src={channel.snippet.thumbnails.default.url}></img>
          <p>{channel.snippet.title}</p>
          </Link>)
         )}
        </div>
        </>
    )
}