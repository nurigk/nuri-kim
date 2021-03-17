import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./appsIBuilt.scss";
import AppListItem from "./AppListItem.js";
gsap.registerPlugin(ScrollTrigger);
import namaslayDemo from "../dist/asset/namaslay-demo.mp4";
import crispDemo from "../dist/asset/crisp-demo-small.mp4";
import plantsitterDemo from "../dist/asset/plantsitter-demo.mp4";
import productsDemo from "../dist/asset/api.mp4";
import rect from "../dist/asset/rect.svg"

const AppsIBuilt = ({ addToRefs, refsArray }) => {
  const [appsList, setAppsList] = useState([
    {
      appName: "Namaslay",
      nickName: "namaslay",
      githubUrl: "https://github.com/blue-ocean-hrnyc31/namaslay-client",
      techUsed: `React + Hooks, React-Router, Docker, React-Bootstrap, Express, PassportJS
      PostgreSQL, Puppeteer, Jest`,
      appDesc: `Namaslay is a virtual yoga studio where members can enjoy the benefits of the community without visiting the studio in person. I worked on the
      yoga and meditation rooms where all logged-in users can view each
      others activity and location, chat, and listen to music. I worked
      on data visualization using SVG elements to map users data and
      translating wireframes into an interactive and responsive app.`,
      demoUrl: namaslayDemo,
    },
    {
      appName: "Crisp",
      nickName: "crisp",
      githubUrl: "https://github.com/hrnyc31-team-sparrow/FEC",
      techUsed: `React + Hooks, Redux + Hooks, Sass, Express`,
      appDesc: `Crisp is a fashion e-commerce web application. I worked on the reviews and ratings widget where users can sort through the reviews and submit their own.`,
      demoUrl: crispDemo,
    },
    {
      appName: "Plantsitter",
      nickName: "plantsitter",
      githubUrl: "https://github.com/nurigk/plantsitter",
      techUsed: `React + Hooks, Twilio, Node-cron, Sass, Express`,
      appDesc: `Plantsitter is a MVP project that I created where users can sign up and get text message reminders to water their plants at the frequency of their choosing.`,
      demoUrl: plantsitterDemo,
    },
    {
      appName: "Products-Service-API",
      nickName: "products",
      githubUrl: "https://github.com/SDC-Stratocumulus/products-service",
      techUsed: `Express, PostgreSQL, Docker, Artillery`,
      appDesc: `This is an API microservice built to scale up a back-end system of an e-commerce web application where I designed system architecture to encapsulate business logic and achieve a modernized system to support web-scale traffic.`,
      demoUrl: productsDemo,
    },
  ]);
  const [currentApp, setCurrentApp] = useState({});

  const handleSetCurrentApp = (app) => {
    let filtered = appsList.filter((e) => {
      return e.appName.includes(app);
    });
    setCurrentApp(filtered[0]);
  };

  useEffect(() => {
    gsap.to("#about", {
      x: "250%",
      duration: 3,
      scrollTrigger: {
        trigger: "#aib",
        scrub: 1,
      },
    });

    gsap.from("#namaslay-container, #plantsitter-container", {
      x: "150%",
      duration: 3,
      scrollTrigger: {
        trigger: "#home-section",
        start: "top top",
        scrub: 1,
      },
    });

    gsap.from("#crisp-container, #products-container", {
      x: "-100%",
      duration: 3,
      scrollTrigger: {
        trigger: "#home-section",
        start: "top top",
        scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    return () => {
      setCurrentApp({});
    };
  }, []);

  const diplayDetail = () => {
    if (currentApp !== {}) {
      return (
        <AppListItem currentApp={currentApp} setCurrentApp={setCurrentApp} />
      );
    }
  };

  return (
    <section className="aib-container" id="aib" ref={addToRefs}>
      <div className="apps-container">
        {diplayDetail()}

        {/* <img
          id="software-application"
          src={softwareApplications}
          alt="Software Applications"
        ></img> */}
        <div
          id="software-application"
        >Software Applications</div>
        {/* <img
          className="nuri-kim"
          id="apps-nuri-kim"
          src={nuriKim}
          alt="Nuri Kim"
        ></img> */}
        <div
          className="nuri-kim"
          id="apps-nuri-kim"
        >Nuri Kim</div>
        <div id="namaslay-container" className="app-item">
          <h1
            id="namaslay"
            className="app-name clickable namaslay-color"
            onClick={() => {
              handleSetCurrentApp("Namaslay");
            }}
          >
            Namaslay
          </h1>
          <a
            id="namaslay-gh"
            href="https://github.com/blue-ocean-hrnyc31/namaslay-client"
            className="gh-logo icon"
            target="_blank"
          ></a>
          <span className="rect" id="n-rect">
            <img className="rect-img" src={rect}></img>
          </span>
        </div>

        <div id="crisp-container" className="app-item">
          <h1
            id="crisp"
            className="app-name clickable crisp-color"
            onClick={() => {
              handleSetCurrentApp("Crisp");
            }}
          >
            Crisp
          </h1>
          <a
            id="crisp-gh"
            className="gh-logo icon"
            href="https://github.com/hrnyc31-team-sparrow/FEC"
            target="_blank"
          ></a>
          <span className="rect" id="c-rect">
            <img className="rect-img" src={rect}></img>
          </span>
        </div>

        <div id="plantsitter-container" className="app-item">
          <h1
            id="plantsitter"
            className="app-name clickable plantsitter-color"
            onClick={() => {
              handleSetCurrentApp("Plantsitter");
            }}
          >
            Plantsitter
          </h1>
          <a
            id="plantsitter-gh"
            className="gh-logo icon"
            href="https://github.com/nurigk/plantsitter"
            target="_blank"
          ></a>
          <span className="rect" id="pl-rect">
            <img className="rect-img" src={rect}></img>
          </span>
        </div>

        <div id="products-container" className="app-item">
          <h1
            id="products"
            className="app-name clickable products-color"
            onClick={() => {
              handleSetCurrentApp("Products");
            }}
          >
            Products-Sevice API
          </h1>
          <a
            id="products-gh"
            className="gh-logo icon"
            href="https://github.com/SDC-Stratocumulus/products-service"
            target="_blank"
          ></a>
          <span className="rect" id="pr-rect">
            <img className="rect-img" src={rect}></img>
          </span>
        </div>
      </div>
    </section>
  );
};
export default hot(AppsIBuilt);
