import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.scss";
import Resume from "./Resume.js";
import contactBackground from "../dist/asset/contact-background.svg";
import contactBackgroundSmall from "../dist/asset/contact-background-small.svg";
import thisIsDogGif from "../dist/asset/thisisdog-gif.gif";

const Contact = ({ addToRefs, refsArray }) => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [displayResume, setDisplayResume] = useState(false);
  const [displayIcons, setDisplayIcons] = useState(false);

  useEffect(() => {
    gsap.from("#contact-contact", {
      x: "-100%",
      duration: 1,
      scrollTrigger: {
        trigger: "#aib",
        start: "top top",
        scrub: 1,
      },
    });
  }, []);

  const handleDisplayVideo = () => {
    setDisplayVideo(true)
    setTimeout(()=>{
      setDisplayVideo(false);
    },3400)
  }

  return (
    <section className="contact-container" id="contact" ref={addToRefs}>
      <picture id="contact-background">
        <source media="(min-width:801px)" srcSet={contactBackground} />
        <source media="(max-width:800px)" srcSet={contactBackgroundSmall} />
        <img src={contactBackground} alt="background" />
      </picture>
      <div className="contact-items">
        {displayResume ? (
          <Resume
            displayResume={displayResume}
            setDisplayResume={setDisplayResume}
          />
        ) : (
          <></>
        )}
        <div className="contact-item" id="resume-container">
          <h1
            id="resume"
            className="app-name clickable"
            onClick={() => {
              setDisplayResume(true);
            }}
          >
            Resume
          </h1>
        </div>

        <div className="contact-item" id="contact-me-container">
          <h1
            id="contact-me"
            className="app-name"
            onMouseEnter={handleDisplayVideo}
          >
            Reach out to me!
          </h1>
          {displayVideo ? (
            <img id="dog-video" src={thisIsDogGif}></img>
          ) : (
            <></>
          )}
          <div className="contact-icons" id="contact-contact">
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
      </div>
      <div className="nuri-kim"
        id="contact-nuri-kim">Nuri Kim</div>

    </section>
  );
};
export default hot(Contact);
