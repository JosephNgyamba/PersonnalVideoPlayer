import React from "react";
import { useParams } from "react-router";
import Header from "./header";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import SideBar from "./sidebar";
import "./Styles/main.css"

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
            <div className="video-list">
            {chaine.map((list,index)=>(<Link to={`/read/${list.id.videoId}`} className="content-video" key={index}>
          <img src={list.snippet.thumbnails.high.url}></img>
            <div className="video-info">
                <h5 className="video-title">{list.snippet.title}</h5>
            </div>
          </Link>))}
          </div>
        </>
    )
}