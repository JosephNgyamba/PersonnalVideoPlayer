import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./components/signIn";
import Home from "./components/home";
import Read from "./components/read";
import Videos from "./components/videos";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/read/:id" element={<Read />}></Route>
        <Route path="/videos" element={<Videos />}></Route>
      </Routes>
    </>
  );
}
