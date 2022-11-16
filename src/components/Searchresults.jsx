import React from "react";
import axios from "axios";
import { useRef,useState } from "react";
import Header from "./header";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import SideBar from "./sidebar";



export default function SearchResults(){

  let{id}=useParams()

    const {searchingTerm} = useContext(allcontext)

    const searchTerm=useRef();
    const [videos, setVideos]=useState([]);

    useEffect(()=>{
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchingTerm}&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`)
    .then(result => {
      setVideos(result.data.items)
      console.log(result.data.items)})
    },[searchingTerm])

    return(
        <>
        <SideBar/>
        <Header/>
         <div className="video-list">
      {videos.map((item,index) => (
        <Link to={`/read/${item.id.videoId}`} className="content-video" key={index}>
          <img src={item.snippet.thumbnails.high.url}></img>
          <div className="video-info">
            <h5 className="video-title">{item.snippet.title}</h5>
          </div>
        </Link>
      ))}
    </div>
        </>
    )
}