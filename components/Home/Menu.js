import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import "./menu.scss";


const Menu = ({setShowMenu}) => {
  const [view, setView] = useState("menu");

  return (
    <nav className="nav">
      <ul className="nav-list">
        <a className="list-item" href="#aib" onClick={()=>{setShowMenu(false)}}>Software Applications</a>
        <a className="list-item" href="#resume" onClick={()=>{setShowMenu(false)}}>Resume</a>
        <a className="list-item" href="#contact" onClick={()=>{setShowMenu(false)}}>Contact me</a>
      </ul>
    </nav>
  );
};
export default hot(Menu);
