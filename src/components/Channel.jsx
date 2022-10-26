import React from "react";
import { useParams } from "react-router";
import Header from "./header";
import Text from "./accroche";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import './main.css';

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=15&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA)

export default function Channel(){
    const[chaine,setChaine]=useState([]);
    const token =localStorage.getItem('token')
    let {id}=useParams();
    console.log(id);
    //  const key=`AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`;
    //youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails&channelId=UC_x5XG1OV2P6uZZ5FSM9Ttw&maxResults=25&
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
            <Header/>
            <Text/>

            <p className="read-text">Vos Abonnements</p>
            <div className="video-list">
            {chaine.map((list,index)=>(<Link to={`/read/${list.id.videoId}`} className="content-video" key={index}>
          <img src={list.snippet.thumbnails.default.url}></img>
            <div className="video-info">
                <p>{list.snippet.title}</p>
            </div>
          </Link>))}
          </div>
        </>
    )
}