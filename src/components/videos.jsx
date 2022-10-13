import React from "react";
import Read from "./read";
import "./headerstyle.css";
import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const token = localStorage.getItem("token");
  const clé = "AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk";
  const fetchVideo = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=${clé}`;

  useEffect(() => {
    fetch(fetchVideo)
      .then((response) => response.json())
      .then((data) => setVideos(data.items));
  }, []);
  console.log(videos);

  return (
    <div className="video-list">
      {videos.map((item) => (
        <div className="content-video" onClick={() => Navigate("/read")}>
          <img src={item.snippet.thumbnails.default.url}></img>
          <p>{item.snippet.title}</p>
        </div>
      ))}
    </div>
  );
}
