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
        <li className="list-item" onClick={()=>{setView("resume")}}>Resume</li>
        <li className="list-item" onClick={()=>{setView("contact")}}>Contact me</li>
      </ul>
    {/* {changeViews()} */}
    </nav>
  );
};
export default hot(Menu);
