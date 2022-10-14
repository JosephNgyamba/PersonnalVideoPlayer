import React from "react";
import "./main.css";
import Header from "./header";
import Text from "./accroche";
import { useParams } from "react-router-dom";

export default function Read() {
  let { id } = useParams();
  return (
    <>
      <Header />
      <Text />
      <p className="read-text">Profitez de nos meilleurs vidéos...</p>

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
