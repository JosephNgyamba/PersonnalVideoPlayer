import React from "react";
import "./main.css";
import "./read.css";
import Header from "./header";
import { useParams } from "react-router-dom";
import SideBar from "./sidebar";

export default function Read() {
  let { id } = useParams();
  return (
    <>
      <SideBar/>
      <Header />
      <div className="read-content">
        <iframe
          width="920"
          height="520"
          src={`https://www.youtube.com/embed/${id}`}
        ></iframe>
      </div>
    </>
  );
}
