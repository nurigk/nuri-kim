import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import Resume from "./Resume.js";
import "./menu.scss";

const Menu = ({setShowMenu}) => {
  const [view, setView] = useState("menu");
  const changeViews = () => {
    if (view === "apps"){
      return <AppsIBuilt />
    } else if (view === "resume") {
      return <Resume />
    } else if (view === "contact") {
      return <Contact />
    }
  }
  return (
    <nav className="nav">
      <ul className="nav-list">
        <a className="list-item" href="#aib" onClick={()=>{setShowMenu(false)}}>Software Application</a>
        <a className="list-item" href="#resume" onClick={()=>{setShowMenu(false)}}>Resume</a>
        <a className="list-item" href="#contact" onClick={()=>{setShowMenu(false)}}>Contact me</a>
      </ul>
    {/* {changeViews()} */}
    </nav>
  );
};
export default hot(Menu);
