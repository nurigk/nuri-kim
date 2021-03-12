import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";


const Resume = ({displayResume, setDisplayResume}) => {
  const rlResume= gsap.timeline();

  useEffect(()=>{
    rlResume.from(".resume-container",{x:"250%", duration:1})
    rlResume.from("#click-download", {y:"-250%", duration:1})
  },[displayResume])
  const handleClose = () => {
    const closing= gsap.to(".resume-container",{x:"-100%", duration:1, onComplete:()=>setDisplayResume(false)})
    return closing;
  }
  return (
    <section className="resume-container">

      <img
      className="plus"
          id="close"
          src="../dist/asset/plus.svg"
          onClick={handleClose}
        ></img>

      <img id="resume-img" src="../dist/asset/resume.png" alt="Resume" ></img>
      <a id="click-download"href="../dist/asset/resume.png" download="nuri-kim-resume">
        <h1 >Click here to download</h1>
        </a>
    </section>
  );
};
export default hot(Resume);
