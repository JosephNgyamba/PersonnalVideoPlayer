import {React,useState,useEffect} from "react";
// import { useRef } from "react";
import axios from 'axios';
import { useParams,Link } from "react-router-dom";
import Header from "./header";
import SideBar from "./sidebar";
import "./Styles/read.css";
import "./Styles/main.css"

export default function Read() {
  
  let { id } = useParams();

  const profil= localStorage.getItem("profil");
  const username= localStorage.getItem("username");

  const [comments,setComments]=useState("");
  const [mycomments,setMycomments]=useState([]);
  const [videoId,setVideoId]=useState([]);
  const [videos, setVideos] = useState([]);
  const [likes,setLike]=useState(0);
  const[myLikes,setMylikes]=useState()

  const counter=async (event)=>{
    event.preventDefault();
    setLike(likes+1);
     const sendLike= await axios.post('http://localhost:3000/likes/post',
    {likes})
  }
  const uncounter=async (event)=>{
    event.preventDefault();
    setLike(likes-1)
    const sendLike= await axios.post('http://localhost:3000/likes/post',
    {likes})
  }
 
  const response=(event)=>{
    event.preventDefault();
    document
      alert('response')
  }
   console.log('compteur'+':' +likes);
 const comment = async (e)=>{
        const data ={}
         data.userName = username 
         data.comments = comments
         data.userProfile=profil
         data.videoId=id

        e.preventDefault();
        const sendComment= await axios.post('http://localhost:3000/comments/post',data);
        // alert("affiche mon commentaire"+":"+comments);
        setComments('');
 }
console.log("affiche mon commentaire"+":"+comments);

  useEffect(()=>{
    const fetchData=()=>{
    fetch(`http://localhost:3000/comments/get}`)
    .then(res=>res.json())
    .then(data=>{setMycomments(data)});
  }
  fetchData()
},[]);


useEffect(()=>{
    const fetchData=()=>{
    fetch('http://localhost:3000/likes/get')
    .then(res=>res.json())
    .then(data=>{setMylikes(data)});
  }
  fetchData();
},[]);

  
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
        </div>
        <div className="read-comment">
          <img src={profil} className="comment-user-profil"></img><span className="commet-username">{username}</span>
          <form  action="" method="POST" onSubmit={comment} >
            <div className="read-form-textarea" >
              <textarea value={comments}  type="text"  placeholder="Laissez un commentaire" onChange={(e)=>{
              setComments(e.target.value)
            }}>
            </textarea> </div>
            <button>Commenter</button>
          </form>
        </div>
       
        
        </div>
      </div>
      <br />
       <div>
          {mycomments.map((element,index)=>(
            <div className="read-display-comments" key={index}>
              
              <div><img className="comments-user-profil" src={profil}></img><p className="user-name">{username}</p>
             </div>
              <div className="user-comment"><p ><strong>{element.comments}</strong></p></div>
              <div className="comments-liked"><span>{likes}<i class="fa-regular fa-thumbs-up" onClick={counter}></i><i class="fa-regular fa-thumbs-down" onClick={uncounter}></i></span><i class="fa-sharp fa-solid fa-share"></i><span className="comments-response" onClick={response}>repondre</span> </div>
              <div className="responseComment">
              <p>reponse</p>
              </div>
            </div>  
        ))}
        </div>
    </>
  );
}
