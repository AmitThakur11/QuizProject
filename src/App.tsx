import React from "react";

import "./styles.css";
import menu  from "./svg/menu.svg";
import logo from './svg/brain.svg'
import {Routes,Route,Link , useParams} from 'react-router-dom'

import {useState} from "react";
import {QuizListComponent} from "./Components/QuizListComponent";
import {QuizContainer} from "./Components/QuizContainer";
export default function App() {
  const [showSideBar , setSideBar] = useState(true)
  const displaySideBar = ():void=>{
    setSideBar(!showSideBar)
    console.log(showSideBar)
  }

  return (
    <div className="App">
      <nav></nav> 
    <div className = {!showSideBar?"side-bar active" : "side-bar"} >
      <div><img src = {logo} width={"100px"} alt = "processing"/></div>
      <div onClick = {()=>displaySideBar()} className = "side-bar-items"><Link to ="/" >HOME</Link></div>
      <div className = "side-bar-items">LEADER BOARD</div>
      <div className = "side-bar-items">ABOUT</div>
    </div>
    <div className = {!showSideBar?"main active " : "main"}>
      <div className = "page">
        <div onClick={()=>displaySideBar()} className = "menu"><img src = {menu} alt ="processing"/></div>
        <Routes>
        <Route path = "/" element = {<QuizListComponent/>} />
        <Route path = "/quiz/:id" element = { <QuizContainer />}/>
        </Routes>
      </div>
      
    </div>
      
    </div>
  );
}
