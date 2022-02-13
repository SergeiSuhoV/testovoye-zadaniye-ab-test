import "./TitleActive.scss";
import React, { useState } from "react";

import PropTypes from "prop-types";
TitleActive.protoTypes = {
  children: PropTypes.node,
  imageDirection: PropTypes.string,
  onChangeDirect: PropTypes.bool,
};

function TitleActive({ children, imageDirection, onChangeDirect }) {
  const [direction, setDirection] = useState(true);

  function handleDirection() {
    // QUESTION: внутри менять направление стрелки при нажатии
    // или вывести во вне, для большей управляемости? Типа данные отсортировались а после стрелка поменяла направление? Как лучше?
    setDirection(!direction);
    onChangeDirect(direction);
  }

  return (
    <button className="title-active" onClick={handleDirection}>
      <div className="title-active__text">{children}</div>
      {imageDirection && (
        <img
          src={imageDirection}
          alt={`direct ${direction ? "up" : "down"}`}
          className={
            direction
              ? "title-active__image title-active__image_direct-up"
              : "title-active__image title-active__image_direct-down"
          }
        ></img>
      )}
    </button>
  );
}

export default TitleActive;
