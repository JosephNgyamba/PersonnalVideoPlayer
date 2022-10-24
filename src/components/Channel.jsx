import React from "react";
import { useParams } from "react-router";
import Header from "./header";
import Text from "./accroche";
import { useEffect,useState } from "react";

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&maxResults=15&key=AIzaSyAtyhesRrybOy-JDiv-rBfWxHpy90utvrA)

export default function Channel(){
    const[channelId,setChannelId]=useState([]);
    const token =localStorage.getItem('token')
    let {id}=useParams();
     const key=`AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`;
   
    useEffect(()=>{
        const fetchData=()=>{
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&type=video&maxResults=25&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`,
            {
                method:'GET',
                headers: new Headers({ 'Authorization' : `Bearer ${token}` }) 
            })
            .then(res=>res.json())
            .then(data=>{setChannelId(data.items)
                console.log(data.items)} )
        }
        fetchData()
    },[])

    return(
        <>
            <Header/>
            <Text/>
            <p className="read-text">Vos Abonnements</p>
        </>
    )
}