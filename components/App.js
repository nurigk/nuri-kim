import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
// import Intro from "./Intro";
import HomeBackground from "./HomeBackground.js";
import AppsIBuilt from "./AppsIBuilt.js";
import Contact from "./Contact.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = (props) => {
  // const [introFinished, setIntroFinished] = useState(false);
  const refsArray = useRef([]);
  refsArray.current = [];

  const addToRefs = (el) => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };
useEffect(()=>{
  refsArray.current.forEach((panel, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false
        });
      });

    ScrollTrigger.create({
      snap: {
        snapTo: 1/2,
        delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the
    }});
},[])

  return (
    <div className="body-container">
      {/* {introFinished === false ? (
        <Intro setIntroFinished={setIntroFinished} />
      ) : ( */}
        <>
        <section id="home-section">
          <HomeBackground />
          </section>
          <section id="apps-section">
          <AppsIBuilt />
          </section>
          <section id="contact-section">
          <Contact />
          </section>

        </>
      {/* )} */}
    </div>
  );
};

export default hot(App);
