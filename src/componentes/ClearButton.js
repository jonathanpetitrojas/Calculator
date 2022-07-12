import React from "react";
import "../hojas-de-estilo/ClearButton.css";
const ClearButton = (props) => (
  <div className="clear-button" onClick={props.handleClear}>
    {props.children}
  </div>
);

export { ClearButton };
