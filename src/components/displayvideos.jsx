import {React,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./displayvideos.css";

export default function Videos() {

const [videos, setVideos] = useState([]);
 useEffect(() => {
    const fetchData = () => {
      fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=30&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk",
          
         ).then(response => response.json())
          .then(data =>{setVideos(data.items), console.log(data)   
          } )  
              
    }
    
    fetchData();
  }, []);

  return (
    <div className="video-list">
      {videos.map((item,index) => (
        <div className="content-video" ><Link to={`/read/${item.id}`} key={index}>
          <img src={item.snippet.thumbnails.high.url}></img>
          <div className="video-info">
            <h5 className="video-title">{item.snippet.title}</h5>
          </div>
        </Link>
        </div>
      ))}
    </div>
  );
}
