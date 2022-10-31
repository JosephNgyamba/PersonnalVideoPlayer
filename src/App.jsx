import "./App.css";
import { Route, Routes } from "react-router";
import SignIn from "./components/signIn";
import Home from "./components/home";
import Read from "./components/read";
import Videos from "./components/displayvideos";
import Subscriptions from "./components/Abonnement";
import Channel from "./components/Channel";
import SearchResults from "./components/Searchresults";
import { allcontext } from "./components/Mycontext";
import { useState } from "react";

export default function App() {

  const [searchingTerm,setSearchingTerm]=useState('');
  //  const Navigate = useNavigate();



  return (
    <>
    <allcontext.Provider value={{searchingTerm,setSearchingTerm}} >
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/read/:id/" element={<Read />}></Route>
        <Route path="/displayvideos" element={<Videos />}></Route>
        <Route path="/Abonnement" element={<Subscriptions/>}></Route>
        <Route path="/Channel/:id" element={<Channel/>}></Route>
        <Route path="/Searchresults/" element={<SearchResults/>}></Route>
        <Route path="/Searchresults/:id/" element={<SearchResults/>}></Route>
      </Routes>
      </allcontext.Provider>
    </>
  );
}
