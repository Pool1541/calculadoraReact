import './App.css';
import Boton from './components/buttons';
import Pantalla from './components/display';
import BotonClear from './components/clear';
import freeCodeCampLogo from './images/freecodecamplogo.png';
import { useState } from 'react';
import { evaluate } from 'mathjs';


function App() {

  let [input, setInput] = useState('');
  
  // const display = document.querySelector('.input');
  // const keycapture = () => {
  //   display.addEventListener( 'keydown', key => {
  //     let dato = display.innerHTML;
  //     const op = ['+','*','-','/','.'];
  //     if(!isNaN(key.key) || op.includes(key.key)){
  //         display.innerHTML = dato + key.key;
  
  //     }else {
  //     }
  //   });
  // }
  // keycapture();


  const agregarInput = valor => {
    setInput(input + valor );
  };

  const limpiarInput = () => {
    setInput('');
  };

  const calcularResultado = () => {
    if(input) {
      setInput(evaluate(input));
    } else {
      alert ('Por favor ingrese valores para realizar los cálculos');
    }
  };

  const replace = valor => {
    if(isNaN(input.toString().slice(-1))){
      setInput(input.toString().slice(0,-1) + valor);
    } else {
      setInput(input + valor);
    }
  }


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
        src={freeCodeCampLogo}
        className='freecodecamp-logo'
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} display="input" />
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={replace}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={replace}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={replace}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={replace}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={limpiarInput}>Limpiar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
