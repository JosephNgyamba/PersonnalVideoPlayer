import {React,useState,useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styles/displayvideos.css";
import "./Styles/main.css"

export default function Videos() {

  const username= localStorage.getItem("username")
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
    <>
    <div className="welcome-message"><h3>Bienvenu,<span></span> <span>{username}</span></h3>
    <p> sur <strong>JvideoPlayer,</strong>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam animi eius tenetur nemo vel, quae voluptatem blanditiis necessitatibus accusamus laudantium incidunt adipisci possimus reiciendis, doloribus dignissimos debitis quisquam enim dolorem.</p></div>
    <div className="display-video-list">
      {videos.map((item,index) => (
        <div className="display-content-video" ><Link to={`/read/${item.id}`} key={index}>
          <img src={item.snippet.thumbnails.high.url}></img>
            <h6>{item.snippet.title}</h6>
        </Link>
        </div>
      ))}
    </div>
    </>
  );
}
