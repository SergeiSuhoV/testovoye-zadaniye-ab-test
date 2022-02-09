import "./TitleActive.scss";

import Chevron from "../images/Chevron.png";

import React, { useState } from "react";

function TitleActive({ children, props }) {
  
  function handleDirection(direction) {
    console.log("direct" + direction);
  }

  return (
    <button className="title-active" {...props} onClick={handleDirection}>
      <div className="title-active__text">{children}</div>
      <img
        src={Chevron}
        alt="direct up"
        className="title-active__image title-active__image_direct-down"
      ></img>
    </button>
  );
}

export default TitleActive;
