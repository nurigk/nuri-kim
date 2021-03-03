import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader/root";
import Intro from "./Intro";
import HomeBackground from "./HomeBackground.js";
import AppsIBuilt from "./AppsIBuilt.js";

const App = (props) => {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <div className="body-container">
      {introFinished === false ? (
        <Intro setIntroFinished={setIntroFinished} />
      ) : (
        <>
        <section>
          <HomeBackground />
          </section>
          <section id="apps-section">
          <AppsIBuilt />
          </section>
        </>
      )}
    </div>
  );
};

export default hot(App);
