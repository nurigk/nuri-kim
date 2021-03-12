import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./contact.scss";
import Resume from "./Resume.js";

const Contact = ({ addToRefs, refsArray }) => {
  const [displayVideo, setDisplayVideo] = useState(false);
  const [displayResume, setDisplayResume] = useState(false);
  const [displayIcons, setDisplayIcons] = useState(false);
  const dogVideo = useRef(null);

  useEffect(() => {
    if (displayVideo === true && dogVideo.current !== null) {
      dogVideo.current.onended = () => {
        setDisplayVideo(false);
      };
    }
  }, [displayVideo, dogVideo]);

  useEffect(() => {
  gsap.from("#contact-contact", {
    x: "-100%",
    duration: 1,
    scrollTrigger: {
      trigger: "#aib",
      start:"top top",
      scrub: 1,
    },
  });
}, []);


  return (
    <section className="contact-container" id="contact" ref={addToRefs}>
      <picture id="contact-background">
        <source
          media="(min-width:801px)"
          srcSet="../dist/asset/contact-background.svg"
        />
        <source
          media="(max-width:800px)"
          srcSet="../dist/asset/contact-background-small.svg"
        />
        <img src="../dist/asset/contact-background.svg" alt="background" />
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
            onMouseEnter={() => {
              setDisplayVideo(true);
            }}
          >
            Reach out to me!
          </h1>
          {displayVideo ? (
            <video
              id="dog-video"
              autoPlay
              controls={false}
              muted
              ref={dogVideo}
            >
              <source
                src="../dist/asset/thisisdog.mp4"
                type="video/mp4"
              ></source>
            </video>
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

      <img
        className="nuri-kim"
        id="contact-nuri-kim"
        src="../dist/asset/nuri-kim.svg"
        alt="Nuri Kim"
      ></img>
    </section>
  );
};
export default hot(Contact);
