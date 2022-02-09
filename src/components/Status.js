import "./Status.scss";

import React from "react";

function Status({ children, selectStatus, props }) {
  return (
    <div className={`status ${selectStatus && "status_" + selectStatus}`} {...props}>
      {children}
    </div>
  );
}

export default Status;
