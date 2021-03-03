import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./appsIBuilt.scss";

const AppsIBuilt = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const containerRef = useRef();
  // const refsArray = useRef([]);
  // refsArray.current=[];

  const tlApps = gsap.timeline({ repeat: -1 });
  const tlApps2 = gsap.timeline({ repeat: -1, delay: 8 });
  let containerWidth = containerWidth || 0 ;

  const addToRefs = el => {
    if (el && !refsArray.current.includes(el)) {
      refsArray.current.push(el);
    }
  };

  // useEffect(() => {
  //     containerWidth=containerRef.current.offsetWidth
  //     console.log(containerWidth)
  //     console.log("refsArray.current: ",refsArray.current)
  // },[])


  useEffect(() => {

    gsap.to("#nuri-kim", {
      x: "-250%",
      duration: 3,
      scrollTrigger: {
        trigger: "#apps-title",
        scrub: true,
      },
    });

    gsap.to("#about-me", {
      x: "250%",
      duration: 3,
      scrollTrigger: {
        trigger: "#apps-title",
        scrub: 1,
      },
    });

    tlApps.from(".title-container1", {
      x: "100%",
      duration: 16,
      scrollTrigger: ".titles",
      ease: "none",
    });

    tlApps.to(".title-container1", { x: "-100%", duration: 16, ease: "none" });

    tlApps2.from(".title-container2", {
      x: "105%",
      duration: 16,
      scrollTrigger: ".titles",
      ease: "none",
    });

    tlApps2.to(".title-container2", { x: "-100%", duration: 16, ease: "none" });

    // gsap.to(refsArray.current,{
    //   xPercent: -100 * 3,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".home-bg-container",
    //     start:"bottom top",
    //     invalidateOnRefresh: true,

    //     scrub: 1,
    //     snap: 1 / 3,
    //     end: () => "+=" + containerWidth
    //   }
    // })
  }, []);

  return (
    <section className="aib-container" id="aib" >
      <div className="titles">
        <div className="title-container1 title-containers">
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
        </div>
        <div className="title-container2 title-containers">
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
          <span className="apps-title">Software Application</span>
        </div>
      </div>
      {/* <div className="apps-panel namaslay" ref={addToRefs}>Namaslay</div>
      <div className="apps-panel crisp" ref={addToRefs}>Crisp</div>
      <div className="apps-panel plantsitter" ref={addToRefs}>Plantsitter</div>
      <div className="apps-panel products" ref={addToRefs}>Products-Service API</div> */}
      <ul className="apps-list">
          <div className="apps-item">
            <img id="namslay-preview" />
            <a >Namaslay</a>
            </div>
          <div className="apps-item"><a>Crisp</a></div>
          <div className="apps-item">Plantsitter</div>
          <div className="apps-item">Products-Service API</div>
      </ul>
      {/* <div className="scroll-down">
        Scroll down
        <div className="down-arrow" />
      </div> */}
    </section>
  );
};
export default hot(AppsIBuilt);
