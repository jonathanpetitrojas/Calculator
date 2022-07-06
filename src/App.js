import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate, string } from 'mathjs';



function App() {

  const [input, setInput] = useState('');

  const calcularResultado = () => {
    if (esOperador(input.substring(input.length-1, input.length))) { alert("Falta un valor en la pantalla para poder realizar la operacion.");}
      else if (input) {
      setInput(evaluate(input));} 
        else{
        alert("Para realizar un calculo debe ingresar los valores primero.");}
  }

  const esOperador = value => { 
    return isNaN(value) && (value !== '.') && (value !== '=');
  };

  const agregarInput = val => {
    if ( typeof input === 'number' ) {  setInput(val); }
      else {
    setInput(input + val);
      }
  };

  const agregarInputO = val => { 
    
    if (esOperador(input.toString().substring(input.length-1, input.length))) { alert("No puede agregar dos operadores seguidos."); } 
      else { setInput(input + val) }; 
  };

  const agregarInputO2 = val => {
    if (esOperador(input.toString().substring(input.length-1, input.length))) { alert("No puede agregar dos operadores seguidos.") ;}
      else if (input === '') {alert("Para seleccionar este operador debe ingresar los valores primero.");}
        else { setInput(input + val) }; 
  };

 



  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src= {freecodecamplogo}
          className= 'freecodecamp-logo'
          alt= 'logo de freecodecamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input = {input}/>
        <div className='fila'>
          <Boton manejarClic= {agregarInput}>1</Boton>
          <Boton manejarClic= {agregarInput}>2</Boton>
          <Boton manejarClic= {agregarInput}>3</Boton>
          <Boton manejarClic= {agregarInputO}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic= {agregarInput}>4</Boton>
          <Boton manejarClic= {agregarInput}>5</Boton>
          <Boton manejarClic= {agregarInput}>6</Boton>
          <Boton manejarClic= {agregarInputO}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic= {agregarInput}>7</Boton>
          <Boton manejarClic= {agregarInput}>8</Boton>
          <Boton manejarClic= {agregarInput}>9</Boton>
          <Boton manejarClic= {agregarInputO2}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic= {calcularResultado}>=</Boton>
          <Boton manejarClic= {agregarInput}>0</Boton>
          <Boton manejarClic= {agregarInput}>.</Boton>
          <Boton manejarClic= {agregarInputO2}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear= {() => setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
