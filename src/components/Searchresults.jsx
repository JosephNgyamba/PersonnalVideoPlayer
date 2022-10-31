import React from "react";
import axios from "axios";
import { useRef,useState } from "react";
import Header from "./header";
import Text from "./accroche";
import { useContext } from "react";
import { allcontext } from "./Mycontext";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";



export default function SearchResults(){

  let{id}=useParams()

    const {searchingTerm} = useContext(allcontext)

    const searchTerm=useRef();
    // console.log( searchTerm.current.value); 
    const [videos, setVideos]=useState([]);

    useEffect(()=>{
      axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchingTerm}&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`)
    .then(result => {
      setVideos(result.data.items)
      console.log(result.data.items)})
    },[searchingTerm])

  //   const handleSearch = async (event) => {
  //     event.preventDefault()
    
  //   const response = await  

        
  //      setVideos(response.data.items)
  // }
    return(
        <>
        <Header/>
        <Text />
         <div className="video-list">
      {videos.map((item,index) => (
        <Link to={`/read/${item.id.videoId}`} className="content-video" key={index}>
          <img src={item.snippet.thumbnails.default.url}></img>
          <div className="video-info">
            <p>{item.snippet.title}</p>
          </div>
        </Link>
      ))}
    </div>
        </>
    )
}