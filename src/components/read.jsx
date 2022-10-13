import React from "react";
import "./headerstyle.css";
import Header from "./header";
import Text from "./accroche";

export default function Read() {
  return (
    <>
      <Header />
      <Text />
      <div className="read-content">
        {/* <img src={item.snippet.thumbnails.default.url.id} alt="" /> */}
        <p>Hello!</p>
      </div>
    </>
  );
}
