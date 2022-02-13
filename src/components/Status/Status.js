import "./Status.scss";
import React from "react";

import PropTypes from "prop-types";
Status.propTypes = {
  children: PropTypes.node,
  selectStatus: PropTypes.string,
};

function Status({ children, selectStatus }) {
  return (
    <div className={`status ${selectStatus && "status_" + selectStatus}`}>
      {children}
    </div>
  );
}

export default Status;
