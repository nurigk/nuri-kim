import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import plus from "../dist/asset/plus.svg";
import Menu from "./Menu.js";
import "./home.scss";
import { gsap } from "gsap";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const videoRef = useRef(null);
  const tlEMove = gsap.timeline({ repeat: -1, yoyo: true });
  useEffect(() => {
    tlEMove.to("#all-text", { y: 30, duration: 1.5 });
    tlEMove.to("#top", { y: 30, duration: 1.5 }, "-=.8");
    tlEMove.to("#middle", { y: 30, duration: 1.5 }, "-=.8");
    tlEMove.to("#bottom", { y: 20, duration: 1.5 }, "-=.8");
    gsap.to(".down-arrow", {y:10, duration:1, yoyo:true, repeat:-1})
  });

  const displayMenu = () => {
    if (showMenu) {
      return <Menu setShowMenu={setShowMenu} />;
    }
  };

  return (
    <div className="nav-container">
      <div className="left-half"></div>
      {displayMenu()}
      {showMenu ? (
        <img
          className="plus menu"
          src={plus}
          onClick={() => {
            setShowMenu(false);
          }}
        ></img>
      ) : (
        <svg
          className="clickable"
          id="explore"
          onClick={() => {
            setShowMenu(true);
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 636.42 450"
        >
          <g id="all-text">
            <text
              className="e-cls-1"
              transform="translate(94.64 232.54) rotate(-18.24) scale(0.94 1)"
            >
              E
            </text>
            <text
              className="e-cls-1"
              transform="translate(94.64 232.54) rotate(-18.24) scale(0.94 1)"
            >
              E
            </text>
            <text
              className="e-cls-1"
              transform="translate(155.49 212.18) rotate(-11.46) scale(0.94 1)"
            >
              x
            </text>
            <text
              className="e-cls-1"
              transform="translate(215.78 199.68) rotate(-4.45) scale(0.94 1)"
            >
              p
            </text>
            <text
              className="e-cls-1"
              transform="translate(269.13 195.62) rotate(0.5) scale(0.94 1)"
            >
              l
            </text>
            <text
              className="e-cls-1"
              transform="translate(299.7 194.9) rotate(5.91) scale(0.94 1)"
            >
              o
            </text>
            <text
              className="e-cls-1"
              transform="translate(355.34 200.6) rotate(12.09) scale(0.94 1)"
            >
              r
            </text>
            <text
              className="e-cls-1"
              transform="matrix(0.89, 0.29, -0.31, 0.95, 394.2, 208.12)"
            >
              e
            </text>
            <text
              className="e-cls-1"
              transform="matrix(0.87, 0.37, -0.39, 0.92, 447.18, 225.97)"
            >
              !
            </text>
            <ellipse
              id="bottom"
              className="e-cls-2"
              cx="389.59"
              cy="254.85"
              rx="286.13"
              ry="136.51"
              transform="translate(-52.24 -18.2) rotate(-2.98)"
            />
            <ellipse
              id="middle"
              className="e-cls-3"
              cx="326.66"
              cy="172.64"
              rx="286.13"
              ry="136.51"
            />
            <ellipse
              id="top"
              className="e-cls-4"
              cx="286.63"
              cy="137.01"
              rx="286.13"
              ry="136.51"
            />
          </g>
        </svg>
      )}

      <img className="nuri-kim" id="home-nuri-kim" src="../dist/asset/nuri-kim.svg" alt="Nuri Kim"></img>
      <div id="about">
        <video
          onMouseEnter={() => {
            videoRef.current.play();
          }}
          controls={false}
          id="nuri-video"
          ref={videoRef}
          muted
        >
          <source
            src="../dist/asset/nuri_clip_small.mp4"
            type="video/mp4"
          ></source>
        </video>
        <img id="about-me" src="../dist/asset/about-rect2.svg"></img>

        <div className="contact-icons" id="home-contact">
      <a
        id="contact-email"
        className="contact-icon clickable"
        href="mailto:nuri.g.kim@gmail.com"
      ></a>
      <a
        id="contact-linkedIn"
        className="contact-icon clickable"
        href="https://www.linkedin.com/in/nuri-kim-025a7239/"
        target="_blank"
      ></a>
      <a
        id="contact-gh"
        className="contact-icon clickable"
        href="https://github.com/nurigk"
        target="_blank"
      ></a>
    </div>
      </div>
          <div className="scroll-down">
            <p className="scroll">SCROLL</p>
              <img className="down-arrow" src="../dist/asset/down-arrow.svg" alt="down arrow"></img>
            </div>
    </div>
  );
};
export default hot(Home);
