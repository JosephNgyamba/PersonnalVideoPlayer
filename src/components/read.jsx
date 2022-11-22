import {React,useState,useEffect} from "react";
import "./Styles/read.css";
import "./Styles/main.css"
import Header from "./header";
import { useParams,Link } from "react-router-dom";
import SideBar from "./sidebar";



export default function Read() {

  const userId = "yuhddkflksdhlhsdf"

  const [com, setCom] =useState("")
  const [comRed, setComRed] =useState(null)

  let { id } = useParams();
  const profil= localStorage.getItem("profil");
  const username= localStorage.getItem("username");
 const comment =(e)=>{
  e.preventDefault()
  setComRed(com)
  alert("idVideo : "+id +", idUser : "+userId + " msg : " +com)
  setCom("")
 }
const [videoId,setVideoId]=useState([]);
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
//   useEffect(()=>{
//     const fetchData=()=>{
//     fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=AIzaSyCFR0BUmDJEn_6lDXEy364ieGsVz7s3kEk`)
//     .then(res=>res.json())
//     .then(data=>{setVideoId(data.items)});
//   }
//   fetchData()
// },[]);
// console.log(videoId[0]);
  
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
        <div className="read-description">
          {/* <h2>{videoId.snippet.title}</h2> */}
        </div>
        <div className="read-comment">
          <img src={profil} className="comment-user-profil"></img><span className="commet-username">{username}</span>
          <form  action="" onSubmit={comment} >
            <div className="read-form-textarea"><textarea  type="text" onChange={(e) => setCom(e.target.value)} value={com} placeholder="Laissez un commentaire"/></div>
            <button>Commenter</button>
          </form>
        </div>
        { comRed ? <div className="read-commentaire">
          <hr />
          <img src={profil} className="comment-user-profil" />
          <span className="user-comment">{username} : {comRed}</span>
        </div> : null}
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
