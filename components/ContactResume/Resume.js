import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import plus from "../../dist/asset/plus.svg";
import resume from "../../dist/asset/Nuri-Kim-Resume.jpg";
import "./resume.scss";

const Resume = ({ displayResume, setDisplayResume }) => {
  const rlResume = gsap.timeline();

  useEffect(() => {
    rlResume.from(".resume-container", { x: "250%", duration: 1 });
    rlResume.from("#click-download", { y: "-250%", duration: 1 });
  }, [displayResume]);
  const handleClose = () => {
    const closing = gsap.to(".resume-container", {
      x: "-100%",
      duration: 1,
      onComplete: () => setDisplayResume(false),
    });
    return closing;
  };
  return (
    <section className="resume-container">
      <img className="plus" id="resume-close" src={plus} onClick={handleClose}></img>

      <img id="resume-img" src={resume} alt="Resume"></img>
      <a id="click-download" href={resume} download="nuri-kim-resume">
        <h1>Click here to download</h1>
      </a>
    </section>
  );
};
export default hot(Resume);
