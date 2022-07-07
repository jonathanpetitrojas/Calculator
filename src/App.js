import "./App.css";
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";
import Boton from "./componentes/Boton";
import Pantalla from "./componentes/Pantalla";
import BotonClear from "./componentes/BotonClear";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const lastChar = (value) => {
    return value.charAt(value.length - 1);
  };

  const calcularResultado = () => {
    if (esOperador(lastChar(input))) {
      alert("Falta un valor en la pantalla para poder realizar la operacion.");
    } else if (input) {
      setInput(evaluate(input));
    } else {
      setInput("");
    }
  };

  const esOperador = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  const agregarInput = (val) => {
    if (typeof input === "number") {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  const basicOp = (val) => {
    setInput(input + val);
  };

  const opType2 = (val) => {
    if (esOperador(lastChar(input.toString()))) {
      setInput(input.slice(0, input.length - 1) + val);
    } else if (input === "") {
      setInput(input);
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img
          src={freecodecamplogo}
          className="freecodecamp-logo"
          alt="logo de freecodecamp"
        />
      </div>
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={basicOp}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={basicOp}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={opType2}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={opType2}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Clear</BotonClear>
          <Boton
            manejarClic={() => {
              let x = input.toString();
              setInput(x.slice(0, x.length - 1));
            }}
          >
            delete
          </Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
