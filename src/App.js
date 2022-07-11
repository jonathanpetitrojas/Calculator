import "./App.css";
import freecodecamplogo from "./imagenes/freecodecamp-logo.png";
import Button from "./componentes/Button";
import Display from "./componentes/Display";
import ClearButton from "./componentes/ClearButton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const lastChar = (value) => {
    return value.slice(- 1);
  };

  const calculateResult = () => {
    if (itsaOperator(lastChar(input))) {
      alert("There is a missing value on the screen to perform the operation.");
    } else if (input) {
      setInput(evaluate(input));
    } else {
      setInput("");
    }
  };

  const itsaOperator = (value) => {
    return ["+","-","*","/"].includes(value);
  };

  const addInput = (val) => {
    if (typeof input === "number") {
      setInput(val);
    } else {
      setInput(input + val);
    }
  };

  const basicOperator = (val) => {
    setInput(input + val);
  };

  const operatorType2 = (val) => {
    if (itsaOperator(lastChar(input.toString()))) {
      setInput(input.slice(0, input.length - 1) + val);
    } else if (input === "") {
      setInput(input);
    } else {
      setInput(input + val);
    }
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-container">
        <img
          src={freecodecamplogo}
          className="freecodecamp-logo"
          alt="freecodecamplogo"
        />
      </div>
      <div className="calculator-container">
        <Display input={input} />
        <div className="row">
          <Button handleClick={addInput}>1</Button>
          <Button handleClick={addInput}>2</Button>
          <Button handleClick={addInput}>3</Button>
          <Button handleClick={basicOperator}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>4</Button>
          <Button handleClick={addInput}>5</Button>
          <Button handleClick={addInput}>6</Button>
          <Button handleClick={basicOperator}>-</Button>
        </div>
        <div className="row">
          <Button handleClick={addInput}>7</Button>
          <Button handleClick={addInput}>8</Button>
          <Button handleClick={addInput}>9</Button>
          <Button handleClick={operatorType2}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={calculateResult}>=</Button>
          <Button handleClick={addInput}>0</Button>
          <Button handleClick={addInput}>.</Button>
          <Button handleClick={operatorType2}>/</Button>
        </div>
        <div className="row">
          <ClearButton handleClear={() => setInput("")}>Clear</ClearButton>
          <Button
            handleClick={() => {
              let x = input.toString();
              setInput(x.slice(0, x.length - 1));
            }}
          >
            delete
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
