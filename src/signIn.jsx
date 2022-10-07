import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./Sing.css";

export default function SignIn() {
  const navigate = useNavigate();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await fetch("https://accounts.google.com/gsi/client");
    };
    fetchdata();
  }, []);
  let access_token;
  let client;

  const loadmail = () => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      "https://www.googleapis.com/calendar/v3/calendars/primary/events"
    );
    xhr.setRequestHeader("Authorization", "Bearer " + access_token);
    // xhr.send();
    alert(access_token);
  };
  return (
    <>
      <div className="content">
        <div className="content-element">
          <h1>Bienvenue sur notre plate forme!</h1>
          <button onClick={() => navigate("/home")}>
            <h2>PLAY</h2>
          </button>
        </div>
      </div>
    </>
  );
}
