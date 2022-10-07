import React from "react";
import "./headerstyle.css";

export default function Header() {
  return (
    <>
      <div className="header">
        <img src="" alt="mon logo" />
        <div className="search">
          <input type="text" placeholder="Recherche..." />
          <button>...</button>
        </div>
        <div className="accueil">
          <a href="#">Accueil</a>
          <a href="#">Mon compte</a>
        </div>
      </div>
    </>
  );
}
