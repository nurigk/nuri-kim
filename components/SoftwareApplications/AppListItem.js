import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./appListItem.scss";
import plus from "../../dist/asset/plus.svg";

const AppListItem = ({ currentApp, setCurrentApp }) => {
  useEffect(() => {
    gsap.from(".apps-detail", { y: "250%", duration: 1 });
  }, [currentApp]);

  const handleCloseApps = () => {
    const closingApps = gsap.to(".apps-detail", {
      y: "-100%",
      duration: 1,
      onComplete: () => setCurrentApp({}),
    });
    return closingApps;
  };

  return (
    <>
      {currentApp.appName ? (
        <div className={`apps-detail ${currentApp.nickName}-color`}>
          <img
            className="plus"
            id="close-detail"
            src={plus}
            onClick={handleCloseApps}
          ></img>
          <div className="logo-container">
            {currentApp.nickName === "products" ?
            <div className="app-name" id="products-name">{currentApp.appName}</div>
            :
            <div className="app-name">{currentApp.appName}</div>
            }

          </div>

          <div className="app-video-container">
            <video
              id={`${currentApp.appName.toLowerCase()}-video`}
              controls
              muted
            >
              <source src={currentApp.demoUrl} type="video/mp4"></source>
            </video>
          </div>

          <article className="article-container">
            <div className="article-items">
              <p className="article-header">Technologies used</p>
              <p className="article-content">{currentApp.techUsed}</p>
            </div>
            <div className="article-items">
              <p className="article-header">App Description</p>
              <p className="article-content">{currentApp.appDesc}</p>
            </div>
          </article>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default hot(AppListItem);
