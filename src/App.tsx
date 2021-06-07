import "./styles.css";
import menu  from "./svg/menu.svg";
import logo from './svg/brain.svg'

import {useState} from "react";
import {QuizListComponent} from "./Components/QuizListComponent"
export default function App() {
  const [showSideBar , setSideBar] = useState(true)
  const displaySideBar = ():void=>{
    setSideBar(!showSideBar)
    console.log(showSideBar)
  }
  
  return (
    <div className="App">
    <div className = {!showSideBar?"side-bar active" : "side-bar"} >
      <div><img src = {logo} width={"100px"} alt = "processing"/></div>
      <div className = "side-bar-items">HOME</div>
      <div className = "side-bar-items">LEADER BOARD</div>
      <div className = "side-bar-items">ABOUT</div>
    </div>
    <div className = {!showSideBar?"main active " : "main"}>
      <div className = "page">
        <div onClick={()=>displaySideBar()} className = "menu"><img src = {menu} alt ="processing"/></div>
        <QuizListComponent/>
      </div>
      
    </div>
      
    </div>
  );
}
