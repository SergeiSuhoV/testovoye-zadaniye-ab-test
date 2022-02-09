import "./Button.scss";

import React from "react";

function Button({ children, props, selectStatusButton }) {
  
  return (
    <button
      className={`button ${
        selectStatusButton && "button_" + selectStatusButton
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
