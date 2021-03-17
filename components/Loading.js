import React, { useState, useEffect, useRef } from "react";
import { hot } from "react-hot-loader/root";
import smiley from "../dist/asset/smiley.svg"

const Loading = () => {
  return (
    <div id="loading">Loading<img id={smiley}src={smiley}></img></div>
  )

}

export default hot(Loading);