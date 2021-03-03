import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import plus from "../dist/asset/plus.svg";
import Menu from "./Menu.js";
import "./home.scss";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  const displayMenu = () => {
    if (showMenu) {
      return (
        <Menu setShowMenu={setShowMenu}/>
      );
    }
  };

  return (
    <div className="nav-container">
      {displayMenu()}
      <picture id="nuri-kim">
        <source
          id="nuri-reg"
          media="(min-width: 1025px)"
          srcSet="../dist/asset/nuri.svg"
          alt="Nuri Kim"
        />
        <source
          id="nuri-med"
          media="(min-width: 500px)"
          srcSet="../dist/asset/nuri-med.svg"
          alt="Nuri Kim"
        />
        <source
         id="nuri-small"
          media="(min-width: 100px)"
          srcSet="../dist/asset/nuri-small.svg"
          alt="Nuri Kim"
        />
        <img id="nuri-reg" src="../dist/asset/nuri.svg" alt="Nuri Kim" />
      </picture>
      <p id="about-me">
        I'm a software engineer and a fashion designer.
        <br />
        I love solving problems in creative ways.
        <br />
        I also love collaborating and taking on new challenges.
        <br />
        Click{"   "}
        <a src="#contact" id="here" className="click-cursor">
          {"    "}
          here{" "}
        </a>{" "}
        to reach me.
      </p>
      {showMenu ?
      <img id="plus" className= "menu" src={plus} onClick={()=>{setShowMenu(false)}}>
      </img>
      :
      <img id="explore" src="../dist/asset/explore.svg" onClick={() => {
        setShowMenu(true);
      }}/>

      }

      {/* */}
    </div>
  );
};
export default hot(Home);
