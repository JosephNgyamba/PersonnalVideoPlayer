import React,{ useEffect,useState } from "react";
import { useParams } from "react-router";
import Header from "./header";
import { Link } from "react-router-dom";
import SideBar from "./sidebar";
import "./Styles/main.css"
import "./Styles/channel.css"

export default function Channel(){
    const[chaine,setChaine]=useState([]);
    const token =localStorage.getItem('token')
    let {id}=useParams();
   
    useEffect(()=>{
        const fetchData=()=>{
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&type=video&maxResults=25&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`,
            {
                method:'GET',
                headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
            }
            )
            .then(res=>res.json())
            .then(data=>{setChaine(data.items)  ,console.log(data.items)} )
        }
        fetchData()
    },[])

    return(
        <>   
            <SideBar/>
            <Header/>
            <div className="channel-profil"></div>
            <div className="channel-list">
            {chaine.map((list,index)=>(
                <div className="channel-content-video">
            <Link to={`/read/${list.id.videoId}`} key={index}>
          <img src={list.snippet.thumbnails.high.url}></img>
            <div className="video-info">
                <h6>{list.snippet.title}</h6>
            </div>
          </Link></div>))}
          </div>
        </>
    )
}