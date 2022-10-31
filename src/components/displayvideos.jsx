import React from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Videos() {

const [videos, setVideos] = useState([]);
 useEffect(() => {
    const fetchData = () => {
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
          
         ).then(response => response.json())
          .then(data =>{setVideos(data.items)
          } )      
    }
    
    fetchData();
  }, []);

  return (
    <div className="video-list">
      {videos.map((item,index) => (
        <Link to={`/read/${item.id}`} className="content-video" key={index}>
          <img src={item.snippet.thumbnails.default.url}></img>
          <div className="video-info">
            <p>{item.snippet.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
