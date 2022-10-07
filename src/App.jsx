import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./signIn";
import Home from "./home";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </>
  );
}
