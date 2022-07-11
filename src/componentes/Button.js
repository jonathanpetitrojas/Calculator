import React from "react";
import "../hojas-de-estilo/Button.css";
function Button(props) {
  const itsaOperator = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };
  return (
    <div
      className={`button-container ${
        itsaOperator(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
