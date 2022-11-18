import React from "react";
import { Link } from "react-router-dom";
import { useEffect,useState } from "react";
import "./Styles/sidebar.css";
import "./Styles/main.css"



export default function SideBar(){

    
    const profil= localStorage.getItem("profil")
    const username= localStorage.getItem("username")
    

    // ------fetch des chaines abonnées---------- //

  let token = localStorage.getItem("token");
  const [chain, setChain] = useState([]);


  useEffect(()=>{
    const fetchData=()=>{
      fetch(" https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=5&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
    {
      method:'GET',
       headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
    })
    .then(res=>res.json())
    .then(data=> setChain(data.items))
     
    }
     
    fetchData();
   
  },[]);
   

    return(
        <>
            <div className="sidebar">
             <Link to={"/home"}> <h2>J-VideoPlayer</h2><p>Powered by KDA</p> </Link> 
             <div className="sidebar-menu">
               <div className="sidebar-user"><img src={profil} className="sidebar-user-profil"></img>
                <h4 className="sidebar-user-name">{username}</h4></div>
                <div className="sidebar-menu-items">
                <div className="sidebar-menu-items-accueil"><Link to={"/home"}><h4>Accueil</h4></Link></div>
                <div className="sidebar-menu-items-abonnement"><Link to={"/Abonnement"}><h4>Mes Abonnements</h4></Link></div> 
                <div className="sidebar-menu-items-abonnement-channel">
                  {chain.length > 0 && chain.map((channel,index)=> (
               <div className="sidebar-menu-items-abonnement-channel-list"> <Link to={`/Channel/${channel.snippet.resourceId.channelId}`}  key={index}>
                <div className="sidebar-menu-items-abonnement-channel-profil">
                  <img src={channel.snippet.thumbnails.high.url}></img>
                  <div> <p>{channel.snippet.title}</p></div>
               </div>
                </Link> </div>)
         )}
                </div>
                </div> 
            </div>
              </div>
        </>
    )
}