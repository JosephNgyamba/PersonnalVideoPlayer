import {React,useState,useEffect} from "react";
import "./Styles/read.css";
import "./Styles/main.css"
import Header from "./header";
import { useParams,Link } from "react-router-dom";
import SideBar from "./sidebar";

export default function Read() {
  let { id } = useParams();
  const profil= localStorage.getItem("profil");
  const username= localStorage.getItem("username");
 const comment =()=>{
  alert('commentaire')
 }
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
    <>
      <SideBar/>
      <Header />
      <div className="read-content">
        <div className="read-content-comment">
        <iframe
          width="920"
          height="520"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
        <div className="read-comment">
          <img src={profil} className="comment-user-profil"></img><span className="commet-username">{username}</span>
          <form  action="" onSubmit={comment} >
            <div className="read-form-textarea"><textarea  type="text"  placeholder="Laissez un commentaire"/></div>
            <button>Commenter</button>
          </form>
        </div>
        </div>
        <div className="read-outside-video">
          {videos.map((item,index) => (
        <div className="read-content-video" ><Link to={`/read/${item.id}`} key={index}>
          <img src={item.snippet.thumbnails.high.url}></img>
        </Link>
       
        </div> 
      ))}
        </div>
      </div>
    </>
  );
}
