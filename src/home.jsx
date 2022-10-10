import React from "react";
import Header from "./header";
import Text from "./accroche";
import UserTools from "./user";
import Videos from "./videos";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const token = localStorage.getItem("token");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/subscriptions?part=id,snippet,contentDetails&maxResults=15&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk&mine=true`,
      {
        method: "GET",
        headers: new Headers({ Authorization: `Bearer ${token}` }),
      }
    )
      .then((response) => response.json())
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));
    console.log(setVideos);
  }, []);
  return (
    <>
      <Header />
      <Text />
      <UserTools />
      <Videos />
    </>
  );
}
