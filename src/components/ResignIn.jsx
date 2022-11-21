import React from "react";
import { useNavigate } from "react-router";
import './Styles/ResignIn.css';

export default function ResignIn(){

  const Navigate=useNavigate();
  const Back= ()=>{
    Navigate('/')
  }
  
 return (
        <>
            <div className="resignIn">
          <div className="resignIn-content">
          <div className="resignIn-text">
            <h1>A bientot</h1>
          </div>
            <div className="resignIn-button">
            <button onClick={Back} >RECONNEXION</button>
            </div>
         </div>   
        </div>
        </>
    )
}