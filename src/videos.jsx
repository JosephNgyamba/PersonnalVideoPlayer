import React from "react";
import "./headerstyle.css";
export default function Videos() {
  return (
    <>
      <div className="video-list">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cQZOfeKrWDs"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </>
  );
}
